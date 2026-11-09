---
name: PanelReview
effort: high
description: "Runs several review skills over one artifact package at once, each in its own fresh context, and merges their findings into a single ranked review with the conflicts between reviewers resolved and an order of work. Routes by package type: a design or delivery proposal gets DeliveryReview, ResilienceReview, VisualizeReview and a WritingPartner critique; a research brief or essay gets VisualizeReview and WritingPartner; a decision memo, strategy or postmortem adds the matching Dalio structure checklist. Parallel critique, serial application: reviewers never see each other's output, the merge folds duplicates by citation and applies a stated precedence (substance over structure over visuals over prose), and the review ends with the order in which to apply the fixes. Two workflows: Panel (full reviews, one merged file) and Quick (parallel quick reads merged to one screen). Falls back to running the reviewers one after another when the host cannot start subagents. USE WHEN asked to review a deck, document, proposal, brief or page from more than one angle, to run a full or complete review, or to review in parallel. NOT FOR a single-angle review (call that skill directly), investigating an incident (RootCauseAnalysis), or applying the edits, which the author or WritingPartner's edit mode does afterwards."
---

# PanelReview

One artifact, several reviewers, one review. The review skills in this collection are layers over the same artifact: substance (DeliveryReview, ResilienceReview), structure (the Dalio checklists), the visual layer (VisualizeReview) and prose (WritingPartner). Critique is read-only and independent, so the layers are reviewed in parallel, each in a fresh context that never sees the others. Application is not independent: a substance hole can delete the paragraph the prose reviewer polished, and a figure that replaces a passage changes what the prose editor should touch. So the rule is **parallel critique, serial application, one merge in between**, and the merge is where this skill earns its place.

## What a panel costs

Each reviewer reads the whole package and runs its skill's workflow in its own context. Observed on an 800-line position paper: a four-seat Quick panel took 820k tokens and seven minutes of wall-clock, about 200k per seat, because a Quick seat still reads everything and only writes less. A full Panel costs more per seat. Say the expected cost in one line before launching when the package is large, and prefer Quick only when the user wants a first read, not to save tokens.

## Inputs

A **package**: the artifacts that together make the thing, as for any single reviewer. Optional context from the user: who reads it, how, what decision it exists to produce, the stage, what the authors can and cannot change, which reviewers to include or exclude, and anything off limits.

If the user gives no context, infer the package type, the reader, the medium and the stage, state the inferences in the merged review's header, and pass them to every seat as facts.

## Workflows

| Workflow | When | File |
|---|---|---|
| **Panel** (default) | Any package. Each seat runs its skill's full Review workflow and writes its own file; the merge produces one ranked review. | `Workflows/Panel.md` |
| **Quick** | A first read, or limited time. Each seat runs its skill's Quick workflow; the merge is one screen in chat. | `Workflows/Quick.md` |

Reference files, loaded by the workflows:

- `Routing.md`: which seats a package type gets, what each seat brings, and which skills never sit on a panel.
- `Brief.md`: the brief every seat receives: paths, facts, what to return, and what it must not do.
- `Merge.md`: folding duplicates by citation, the precedence rule, conflicts between reviewers, the order of work, and the merged review's format.

## Principles

1. **Seats are cold.** A reviewer gets the package, the facts and its own skill. It never gets another seat's findings, the parent's opinions, or a summary of the artifact. The fresh context is the point: a reviewer that shares the parent's reading cannot see what the parent missed.
2. **Facts travel, judgments don't.** The brief carries who reads it, how, the stage and the constraints. It never carries what the parent thinks is wrong with the artifact.
3. **Reviews are read from disk, whole.** Each seat writes its review to a file. The merge reads every file in full before writing a line. Nothing is pasted from a seat's chat summary.
4. **Precedence is stated, not implied.** When two seats disagree, the merge applies substance over structure over visuals over prose, says which seat lost and why, and keeps the losing finding visible under conflicts. A figure that replaces a passage beats a cut of the passage; the passage becomes the caption.
5. **Duplicates fold by citation.** Two findings anchored to the same slide, section or figure, about the same defect, become one hole that lists both seats and both lenses. Findings at the same place about different defects stay separate.
6. **The order of work is part of the review.** Substance fixes first, then structure, then visuals, then prose, with the reason: each layer can invalidate the work below it. Prose editing is always last.
7. **No seat is softened silently.** The merge may rank a finding low or fold it, never rewrite it to say less. If the parent disagrees with a seat, that disagreement is a line in the merged review.
8. **Seats never spawn.** A seat runs its skill's workflow itself; the "large packages" fan-out some skills describe is for a parent, not a seat. Nested agents hand their results to the wrong place and stall the panel.

## Gotchas

- **Some skills cannot be seats.** RedTeam fans out to its own agents and runs from the parent after the panel, never inside a seat. RootCauseAnalysis investigates an incident, not an artifact. The Dalio skills are generative; a seat applies their self-check list as a structure rubric, and `Routing.md` says how.
- **The same reader, every seat.** If the seats are told different readers, their findings cannot be merged. The facts block in every brief is identical.
- **WritingPartner sits in Critique mode only.** Its Edit mode changes the text, and that happens after the merge, on the artifact the substance fixes have already changed.
- **Watch the seats.** A seat that stops writing for ten minutes has stalled; the host's notification is the signal, not a poll. If a seat fails, run the panel without it and say so in the header rather than waiting.
- **No subagents, no parallelism.** When the host cannot start agents, run the seats one after another yourself, each as a fresh read of the package with that skill, and say in the header that the seats shared one context. The merge rules still apply.
- **The panel is not a vote.** Three seats flagging the same place is one hole with three lenses, ranked by consequence, not by how many noticed it.
- **Keep confidential detail out of the merged review** to the same standard as any seat; the merged file travels further than any one review.
