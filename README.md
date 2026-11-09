# claude-skills

Thinking, analysis and writing skills for [Claude Code](https://docs.claude.com/en/docs/claude-code/overview).
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
| **WritingPartner** | A piece of business writing needs drafting, a critique or an edit, so it reads clearly to its reader and sounds like a person rather than a corporation or a model. |
| **VisualizeReview** | A deck, document or page should be reviewed for whether its charts, diagrams, tables and layout carry the story, and for what should have been a visual and wasn't. |
| **PanelReview** | A package should be reviewed from several angles at once: the review skills run as parallel seats in fresh contexts and their findings merge into one ranked review with an order of work. |
| **DalioDecisionMemo** | A document asks someone to make a decision, in Ray Dalio's layered, expected-value style. |
| **DalioStrategyAnalysis** | You are writing a strategy, plan, or recurring status or risk report, built on a model of how the system works and where it stands now. |
| **ResilienceReview** | A design, architecture, operating model or defect and vulnerability program should be reviewed for how it fails, how defects get found and fixed, and how it recovers. |
| **DalioDiagnosisPrinciples** | You are writing up a postmortem or diagnosis once the causes are known, or drafting team operating principles. |

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

Most skills are written in a private setup first, then ported here. A skill can also be
authored in this repo directly (DeliveryReview is one); run `bun scripts/install.ts` to link it
into your Claude config directory, and the port script will refuse to overwrite it from there.

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
