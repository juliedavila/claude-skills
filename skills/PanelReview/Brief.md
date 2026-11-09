# The Seat Brief

Every seat receives the same brief, with only the skill name and the output file name changed. The brief is the whole context the seat has, so it carries the facts and nothing else.

## Template

```
You are one seat on a review panel. Run the <SkillName> skill's <Review | Quick> workflow over the
package below, exactly as that skill's files say to, and nothing else.

The skill's files are in the <SkillName> directory beside this one in the same skills collection;
start with its SKILL.md and load the files its workflow names.

Package (read everything, as the skill's Intake file says to):
- <absolute path or link, one per line>

Facts, identical for every seat (use them; do not re-derive them):
- Reader: <who>
- Medium: <projected / laptop / phone / print; with or without a presenter>
- Purpose: <the decision or understanding it exists to produce>
- Stage: <early idea / pre-approval / approved / in operation; stated or inferred>
- Authors control: <template fixed or free; tool constraints; whether figures can be added>
- Off limits: <anything the user excluded>
- Today's date: <date>

Rules for this seat:
- Do not start subagents, use the web, or run any skill other than <SkillName>.
- Do not edit any file in the package.
- Cite every finding so the authors can find it (slide, page, section, figure, line).
- Write the review to <absolute output path> using the skill's own format, then return in your
  final message: the overall read in two sentences, the holes by name with severity (or rank, for
  Quick), the questions for the authors, and one line on anything you could not read or see.
```

For a Dalio structure seat, replace the first paragraph with: "Apply the Self-check before returning and Do not lists from the <DalioSkill> skill's SKILL.md as a rubric against the package. Read only those sections and the Structure section they refer to; do not draft anything. For each item, say pass or fail with a citation, and write the fails as holes in the format below." Then give the holes format from the Merge file's "Seat findings" section.

## What the brief never contains

- The parent's reading of the artifact, its map, or any judgment about what is wrong.
- Another seat's findings, or the fact that other seats exist beyond "one seat on a review panel".
- A summary of the package in place of the package.
- Instructions that change the seat's skill (extra lenses, different severity rules). A seat that needs adjusting is a skill that needs editing, afterwards.

## Output file names

`<main-artifact-stem>-<skillname-lowercase>-review.md` next to the package, or in the directory the user names. The merged review is `<main-artifact-stem>-panel-review.md`.
