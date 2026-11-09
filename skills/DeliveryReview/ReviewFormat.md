# Review Format

Write the review to a Markdown file next to the package unless the user names another place. Name it after the main artifact (the design doc if there is one, otherwise the deck): `<main-artifact-stem>-delivery-review.md`. Then give the user the chat summary described in `Workflows/Review.md` step 11.

**Length.** The review should be shorter than the package it reviews wherever it can be. Five well-argued holes are better than ten. Trim the review before you add to it.

## Structure

```markdown
# Delivery Review: <proposal title>

**Reviewed:** <artifacts with versions or dates> · **Stage:** <stated or inferred> · **Decision asked:** <…>
**Lenses applied:** <list> · **Skipped:** <list, one reason each>

## Overall read
Three to five sentences. What the proposal is trying to do, whether it will make delivery faster and safer, and the one change that would most improve it. No hedging boilerplate.

## The proposal as we read it
The proposal map from Intake.md, compressed. Invites the authors to correct a misreading before arguing with a finding.

## What works
Three to six strengths. Each names the specific element, cites it, and says which mechanism makes it good, so the authors know what to protect in revision.

## Holes
Ranked by severity. Each hole:

### H1 · <short name> · <High | Medium | Low>
- **Where:** citation(s)
- **What the proposal says:** a faithful paraphrase or short quote
- **Concern:** the mechanism by which this hurts flow, quality or people, in plain terms
- **Lens:** the lens number and the thinker or source whose mechanism applies
- **Suggestion:** the smallest change that closes it
- **Confidence:** High (in the artifact) · Medium (strong inference) · Low (depends on a fact we don't have; see Questions). When parts of a hole differ, split it: "High for the batching effect; Low for the calendar squeeze (Q6)".

## Suggestions that aren't fixes
Improvements to parts of the proposal that are not broken: a cheaper pilot, a sharper measure, a better sequence.

## Questions for the authors
Numbered. Facts the review needed and could not find, phrased so a yes or no or a number answers them. Mark the ones that would change a severity.

## Where the lenses don't fit
Any finding the review deliberately softened because of a constraint (regulation, irreversibility, a one-way door), with the reason. This shows the authors the review saw their constraints.
```

## Rules for each finding

These rules apply to both workflows. The Quick workflow uses them with its own chat skeleton and no file; see `Workflows/Quick.md`.

- **Severity.** High: will measurably slow delivery or degrade stability, blocks the proposal's own goal, or (for contradictions between artifacts) changes what is being approved. Medium: adds cost or risk that a cheap change would remove. Low: polish, or a risk only under conditions that may not hold.
- **No orphan critiques.** A hole without a suggestion is not finished.
- **No slogans.** "Not agile", "anti-pattern", "violates DevOps" are not concerns. Name the queue, the handoff, the coupling or the lost feedback.
- **Quote sparingly and faithfully.** Short quotes, never edited to sharpen the point.
- **Attribution is precise.** Name the mechanism and who described it. If a claim from a thinker is correlational or contested (the *Accelerate* change-approval finding, for example), say so.
- **Count matters less than rank.** Five well-argued holes beat fifteen thin ones. Fold small related items into one.

## Tone

Write as a senior peer who wants the proposal to succeed. Direct about problems, specific about praise, and free of hedging filler. The authors should finish the review knowing exactly what to change and what to keep, and feeling that the reviewer read their work closely.
