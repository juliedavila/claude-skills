// Install this repo's skills without the plugin system, for a machine where plugins are unavailable.
//   bun scripts/install.ts            symlink each skill into <config>/skills (updates follow git pull)
//   bun scripts/install.ts --copy     copy instead of symlink
//   bun scripts/install.ts --remove   remove links this script created
// <config> is $CLAUDE_CONFIG_DIR when set, else ~/.claude. An existing skill of the same name is never overwritten. (guard:allow)
import { readdir, symlink, cp, lstat, readlink, unlink, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { homedir } from "node:os";

const SRC = join(import.meta.dir, "..", "skills");
const DEST = join(process.env.CLAUDE_CONFIG_DIR ?? join(homedir(), ".claude"), "skills");
const mode = process.argv.includes("--remove") ? "remove" : process.argv.includes("--copy") ? "copy" : "link";
await mkdir(DEST, { recursive: true });

for (const e of await readdir(SRC, { withFileTypes: true })) {
  if (!e.isDirectory()) continue;
  const from = join(SRC, e.name), to = join(DEST, e.name);
  const existing = await lstat(to).catch(() => null);
  const ours = existing?.isSymbolicLink() && (await readlink(to)) === from;
  if (mode === "remove") { if (ours) { await unlink(to); console.log(`- ${e.name}`); } continue; }
  if (ours) { console.log(`= ${e.name} (already linked)`); continue; }
  if (existing) { console.warn(`! ${e.name}: ${to} exists, skipped`); continue; }
  if (mode === "copy") await cp(from, to, { recursive: true }); else await symlink(from, to);
  console.log(`+ ${e.name}`);
}
