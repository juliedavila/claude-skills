# Review Format

Write the review to a Markdown file next to the package unless the user names another place. Name it after the main artifact: `<main-artifact-stem>-visual-review.md`. Then give the user the chat summary described in `Workflows/Review.md` step 12.

**Length.** The review should be shorter than the artifact it reviews wherever it can be. Five well-argued holes are better than ten. Trim the review before you add to it. Sketches count against the length: at most one per hole, each small enough to read in one screen.

## Structure

```markdown
# Visual Review: <artifact title>

**Reviewed:** <artifacts with versions or dates> · **Reader and medium:** <stated or inferred> · **Purpose:** <…>
**Seen as rendered:** <yes / partly (which) / no, and from what instead>
**Author controls:** <template fixed / free / inferred> · **Lenses applied:** <list> · **Skipped:** <list, one reason each>

## Overall read
Three to five sentences. What the artifact is trying to make the reader see, whether its visual layer does that, and the one change that would most improve it. No hedging boilerplate.

## The artifact as we read it
The proposal map from Intake.md, compressed: reader, medium, purpose, the story in a paragraph, what the authors control.

## Visual inventory
| # | Where | Kind | Message (one sentence, or "none stated") | Finding carried by | Verdict |
Verdicts: keep · fix (hole number) · cut · add (for a visual that should exist; hole number). The inventory is the map the holes point back to, so every visual gets a row, including tables and decorative images.

## What works
Three to six strengths. Each names the specific visual or choice, cites it, and says which mechanism makes it good (the channel, the grouping, the order, the title), so the authors know what to protect.

## Holes
Ranked by severity. Each hole:

### H1 · <short name> · <High | Medium | Low>
- **Where:** citation(s), or for a missing visual, the passage
- **What it shows / what the passage says:** a faithful description or short quote
- **Concern:** the mechanism by which the reader misunderstands, misses or decides wrongly, in plain terms
- **Lens:** the lens number and the work whose finding applies
- **Sketch:** only for a hole whose suggestion is a visual that should exist or a visual that should change form. A Mermaid block, a text layout or a table shape per `Sketches.md`. Omit on every other hole.
- **Suggestion:** the smallest change that closes it
- **Confidence:** High (in the artifact) · Medium (strong inference) · Low (depends on a fact we don't have; see Questions)

## Suggestions that aren't fixes
Improvements to visuals that are not broken: a sharper title, a sort, a second channel on a distinction, a small multiple instead of a legend.

## Questions for the authors
Numbered. Facts the review needed and could not find (who reads it, how, what the template allows, where the data comes from), phrased so a short answer settles them. Mark the ones that would change a severity.

## Where the lenses don't fit
Anything the review softened or set aside because of a constraint: the fixed template, a mandated chart tool, a reference artifact not read in order. One line each. This shows the authors the review saw their constraints and is where template faults go, once.
```

## Rules for each finding

These rules apply to both workflows. The Quick workflow uses them with its own chat skeleton and no file; it ranks by these severity definitions without printing the labels. See `Workflows/Quick.md`.

- **Severity.** High: the reader will take away a wrong claim (an integrity failure, a visual that contradicts the text, a decision-point with no visual case), or a key distinction is invisible to a meaningful share of readers. Medium: the reader gets there, but slower or less surely than a cheap change would allow; a passage that plainly wants a visual. Low: polish, or a cost only in a medium the artifact may never be read in.
- **Sketch is optional.** It belongs on holes whose suggestion is a new visual or a change of form (lenses 2 and 6 most often, and every "add" row in the inventory) and nowhere else. A sketch names what the real version needs (the data, a tool, a designer) when that matters.
- **No orphan critiques.** A hole without a suggestion is not finished.
- **No taste words.** "Cluttered", "busy", "ugly", "unprofessional" are not concerns. Name the channel, the grouping, the load, the missing title or the broken order.
- **Describe faithfully.** Describe what the visual shows before saying what is wrong with it. Never sharpen a description to make the point.
- **Attribution is precise.** Name the finding and the work it comes from. Where a rule is convention rather than evidence (most layout advice), say so.
- **Count matters less than rank.** Five well-argued holes beat fifteen thin ones. Fold small related items into one.

## Tone

Write as a senior peer who wants the reader to understand on the first pass and the authors to be credited for it. Direct about problems, specific about praise, free of hedging filler and free of taste. The authors should finish the review knowing exactly which visuals to change, which to add, and which to leave alone.
