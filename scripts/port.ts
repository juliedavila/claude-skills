// Port a skill from a private skills directory into this repo, stripping private-system wiring.
//   bun scripts/port.ts FirstPrinciples RedTeam ...
// Source: $SKILLS_SOURCE, else ~/.claude/skills. Re-running overwrites the repo copy, so
// hand edits made after a port belong in the source first, or get redone.
//
// Stripped automatically: sections headed Customization, Voice Notification and Execution Log.
// Anything still coupled afterwards is reported and fails the run, for a hand edit.
import { cp, rm, readdir } from "node:fs/promises";
import { join } from "node:path";
import { homedir } from "node:os";
import { COUPLING } from "./guard.ts";

const SOURCE = process.env.SKILLS_SOURCE ?? join(homedir(), ".claude", "skills");
const DEST = join(import.meta.dir, "..", "skills");
const STRIP = /^(#{1,6})\s.*\b(Customization|Voice Notification|Execution Log)\b/i;
const MAX_SECTION = 30;

function strip(text: string, file: string): string {
  const lines = text.split("\n");
  const out: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(STRIP);
    if (!m) { out.push(lines[i]); continue; }
    const level = m[1].length;
    let j = i + 1, fence = false;
    for (; j < lines.length; j++) {
      if (lines[j].startsWith("```")) fence = !fence;
      if (fence) continue;
      const h = lines[j].match(/^(#{1,6})\s/);
      if (h && h[1].length <= level) break;
      if (/^---\s*$/.test(lines[j])) { j++; break; }
    }
    if (j - i > MAX_SECTION) throw new Error(`${file}:${i + 1} "${lines[i]}" runs ${j - i} lines; strip it by hand`);
    i = j - 1;
  }
  return out.join("\n").replace(/\n{3,}/g, "\n\n");
}

async function walk(dir: string): Promise<string[]> {
  const files: string[] = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(p)));
    else files.push(p);
  }
  return files;
}

let failed = false;
for (const name of process.argv.slice(2)) {
  if (name.startsWith("_")) { console.error(`✗ ${name}: underscore skills are private by convention; not porting`); failed = true; continue; }
  const src = join(SOURCE, name), dst = join(DEST, name);
  if (!(await Bun.file(join(src, "SKILL.md")).exists())) { console.error(`✗ ${name}: no SKILL.md at ${src}`); failed = true; continue; }
  await rm(dst, { recursive: true, force: true });
  await cp(src, dst, { recursive: true });
  const leftovers: string[] = [];
  for (const f of await walk(dst)) {
    if (!f.endsWith(".md")) continue;
    const rel = f.slice(DEST.length + 1);
    const text = strip(await Bun.file(f).text(), rel);
    await Bun.write(f, text);
    text.split("\n").forEach((line, i) => {
      for (const [rule, re] of COUPLING) if (re.test(line)) leftovers.push(`  ${rel}:${i + 1} [${rule}] ${line.trim().slice(0, 100)}`);
    });
  }
  if (leftovers.length) { failed = true; console.log(`△ ${name}: ported, ${leftovers.length} coupling lines need a hand edit`); console.log(leftovers.join("\n")); }
  else console.log(`✓ ${name}: ported clean`);
}
process.exit(failed ? 1 : 0);
