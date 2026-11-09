# Merge: From Several Reviews to One

Read every seat's review file in full before writing anything. Then work through the steps in order.

## 1. Build the finding list

Pull every hole, strength, question and "where the lenses don't fit" line from every seat into one list, tagged with its seat, its citation, its severity (or Quick rank) and its lens.

## 2. Fold duplicates by citation

Two findings become one hole when they are anchored to the same place (slide, section, figure, passage) **and** describe the same defect. The folded hole keeps the stronger statement of the concern, lists every seat and lens that raised it, and takes the highest severity any seat gave it. Findings at the same place about different defects stay separate and are listed next to each other.

Strengths fold the same way. A strength one seat names and another seat contradicts is not a strength; it goes to conflicts.

## 3. Apply precedence to conflicts

When two seats disagree about the same place, the layer order decides: **substance (DeliveryReview, ResilienceReview) over structure (the Dalio checklist) over visuals (VisualizeReview) over prose (WritingPartner)**. The winning finding becomes the hole; the losing finding is kept, verbatim, under "Conflicts between reviewers" with one line on why it lost. Two rules refine the order:

- A visual that replaces a passage beats a prose cut of that passage. The passage becomes the figure's caption, and the prose finding is noted as resolved by the figure.
- A prose finding that the reader cannot resolve a term or a reference (WritingPartner's cold-reader pass) is never outranked; it is folded into the substance or visual hole at that place as an added concern, because the other layers' fixes depend on the reader understanding the sentence.

Precedence decides what the hole says. It never deletes a seat's finding.

## 4. Rank

Rank the folded holes by consequence to the reader or the decision, using the severity definitions the seats used. Ties go to the hole more seats raised, then to the one with the cheapest fix.

## 5. Write the order of work

Group the holes by layer and state the order: substance first, then structure, then visuals, then prose, with the one-line reason that each layer can invalidate the work below it. Within a layer, the ranked order. Say which prose findings should be re-checked after the substance fixes land, because their passages may no longer exist.

## 6. Questions and misfits

Merge the seats' questions for the authors, folding duplicates and marking the ones that would change a severity. Keep every seat's "where the lenses don't fit" lines, attributed.

## Seat findings (the shape every seat returns)

The merge expects each seat's holes in its skill's own format, which share these fields: a name, a severity or rank, a citation, what the artifact says or shows, the concern, the lens, a suggestion, and a confidence. A structure seat returns the same fields with "checklist item" in place of the lens.

## The merged review

```markdown
# Panel Review: <artifact title>

**Reviewed:** <artifacts> · **Reader and medium:** <…> · **Stage:** <…>
**Seats:** <skill, skill, … with the reason for any seat added or dropped> · **Seats that failed or were skipped:** <…>
**Mode:** <parallel, each seat in a fresh context / serial, one context (why)>

## Overall read
Three to five sentences across all layers: what the artifact is trying to do, whether it will land with its reader, and the one change that would most improve it.

## The artifact as the panel read it
The facts given to every seat, and the seats' readings where they differ (a difference is itself a finding about the artifact).

## What works
Folded strengths, each attributed to the seats that named it, citation and mechanism kept.

## Holes
Ranked across all layers. Each hole keeps its seat's fields and adds:
- **Seats:** which raised it, with each one's lens
- **Layer:** substance · structure · visuals · prose

## Conflicts between reviewers
Each conflict: the place, what each seat said (verbatim), which won under precedence and why.

## Order of work
The layers in order with the holes under each, and the prose findings to re-check after the substance fixes.

## Questions for the authors
Merged and numbered; the ones that would change a severity marked.

## Where the lenses don't fit
Every seat's lines, attributed.

## Appendix: the seat reviews
The path to each seat's file.
```

## Quick merge

For the Quick workflow, the same steps produce one screen in chat: the overall read, three folded strengths, up to five folded holes with their seats, the conflicts in one line each, the order of work as one line per layer, and one question. No file unless asked.
