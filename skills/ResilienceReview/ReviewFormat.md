# Review Format

Write the review to a Markdown file next to the package unless the user names another place. Name it after the main artifact (the design doc if there is one, otherwise the deck): `<main-artifact-stem>-resilience-review.md`. Then give the user the chat summary described in `Workflows/Review.md` step 11.

**Length.** The review should be shorter than the package it reviews wherever it can be. Five well-argued holes are better than ten. Trim the review before you add to it.

## Structure

```markdown
# Resilience Review: <proposal title>

**Reviewed:** <artifacts with versions or dates> · **Stage:** <stated or inferred> · **Decision asked:** <…>
**Safety as used here:** <the meaning the package carries: service reliability, data safety, safety-critical, security, AI behaviour>
**Lenses applied:** <list> · **Skipped:** <list, one reason each>

## Overall read
Three to five sentences. What the proposal is trying to do, whether it will keep harm small and defects fixable, and the one change that would most improve it. No hedging boilerplate.

## The proposal as we read it
The proposal map from Intake.md, compressed, including the hazards named and the defect sources. Invites the authors to correct a misreading before arguing with a finding.

## What works
Three to six strengths. Each names the specific element, cites it, and says which mechanism makes it good, so the authors know what to protect in revision.

## Holes
Ranked by severity. Each hole:

### H1 · <short name> · <High | Medium | Low>
- **Where:** citation(s)
- **What the proposal says:** a faithful paraphrase or short quote
- **Concern:** the mechanism by which this leads to harm, brittleness or an unfixed defect, in plain terms
- **Lens:** the lens number and the thinker or source whose mechanism applies
- **Escape point:** only for a hole about a defect that would reach or has reached a later stage than it should. The stage that should catch this class: design, build, pipeline, pre-production, production monitoring, or "never, by this design". Omit the field on every other hole.
- **Suggestion:** the smallest change that closes it
- **Confidence:** High (in the artifact) · Medium (strong inference) · Low (depends on a fact we don't have; see Questions). When parts of a hole differ, split it: "High for the missing timeout; Low for the traffic estimate (Q3)".

## Suggestions that aren't fixes
Improvements to parts of the proposal that are not broken: a cheaper exercise, a sharper measure, a better degraded mode.

## Questions for the authors
Numbered. Facts the review needed and could not find, phrased so a yes or no or a number answers them. Mark the ones that would change a severity.

## Where the lenses don't fit
Any finding the review deliberately softened because of a constraint (scale, an accepted risk with an owner, a mandated method), with the reason. This shows the authors the review saw their constraints.
```

## Rules for each finding

These rules apply to both workflows. The Quick workflow uses them with its own chat skeleton and no file; see `Workflows/Quick.md`.

- **Severity.** High: a credible path to harm to people, loss or exposure of data, or loss of service with no recovery path; a defect source added with no fix capacity; a measure that will suppress reporting; blocks the proposal's own goal; or (for contradictions between artifacts) changes what is being approved. Medium: adds hazard, brittleness or backlog that a cheap change would remove. Low: polish, or a risk only under conditions that may not hold.
- **Escape point is optional.** It belongs on defect-lifecycle holes (lens 3, and lens 8 where an incident's learning should have reached an earlier stage) and nowhere else. Most holes in an architecture review will not carry it. Do not force one.
- **No orphan critiques.** A hole without a suggestion is not finished.
- **No slogans.** "Single point of failure", "not resilient", "human error" are not concerns. Name the state, the coupling, the pressure or the missing feedback.
- **Quote sparingly and faithfully.** Short quotes, never edited to sharpen the point.
- **Attribution is precise.** Name the mechanism and who described it. Where a claim is contested or correlational, say so.
- **Count matters less than rank.** Five well-argued holes beat fifteen thin ones. Fold small related items into one.

## Tone

Write as a senior peer who wants the system to survive contact with production and the proposal to succeed. Direct about problems, specific about praise, and free of hedging filler. The authors should finish the review knowing exactly what to change and what to keep, and feeling that the reviewer read their work closely.
