---
name: VisualizeReview
effort: high
description: "Reviews anything made for human eyes (a deck, a document, a web page, a one-pager, a dashboard mock) for how well its visual layer carries the narrative and the facts into the reader's head: whether each chart, diagram, table and layout makes one claim the reader gets faster and more accurately than from the prose, and which passages are a sequence, a comparison, a structure or a quantity trapped in text that should have been a visual. Returns a visual inventory, specific strengths, ranked holes with the mechanism behind each, and a sketch (Mermaid or text layout) for every visual that should exist and doesn't. Nine lenses from message and form fit through perception, integrity, cognitive load, narrative order, layout, diagram semantics and access, sized to what the author controls when the template is fixed. Two workflows: Review (full package) and Quick (one artifact). USE WHEN asked to review, critique or improve the visuals, charts, diagrams, figures, slides, layout or visual storytelling of a deck, document or page, or asked what should be a diagram. NOT FOR the prose itself (WritingPartner), the substance of the proposal (DeliveryReview, ResilienceReview), or producing final artwork."
---

# VisualizeReview

A review skill for the visual layer of anything a person will read or watch: decks, documents, pages, one-pagers, dashboards. The question every lens comes back to: **does each visual let the reader understand a claim faster or more accurately than the prose would, and is every claim that needs a visual given one?** A visual that fails the first test is decoration; a passage that fails the second is a diagram trapped in text.

The review is constructive and critical at once. It names what the artifact does well, specifically enough that the authors know what to protect. It pokes holes with evidence from perception and learning research, never with taste. Every hole comes with a suggestion small enough to act on, and every missing visual comes with a sketch.

## Inputs

A **package**: one or more artifacts that together make the thing. A deck, a document, a page, a figure, a dashboard screenshot, a link. Optional context from the user: who reads it, how (projected, read on a laptop, read on a phone, printed), what decision or understanding it exists to produce, what the authors can and cannot change (a fixed corporate template, a brand system, a tool that only makes certain charts), and anything off limits.

If the user gives no context, infer the reader, the medium and the purpose from the package and state the inferences at the top of the review. Do not interview the user before starting; anything you cannot infer becomes a question in the review.

**Visuals are reviewed as rendered.** Judge a chart from the page image or the PDF, never from extracted text or the data behind it. `Intake.md` says how to get a rendered view of each artifact type and what to do when none is available.

## Workflows

| Workflow | When | File |
|---|---|---|
| **Review** (default) | Any package, any size. Inventory, full pass across the lenses, sketches for every missing visual. | `Workflows/Review.md` |
| **Quick** | One artifact, or the user wants a fast read. Top three strengths, top five holes with at most two sketches, the one question that matters most. | `Workflows/Quick.md` |

Reference files, loaded by the workflows:

- `Intake.md`: getting a rendered view of each artifact type, running the media inventory, and building the proposal map with its visual inventory and its list of passages that want a visual.
- `Lenses.md`: the nine lenses, each with questions, smells, strengths to name, the works behind it, and where the lens itself breaks, including the fixed-template rule.
- `ReviewFormat.md`: the shape of the output, the rules each finding must meet, and when a hole carries a sketch.
- `Sketches.md`: how to write a sketch the authors can act on: which form for which structure, Mermaid patterns, text layouts for slides, table shapes.
- `Tools/extract.ts`: slide text and speaker notes from `.pptx`, body text from `.docx`, and with `--inventory` a per-slide or per-section count of pictures, charts, diagrams, tables and words.

## Principles

1. **Steelman before you critique.** State what the artifact is trying to make the reader see, and the strongest reading of its current visual choices, before any finding.
2. **Cite the artifact.** Every finding points to a slide, page, figure number or section. A finding you cannot point to is an inference, and it is labelled as one.
3. **One visual, one claim.** The test of a visual is whether its title can be written as a sentence the reader should believe after looking at it. If the title is a topic ("Q3 results"), the visual has not decided what it is for.
4. **Argue from perception, not taste.** People read position and length accurately, angle and area poorly, color worst. Grouping, contrast and proximity are read before anything is consciously processed. Findings name the channel, the grouping or the load, not "looks cluttered".
5. **Missing visuals are findings.** A sequence, a comparison, a structure, a quantity or a before-and-after left in prose is a hole with a sketch, ranked like any other.
6. **Review what the author controls.** When the template, the brand system or the tool is fixed, the layout and typography lenses apply only to the choices still open: order, what goes on each slide, figure design, emphasis, alt text. Say so once rather than filing holes against the template.
7. **Severity follows consequence.** Rank by what the reader will misunderstand, miss or decide wrongly if the hole stays open, not by how many lenses noticed it.
8. **Suggestions are the smallest change that closes the hole.** Prefer "sort the bars and title the chart with the finding" over "redesign the dashboard". A sketch is a starting point, never the required final form.
9. **Credit is specific.** "Nice charts" is not a strength. "Slide 9 puts the two cohorts on one axis so the gap is read as a length, and the title states it" is.

## Gotchas

- **The deck is not the document.** A slide read in the hand needs more words than a slide projected behind a speaker, and a document needs figures that stand alone with their captions. Decide which the artifact is (or whether it is trying to be both) and review against that.
- **Extracted text lies about visuals.** The extractor shows what a slide says, not what it shows. Always look at the rendered page before judging a visual, and say when you could not.
- **Tables are visuals.** A table is the right form for lookup and for exact values; a chart is the right form for comparison and pattern. Review a table for its reading order, its sort, its alignment and whether it should be a chart, and review a chart for whether it should be a table.
- **Absence is a finding, but a careful one.** A page with no figures may be deliberate (a legal document, a plain-text policy). Phrase missing visuals as holes only where the reader would understand faster with one, and say what the figure would carry.
- **Sketches are proposals.** A Mermaid block shows the structure the authors should draw; it is not the finished figure, and the review says what the real version needs (data, a tool, a designer) when that matters.
- **Don't review the brand you imagine.** When a palette or a typeface looks wrong, ask whether it is mandated before filing it; the fixed-template rule exists for this.
- **Accessibility is not a lens you skip for internal decks.** Color-blind readers are about one in twelve men; a chart that encodes the finding in red versus green alone has hidden it from someone in most rooms.
- **Keep confidential detail out of quotes.** When the review will travel further than the authors, describe the visual rather than reproducing its numbers.
