#!/usr/bin/env bun
// Extract readable text from .pptx (slides + speaker notes, in order) and .docx (body, headings marked).
// Usage: bun Tools/extract.ts <file.pptx|file.docx> [...more files]
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

async function pptx(file: string) {
  const entries = await unzipList(file);
  const slides = entries.filter((e) => /^ppt\/slides\/slide\d+\.xml$/.test(e)).sort((a, b) => num(a) - num(b));
  // Map slide -> notes via each slide's relationships file, since notes numbering can differ from slide numbering.
  for (const [i, s] of slides.entries()) {
    console.log(`\n## Slide ${i + 1}`);
    for (const line of paragraphs(unzipRead(file, s), "a")) console.log(line);
    const rels = unzipRead(file, s.replace("slides/", "slides/_rels/") + ".rels");
    const notesTarget = rels.match(/Target="\.\.\/notesSlides\/(notesSlide\d+\.xml)"/)?.[1];
    if (notesTarget) {
      const notes = paragraphs(unzipRead(file, `ppt/notesSlides/${notesTarget}`), "a").filter((l) => !/^\d+$/.test(l));
      if (notes.length) {
        console.log("\n**Speaker notes:**");
        for (const line of notes) console.log(line);
      }
    }
  }
}

async function docx(file: string) {
  const xml = unzipRead(file, "word/document.xml");
  if (!xml) throw new Error(`${file} has no word/document.xml`);
  for (const para of xml.split("</w:p>")) {
    const style = para.match(/<w:pStyle w:val="([^"]+)"/)?.[1] ?? "";
    const text = [...para.matchAll(/<w:t(?:\s[^>]*)?>([^<]*)<\/w:t>/g)].map((m) => decode(m[1])).join("").trim();
    if (!text) continue;
    const level = style.match(/^Heading(\d)$/i)?.[1] ?? (/^Title$/i.test(style) ? "1" : "");
    console.log(level ? `\n${"#".repeat(Number(level))} ${text}` : text);
  }
}

const files = process.argv.slice(2);
if (!files.length) {
  console.error("Usage: bun Tools/extract.ts <file.pptx|file.docx> [...]");
  process.exit(1);
}
let failed = false;
for (const f of files) {
  console.log(`# ${f.split("/").pop()}`);
  try {
    if (/\.pptx$/i.test(f)) await pptx(f);
    else if (/\.docx$/i.test(f)) await docx(f);
    else throw new Error("unsupported type; read .md, .txt, .pdf and images with the Read tool");
  } catch (e) {
    console.error(`extract: ${f}: ${(e as Error).message}`);
    failed = true;
  }
}
process.exit(failed ? 1 : 0);
