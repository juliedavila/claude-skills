# Intake: Seeing the Package

The review is only as good as the look. Get a rendered view of every artifact before judging any visual, run the inventory, and build the proposal map before applying a lens.

## Getting a rendered view

| Artifact | How to see it |
|---|---|
| PDF (decks, documents, printed pages) | Read with the Read tool, which shows page images, so charts, diagrams and layout come through. It reads at most 20 pages per call: for longer files, read in page ranges until the end, and never review from the first chunk alone. A deck exported to PDF usually loses its speaker notes; say so in the header and ask for the `.pptx` if the notes matter to the story. |
| `.pptx` | `bun Tools/extract.ts deck.pptx` for slide text and speaker notes, and `bun Tools/extract.ts --inventory deck.pptx` for a per-slide count of pictures, charts, diagrams, tables and words. Neither shows the visuals. Ask for a PDF export, or screenshots of the slides that carry figures; if none can be had, review the text and the inventory and say in the header that no visual was seen as rendered. |
| `.docx` | `bun Tools/extract.ts doc.docx` for the body, `--inventory` for figures and tables per top-level section. Same rule: judge figures from a PDF export or images, not from the extract. |
| Markdown, text, ADR, RFC | Read directly, and run `Tools/extract.ts --inventory` for figures, tables, callouts and code blocks per section. Mermaid, ASCII and image links are the visual layer; read each one as a figure. Follow relative links to the images and read them. When the Markdown is the source of a styled site, review it under the HTML row below: from source, and say so. |
| HTML pages | If a browser tool is available, open the page and take screenshots at the width the reader will use (and at phone width when the page is public). Otherwise run `--inventory` on the file and read the source: `<figure>`, `<img>` with its `alt`, inline `<svg>`, `<table>` and the heading structure, and say the review is from source, not from rendering. |
| Images, screenshots, single figures | Read with the Read tool. Record what the figure claims and how it encodes it (which channel carries the finding). |
| Links (Google Slides, Docs, Figma, Notion) | Use whatever connector is available. If none can reach it, ask for an export. Do not review from the title. |
| Dashboards and data exports | A dashboard is reviewed from a screenshot. A spreadsheet or CSV that feeds a chart is read only to check integrity findings (lens 4), never as the visual itself. |

`Tools/extract.ts` needs `unzip` on the path, which macOS and most Linux distributions have.

## The proposal map

Before any lens, write a short map. It becomes the first section of the review and the reference every finding points back to.

1. **What it is and who reads it.** Deck, document, page, one-pager; the reader; the medium (projected, laptop, phone, print) and whether the artifact is read with or without a presenter. Infer and say so where the package does not state it.
2. **Purpose.** The decision, understanding or action the artifact exists to produce, in the authors' own words where they give them.
3. **The story in one paragraph.** What the reader is meant to believe at the end, and the three to five moves that get them there. This is what the visual sequence is tested against in lens 6.
4. **What the authors control.** Template, brand, chart tool, length limits, and whether the rendering target can carry figures at all (images, Mermaid, inline SVG, table captions). On a site built from source this last fact decides whether any "add" hole is actionable; when it is unknown, it is the first question for the authors. Take stated constraints as given; if none are stated and the artifact looks templated, note the inference.
5. **Visual inventory.** One row per visual (chart, diagram, table, image, icon set, callout box): where it is, what kind it is, the message it carries in one sentence (or "none stated"), and the channel that carries the finding (position, length, color, text). The `--inventory` tool gives the counts for any file type; the message column is always written by hand from the rendered view. "The three that matter most" means the three that carry the most of the argument.
6. **Passages that want a visual.** Every stretch of prose that is a sequence (steps, a timeline, a flow), a comparison (options, before and after, cohorts), a structure (components, hierarchy, who talks to whom), a quantity or a trend, or a location. Note where it is and what kind of visual it is asking for. These become candidate holes. A quantity is trapped only when the reader is asked to compare it with something (another number, a baseline, a target, itself over time); a single cited figure used as evidence stays in its sentence.
7. **Claims.** The things the artifact says the visuals show, each with its citation. These are what lens 4 tests.
8. **Gaps.** What a reader would expect and cannot find: a summary visual at the decision point, a legend, a source line under the data, alt text on a public page.

## Multi-artifact packages

- Note where artifacts disagree (the deck's chart and the appendix table give different numbers; the diagram shows three services and the text names four). A contradiction is a finding in itself.
- Treat the most detailed artifact as the source of record for facts and the deck as the source of record for what the decision-makers will see. A figure that is clear in the appendix and absent from the deck is worth a line.
- Cite as `deck s7`, `deck s7 fig`, `doc fig 3`, `doc §3.2`, `page §Results`, `dashboard panel 2` so the authors can find each reference. For a plain Markdown file, cite the section heading plus the line number; a line number alone is never enough, since it moves.
- A contradiction between a visual and the text it sits beside, on something the decision depends on, is High severity: readers trust the picture, so a wrong picture beats a right sentence.
