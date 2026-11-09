#!/usr/bin/env bun
// Extract readable text from .pptx (slides + speaker notes, in order) and .docx (body, headings marked),
// or with --inventory, count the visuals: pictures, charts, SmartArt diagrams, tables and words per slide
// (pptx) or per top-level section (docx), so a deck's visual density is visible before anyone reads it.
// --inventory also takes Markdown and HTML, counting images, Mermaid blocks, inline SVG, tables, callouts
// and code blocks per H2 section.
// Usage: bun Tools/extract.ts [--inventory] <file.pptx|file.docx|file.md|file.html> [...more files]
// Requires `unzip` on PATH.

const decode = (s: string) =>
  s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, "&");

async function unzipList(file: string): Promise<string[]> {
  const p = Bun.spawnSync(["unzip", "-Z1", file]);
  if (p.exitCode !== 0) throw new Error(`unzip could not list ${file}: ${p.stderr.toString()}`);
  return p.stdout.toString().split("\n").filter(Boolean);
}

function unzipRead(file: string, entry: string): string {
  const p = Bun.spawnSync(["unzip", "-p", file, entry]);
  return p.exitCode === 0 ? p.stdout.toString() : "";
}

// Paragraph-aware text: each <a:p> or <w:p> becomes a line.
function paragraphs(xml: string, ns: "a" | "w"): string[] {
  const out: string[] = [];
  for (const para of xml.split(new RegExp(`</${ns}:p>`))) {
    const runs = [...para.matchAll(new RegExp(`<${ns}:t(?:\\s[^>]*)?>([^<]*)</${ns}:t>`, "g"))].map((m) => decode(m[1]));
    const line = runs.join("").trim();
    if (line) out.push(line);
  }
  return out;
}

const num = (s: string) => Number(s.match(/(\d+)\.xml$/)?.[1] ?? 0);
const count = (xml: string, re: RegExp) => (xml.match(re) ?? []).length;
const words = (lines: string[]) => lines.join(" ").split(/\s+/).filter(Boolean).length;

type Row = { where: string; pictures: number; charts: number; diagrams: number; tables: number; words: number; notes?: number };

function printInventory(rows: Row[], hasNotes: boolean) {
  const head = ["Where", "Pictures", "Charts", "Diagrams", "Tables", "Words", ...(hasNotes ? ["Notes words"] : [])];
  console.log(`| ${head.join(" | ")} |`);
  console.log(`|${head.map(() => "---").join("|")}|`);
  for (const r of rows) {
    const cells = [r.where, r.pictures, r.charts, r.diagrams, r.tables, r.words, ...(hasNotes ? [r.notes ?? 0] : [])];
    console.log(`| ${cells.join(" | ")} |`);
  }
  const t = rows.reduce((a, r) => ({ pictures: a.pictures + r.pictures, charts: a.charts + r.charts, diagrams: a.diagrams + r.diagrams, tables: a.tables + r.tables, words: a.words + r.words }), { pictures: 0, charts: 0, diagrams: 0, tables: 0, words: 0 });
  const withVisual = rows.filter((r) => r.pictures + r.charts + r.diagrams + r.tables > 0).length;
  console.log(`\n${rows.length} ${hasNotes ? "slides" : "sections"}, ${withVisual} with at least one visual · pictures ${t.pictures} · charts ${t.charts} · diagrams ${t.diagrams} · tables ${t.tables} · words ${t.words}`);
  const textOnly = rows.filter((r) => r.pictures + r.charts + r.diagrams + r.tables === 0 && r.words > 80).map((r) => r.where);
  if (textOnly.length) console.log(`Text-only with more than 80 words (candidates for a visual): ${textOnly.join(", ")}`);
}

async function pptx(file: string, inventory: boolean) {
  const entries = await unzipList(file);
  const slides = entries.filter((e) => /^ppt\/slides\/slide\d+\.xml$/.test(e)).sort((a, b) => num(a) - num(b));
  const rows: Row[] = [];
  for (const [i, s] of slides.entries()) {
    const xml = unzipRead(file, s);
    const rels = unzipRead(file, s.replace("slides/", "slides/_rels/") + ".rels");
    const notesTarget = rels.match(/Target="\.\.\/notesSlides\/(notesSlide\d+\.xml)"/)?.[1];
    const notes = notesTarget ? paragraphs(unzipRead(file, `ppt/notesSlides/${notesTarget}`), "a").filter((l) => !/^\d+$/.test(l)) : [];
    if (inventory) {
      rows.push({
        where: `s${i + 1}`,
        pictures: count(xml, /<p:pic\b/g),
        charts: count(rels, /Target="\.\.\/charts\//g),
        diagrams: count(rels, /Target="\.\.\/diagrams\/data\d+\.xml"/g),
        tables: count(xml, /<a:tbl\b/g),
        words: words(paragraphs(xml, "a")),
        notes: words(notes),
      });
      continue;
    }
    console.log(`\n## Slide ${i + 1}`);
    for (const line of paragraphs(xml, "a")) console.log(line);
    if (notes.length) {
      console.log("\n**Speaker notes:**");
      for (const line of notes) console.log(line);
    }
  }
  if (inventory) printInventory(rows, true);
}

async function docx(file: string, inventory: boolean) {
  const xml = unzipRead(file, "word/document.xml");
  if (!xml) throw new Error(`${file} has no word/document.xml`);
  const rels = unzipRead(file, "word/_rels/document.xml.rels");
  const chartIds = new Set([...rels.matchAll(/Id="([^"]+)"[^>]*Target="charts\//g)].map((m) => m[1]));
  const rows: Row[] = [];
  let cur: Row = { where: "(before first heading)", pictures: 0, charts: 0, diagrams: 0, tables: 0, words: 0 };
  // Split on paragraphs and tables in document order; a table is counted where it sits.
  for (const chunk of xml.split(/(?=<w:p\b)|(?=<w:tbl\b)/)) {
    if (chunk.startsWith("<w:tbl")) { cur.tables += 1; continue; }
    const style = chunk.match(/<w:pStyle w:val="([^"]+)"/)?.[1] ?? "";
    const text = [...chunk.matchAll(/<w:t(?:\s[^>]*)?>([^<]*)<\/w:t>/g)].map((m) => decode(m[1])).join("").trim();
    const level = style.match(/^Heading(\d)$/i)?.[1] ?? (/^Title$/i.test(style) ? "1" : "");
    if (inventory) {
      if (level === "1" && text) { rows.push(cur); cur = { where: text.slice(0, 60), pictures: 0, charts: 0, diagrams: 0, tables: 0, words: 0 }; }
      cur.pictures += count(chunk, /<pic:pic\b/g);
      cur.charts += [...chunk.matchAll(/r:id="([^"]+)"/g)].filter((m) => chartIds.has(m[1])).length;
      cur.diagrams += count(chunk, /<dgm:relIds\b/g);
      cur.words += text ? text.split(/\s+/).length : 0;
      continue;
    }
    if (!text) continue;
    console.log(level ? `\n${"#".repeat(Number(level))} ${text}` : text);
  }
  if (inventory) { rows.push(cur); printInventory(rows.filter((r) => r.words + r.pictures + r.charts + r.diagrams + r.tables > 0), false); }
}

type TextRow = { where: string; images: number; mermaid: number; svg: number; tables: number; callouts: number; code: number; words: number };

function printTextInventory(rows: TextRow[]) {
  const head = ["Section", "Images", "Mermaid", "SVG", "Tables", "Callouts", "Code blocks", "Words"];
  console.log(`| ${head.join(" | ")} |`);
  console.log(`|${head.map(() => "---").join("|")}|`);
  for (const r of rows) console.log(`| ${[r.where, r.images, r.mermaid, r.svg, r.tables, r.callouts, r.code, r.words].join(" | ")} |`);
  const t = rows.reduce((a, r) => ({ images: a.images + r.images, mermaid: a.mermaid + r.mermaid, svg: a.svg + r.svg, tables: a.tables + r.tables, callouts: a.callouts + r.callouts, code: a.code + r.code, words: a.words + r.words }), { images: 0, mermaid: 0, svg: 0, tables: 0, callouts: 0, code: 0, words: 0 });
  const figures = t.images + t.mermaid + t.svg;
  console.log(`\n${rows.length} sections · figures ${figures} (images ${t.images}, mermaid ${t.mermaid}, svg ${t.svg}) · tables ${t.tables} · callouts ${t.callouts} · code blocks ${t.code} · words ${t.words}`);
  const textOnly = rows.filter((r) => r.images + r.mermaid + r.svg + r.tables === 0 && r.words > 300).map((r) => r.where);
  if (textOnly.length) console.log(`Sections over 300 words with no figure or table (candidates for a visual): ${textOnly.join("; ")}`);
}

function markdownInventory(src: string) {
  const rows: TextRow[] = [];
  let cur: TextRow = { where: "(before first H2)", images: 0, mermaid: 0, svg: 0, tables: 0, callouts: 0, code: 0, words: 0 };
  let inFence = false, inTable = false;
  for (const line of src.split("\n")) {
    const fence = line.match(/^\s*(```|~~~)\s*(\w+)?/);
    if (fence) { if (!inFence) { inFence = true; if (/^mermaid$/i.test(fence[2] ?? "")) cur.mermaid += 1; else cur.code += 1; } else inFence = false; continue; }
    if (inFence) continue;
    const h2 = line.match(/^##\s+(.+)/);
    if (h2) { rows.push(cur); cur = { where: h2[1].replace(/[#*`]/g, "").trim().slice(0, 60), images: 0, mermaid: 0, svg: 0, tables: 0, callouts: 0, code: 0, words: 0 }; inTable = false; continue; }
    const isTableLine = /^\s*\|/.test(line);
    if (isTableLine && !inTable) { cur.tables += 1; inTable = true; } else if (!isTableLine) inTable = false;
    cur.images += count(line, /!\[[^\]]*\]\(/g) + count(line, /<img\b/gi);
    cur.svg += count(line, /<svg\b/gi);
    cur.callouts += count(line, /^\s*>\s*\[!\w+\]/g) + count(line, /^\s*:::\s*\w+/g) + count(line, /^\s*>\s*\*\*[A-Z][A-Z ]{2,}:?\*\*/g);
    if (!isTableLine) cur.words += line.replace(/<[^>]+>/g, " ").split(/\s+/).filter((w) => /\w/.test(w)).length;
  }
  rows.push(cur);
  printTextInventory(rows.filter((r) => r.words + r.images + r.mermaid + r.svg + r.tables > 0));
}

function htmlInventory(src: string) {
  const rows: TextRow[] = [];
  const parts = src.split(/(?=<h2\b)/i);
  for (const part of parts) {
    const title = part.match(/<h2\b[^>]*>([\s\S]*?)<\/h2>/i)?.[1].replace(/<[^>]+>/g, "").trim().slice(0, 60) ?? "(before first h2)";
    const text = part.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ");
    const row: TextRow = { where: title, images: count(part, /<img\b/gi) + count(part, /<figure\b/gi), mermaid: count(part, /class="[^"]*\bmermaid\b/gi), svg: count(part, /<svg\b/gi), tables: count(part, /<table\b/gi), callouts: count(part, /<(aside|blockquote)\b/gi) + count(part, /class="[^"]*\b(callout|admonition|note|caution|warning)\b/gi), code: count(part, /<pre\b/gi), words: text.split(/\s+/).filter((w) => /\w/.test(w)).length };
    if (row.words + row.images + row.svg + row.tables > 0) rows.push(row);
  }
  printTextInventory(rows);
}

const args = process.argv.slice(2);
const inventory = args.includes("--inventory");
const files = args.filter((a) => a !== "--inventory");
if (!files.length) {
  console.error("Usage: bun Tools/extract.ts [--inventory] <file.pptx|file.docx|file.md|file.html> [...]");
  process.exit(1);
}
let failed = false;
for (const f of files) {
  console.log(`# ${f.split("/").pop()}${inventory ? " (inventory)" : ""}`);
  try {
    if (/\.pptx$/i.test(f)) await pptx(f, inventory);
    else if (/\.docx$/i.test(f)) await docx(f, inventory);
    else if (inventory && /\.(md|markdown|txt)$/i.test(f)) markdownInventory(await Bun.file(f).text());
    else if (inventory && /\.(html?|xhtml)$/i.test(f)) htmlInventory(await Bun.file(f).text());
    else throw new Error("unsupported type; read .md, .txt, .pdf and images with the Read tool (--inventory also takes .md and .html)");
  } catch (e) {
    console.error(`extract: ${f}: ${(e as Error).message}`);
    failed = true;
  }
}
process.exit(failed ? 1 : 0);
