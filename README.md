# claude-skills

Thinking and analysis skills for [Claude Code](https://docs.claude.com/en/docs/claude-code/overview).
Each skill is a folder with a `SKILL.md` that Claude loads when a request matches its description.

| Skill | Use it when |
|---|---|
| **FirstPrinciples** | A stated constraint needs testing, or a problem should be rebuilt from fundamentals. |
| **RedTeam** | An idea, plan or strategy should be attacked hard to find where it breaks. |
| **SystemsThinking** | A problem keeps recurring, or a fix produces side effects. |
| **RootCauseAnalysis** | You need to know why something failed, in a way that holds up. |
| **BitterPillEngineering** | A prompt, rules file or `CLAUDE.md` has grown and needs auditing for dead weight. |
| **LearningConditions** | You are setting up, repairing or checking a learning practice. |
| **DeliveryReview** | A design proposal, RFC or strategy deck would change how software gets built, shipped or run, and you want a lean and agile review of it. |

## Install

**As a plugin (recommended).** In Claude Code:

```
/plugin marketplace add juliedavila/claude-skills
/plugin install claude-skills@juliedavila-skills
```

Plugin skills are namespaced, so they appear as `claude-skills:RedTeam` and so on.

**Without plugins.** Clone the repo and link the skills into your Claude config directory.
Links follow `git pull`; pass `--copy` to copy instead, or `--remove` to undo.
Requires [Bun](https://bun.sh).

```
git clone https://github.com/juliedavila/claude-skills
cd claude-skills
bun scripts/install.ts
```

Plain copying works too: put each folder under `skills/` into the `skills/` folder of your
Claude config directory.

## Adding a skill

Skills are written in a private setup first, then ported here.

1. `bun scripts/port.ts SkillName` copies the skill from `~/.claude/skills` (or `$SKILLS_SOURCE`) <!-- guard:allow -->
   and strips the private-system sections it knows about.
2. Fix whatever it reports by hand. Porting overwrites the repo copy, so make lasting fixes in the
   source skill too, or redo them after each re-port.
3. `bun scripts/check.ts` must pass. It also runs as the pre-commit hook once you set
   `git config core.hooksPath .githooks`.

Skills whose names start with an underscore are private by convention and the port script refuses
them.

## Leak guard

`scripts/check.ts` scans every file for secrets, local paths, private addresses, email addresses,
first-person workplace phrasing, and private-system wiring. It also reads a personal term
denylist kept **outside** the repo, at `~/.config/claude-skills/denylist.txt`, because a public <!-- guard:allow -->
list of forbidden words would publish the words. One term per line; `/regex/flags` lines are
regular expressions. Set `SKILLS_DENYLIST` to a colon-separated list of paths to use other files.

Without a denylist the check still runs and warns. Keep one on every machine that commits here.

A line can opt out of one false positive with `guard:allow` in a trailing comment. Never put the
marker inside a code block, where it renders as text.

## Known gaps

Some skills mention other skills that are not in this repo yet, such as Research or BeCreative.
Claude treats those as suggestions and carries on without them.

## License

MIT. See [NOTICE](NOTICE) for the skills adapted from Personal AI Infrastructure.
