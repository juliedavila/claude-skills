// Leak guard for a public repo. Two layers:
//  1. Built-in patterns (secrets, local paths, private addresses), committed here, safe to be public.
//  2. A personal term denylist kept OUTSIDE this repo, because a public list of forbidden
//     words publishes the words. Default: ~/.config/claude-skills/denylist.txt, plus the
//     Stacks denylist when present. Override with SKILLS_DENYLIST (colon-separated paths).
// check.ts runs it over every tracked file.
import { join } from "node:path";
import { homedir } from "node:os";

export type Finding = { line: number; rule: string; excerpt: string };
const BUILT_IN: [string, RegExp][] = [
  ["aws-access-key", /\bAKIA[0-9A-Z]{16}\b/],
  ["github-token", /\bgh[pousr]_[A-Za-z0-9]{36,}\b/],
  ["gitlab-token", /\bglpat-[A-Za-z0-9_-]{20,}\b/],
  ["anthropic-key", /\bsk-ant-[A-Za-z0-9_-]{20,}\b/],
  ["openai-key", /\bsk-[A-Za-z0-9]{32,}\b/],
  ["slack-token", /\bxox[abprs]-[A-Za-z0-9-]{10,}\b/],
  ["private-key", /-----BEGIN [A-Z ]*PRIVATE KEY-----/],
  ["jwt", /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/],
  ["local-home-path", /\/Users\/[a-z0-9._-]+\/|\/home\/[a-z0-9._-]+\//i],
  ["home-relative-path", /(^|[\s`'"(=])~\/[A-Za-z0-9._-]|\$\{?HOME\}?\//],
  ["agent-config-path", /\.claude\/(skills|agents|commands|hooks|projects)\b|\.config\/[A-Za-z0-9_-]+\//],
  ["private-ipv4", /\b(10\.\d{1,3}|192\.168|172\.(1[6-9]|2\d|3[01]))\.\d{1,3}\.\d{1,3}\b/],
  ["email-address", /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/],
  // Artifacts speak about a topic in general terms, never from inside an organization.
  ["workplace-reference", /\b(our|my) (team|teams|org|organization|company|employer|bank|firm|ciso|cto|manager|boss|leadership|security org|environment|stack)\b|\b(at work|internally|in-house|my job|our customers)\b/i],
];

// Private-system wiring that has no meaning outside the source machine. port.ts reports it; check.ts fails on it.
export const COUPLING: [string, RegExp][] = [
  ["private-system-path", /LIFEOS|PAI_DIR|\.claude\/(LIFEOS|skills|agents)/],
  ["local-notify-server", /localhost:\d{4,5}/],
  ["execution-log", /execution\.jsonl/],
  ["other-vendor-cli", /\bcodex exec\b|\bgemini\b CLI/i],
];

const DENYLISTS = (process.env.SKILLS_DENYLIST ?? [
  join(homedir(), ".config", "claude-skills", "denylist.txt"),
  join(homedir(), ".config", "stacks", "denylist.txt"),
].join(":")).split(":").filter(Boolean);

export async function denylistsFound(): Promise<string[]> {
  const found: string[] = [];
  for (const p of DENYLISTS) if (await Bun.file(p).exists()) found.push(p);
  return found;
}

function toRule(term: string): [string, RegExp] {
  // A line wrapped in slashes is a regex; anything else is a case-insensitive literal.
  const end = term.lastIndexOf("/");
  if (term.startsWith("/") && end > 0) return ["denylist", new RegExp(term.slice(1, end), term.slice(end + 1))];
  return ["denylist", new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i")];
}

async function personalRules(): Promise<[string, RegExp][]> {
  const lines: string[] = [];
  for (const p of await denylistsFound()) lines.push(...(await Bun.file(p).text()).split("\n"));
  return lines.map((l) => l.trim()).filter((l) => l && !l.startsWith("#")).map(toRule);
}

export async function guard(text: string): Promise<Finding[]> {
  const rules = [...BUILT_IN, ...(await personalRules())];
  const findings: Finding[] = [];
  text.split("\n").forEach((line, i) => {
    for (const [rule, re] of rules) {
      const m = line.match(re);
      if (m) findings.push({ line: i + 1, rule, excerpt: m[0].slice(0, 12) + (m[0].length > 12 ? "…" : "") });
    }
  });
  return findings;
}
