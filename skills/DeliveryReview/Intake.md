# Intake: Reading the Package

The review is only as good as the read. Read everything in the package before judging any of it, and build the proposal map before applying a lens.

## Reading each artifact type

| Artifact | How to read it |
|---|---|
| Markdown, text, ADR, RFC | Read directly with the Read tool. Follow relative links to sibling files in the package; diagrams in Mermaid or ASCII are part of the argument, so read them as architecture. |
| PDF (the most common deck format) | Read with the Read tool, which shows both text and page images, so diagrams and slide layout come through. It reads at most 20 pages per call: for longer files, read in page ranges (`pages: "1-20"`, then `"21-40"`) until the end, and never review from the first chunk alone. A deck exported to PDF usually loses its speaker notes. Do not stop to ask: if no notes appear, say in the review header that notes were not available and mention it in the chat summary, so the user can supply the `.pptx` for a second pass. A scanned PDF with no text layer still reads as images; say in the review that quotes from it are transcribed. |
| `.pptx` | `bun Tools/extract.ts deck.pptx`: slide text and speaker notes in slide order. If a PDF export is also present, read both: the PDF shows layout and diagrams, the extract shows the notes. |
| `.docx` | `bun Tools/extract.ts doc.docx`: body text in order, with headings marked. Comments and tracked changes are not extracted; say so if the user expects them reviewed. |
| Images, diagrams, screenshots | Read with the Read tool. Describe what the diagram claims (boxes, arrows, who calls whom) in the proposal map, since diagrams often carry the real architecture. |
| README, landing page, release index | Review the claims it makes about the design, and read the file as a map of where the real detail lives. In Quick it is the one artifact; in Review, follow its links to the siblings that carry the mechanics and cite them separately. |
| Links (Google Docs, Confluence, Notion, Slides) | Use whatever connector or MCP tool is available. If none can reach it, ask the user for an export. Do not review from the title. |
| Spreadsheets | Read the tabs that carry estimates, staffing or timelines. These often hold the batching and utilization assumptions the narrative does not state. |

`Tools/extract.ts` needs `unzip` on the path, which macOS and most Linux distributions have.

## The proposal map

Before any lens, write a short map. It becomes the first section of the review and the reference every finding points back to.

1. **Problem as stated.** In the authors' own terms, with a citation.
2. **Proposed change.** What will be different after this lands, for whom.
3. **Decision being asked for.** Approval, funding, headcount, a mandate, feedback only. If no artifact states the ask in words, infer it and add a Low hole: decision-makers should not have to infer what they are approving.
4. **Stage.** Early idea, pre-approval, approved and planning, mid-rollout. Infer it if not stated, and say it is inferred.
   **Dates.** Check every date in the plan against today's date and the approval date. A cutover already past or a quarter already over is a finding. An artifact with no dates and no plan is not a finding on its own; say that it carries none.
5. **Who is affected.** Developers, operators, product, customers, auditors. Note who is missing from the authors list.
6. **Claims.** The things the proposal says will improve, each with its citation. These are what the review tests.
7. **Stated constraints.** Regulation, deadlines, budget, team size. Take them as given unless they contradict each other.
8. **Gaps.** What a delivery reviewer would expect and cannot find: rollback, pilot, baseline, ownership, migration path. These become questions, not accusations.

## Multi-artifact packages

- Note where artifacts disagree (the deck says monthly, the doc says on demand). A contradiction is a finding in itself; the authors need to settle it before anyone approves.
- Treat the most detailed artifact as the source of record for mechanics and the deck as the source of record for what the decision-makers will see. A risk that is clear in the appendix and absent from the deck is worth a line.
- Cite as `deck s7`, `deck s7 notes`, `doc §3.2`, `appendix p4` so the authors can find each reference. For a plain Markdown file, cite the section heading, and the line number when the file is short enough for lines to be stable: `§Adopt a design, L33`. When a PDF's pages do not match its slides (several slides per page, or a text-only export), cite by slide number or slide title, not by page.
- A contradiction between artifacts on something the decision depends on (cadence, scope, dates, who approves) is High severity: it means the approvers and the implementers would be agreeing to different plans.
