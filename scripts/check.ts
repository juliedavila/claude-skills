// Gate for every commit: leak guard over all files, coupling scan and frontmatter checks over skills.
//   bun scripts/check.ts        (also wired as the pre-commit hook)
// A line may opt out of one false positive with the marker  guard:allow  in a trailing comment.
import { $ } from "bun";
import { join } from "node:path";
import { guard, denylistsFound, COUPLING } from "./guard.ts";

const ROOT = join(import.meta.dir, "..");
const SELF = new Set(["scripts/guard.ts", "scripts/port.ts", "scripts/check.ts"]);
const files = (await $`git -C ${ROOT} ls-files --cached --others --exclude-standard`.text()).split("\n").filter(Boolean);
const problems: string[] = [];

for (const f of files) {
  if (SELF.has(f)) continue;
  const file = Bun.file(join(ROOT, f));
  if (!(await file.exists())) continue;
  const text = await file.text();
  const lines = text.split("\n");
  for (const { line, rule, excerpt } of await guard(text)) {
    if (!lines[line - 1].includes("guard:allow")) problems.push(`${f}:${line} [${rule}] ${excerpt}`);
  }
  if (f.startsWith("skills/")) lines.forEach((l, i) => {
    for (const [rule, re] of COUPLING) if (re.test(l) && !l.includes("guard:allow")) problems.push(`${f}:${i + 1} [${rule}]`);
  });
}

const skillDirs = [...new Set(files.filter((f) => f.startsWith("skills/")).map((f) => f.split("/")[1]))];
for (const dir of skillDirs) {
  const path = join(ROOT, "skills", dir, "SKILL.md");
  if (!(await Bun.file(path).exists())) { problems.push(`skills/${dir}: missing SKILL.md`); continue; }
  const fm = (await Bun.file(path).text()).match(/^---\n([\s\S]*?)\n---/);
  const name = fm?.[1].match(/^name:\s*(.+)$/m)?.[1].trim();
  if (!fm) problems.push(`skills/${dir}/SKILL.md: no frontmatter`);
  else if (name !== dir) problems.push(`skills/${dir}/SKILL.md: name "${name}" does not match directory`);
  if (fm && !/^description:/m.test(fm[1])) problems.push(`skills/${dir}/SKILL.md: no description`);
}

const lists = await denylistsFound();
if (!lists.length) console.warn("⚠ no personal denylist found; only built-in patterns ran (see README § Leak guard)");
if (problems.length) { console.error(`✗ ${problems.length} problem(s):\n` + problems.join("\n")); process.exit(1); }
console.log(`✓ ${files.length} files, ${skillDirs.length} skills clean (${lists.length} denylist file(s))`);
