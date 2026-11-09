# Intake: Reading the Package

The review is only as good as the read. Read everything in the package before judging any of it, and build the proposal map before applying a lens.

## Reading each artifact type

| Artifact | How to read it |
|---|---|
| Markdown, text, ADR, RFC, runbook | Read directly with the Read tool. Follow relative links to sibling files in the package; diagrams in Mermaid or ASCII are part of the argument, so read them as architecture. A runbook is evidence of how recovery is imagined; read it against the design, not on its own. |
| PDF (the most common deck format) | Read with the Read tool, which shows both text and page images, so diagrams and slide layout come through. It reads at most 20 pages per call: for longer files, read in page ranges (`pages: "1-20"`, then `"21-40"`) until the end, and never review from the first chunk alone. A deck exported to PDF usually loses its speaker notes. Do not stop to ask: if no notes appear, say in the review header that notes were not available and mention it in the chat summary, so the user can supply the `.pptx` for a second pass. A scanned PDF with no text layer still reads as images; say in the review that quotes from it are transcribed. |
| `.pptx` | `bun Tools/extract.ts deck.pptx`: slide text and speaker notes in slide order. If a PDF export is also present, read both: the PDF shows layout and diagrams, the extract shows the notes. |
| `.docx` | `bun Tools/extract.ts doc.docx`: body text in order, with headings marked. Comments and tracked changes are not extracted; say so if the user expects them reviewed. |
| Architecture diagrams, screenshots | Read with the Read tool. Record what the diagram claims (boxes, arrows, who calls whom, what is shared) in the proposal map. Dependency arrows are the raw material for lens 2; a box everything points at is a finding candidate before any lens is applied. |
| README, landing page, release index | Review the claims it makes about the design, and read the file as a map of where the real detail lives. In Quick it is the one artifact; in Review, follow its links to the siblings that carry the mechanics and cite them separately. |
| Links (Google Docs, Confluence, Notion, Slides) | Use whatever connector or MCP tool is available. If none can reach it, ask the user for an export. Do not review from the title. |
| Spreadsheets | Read the tabs that carry capacity, SLAs, backlog counts or staffing. These often hold the utilization and fix-capacity assumptions the narrative does not state. |
| Dashboards, metric exports, incident lists | Read as evidence for lens 9. Note what is measured, over what period, against what baseline, and what is conspicuously not measured. |

`Tools/extract.ts` needs `unzip` on the path, which macOS and most Linux distributions have.

## The proposal map

Before any lens, write a short map. It becomes the first section of the review and the reference every finding points back to.

1. **Problem as stated.** In the authors' own terms, with a citation.
2. **Proposed change.** What will be different after this lands, for whom.
3. **Decision being asked for.** Approval, funding, headcount, a mandate, feedback only. If no artifact states the ask in words, infer it and add a Low hole: decision-makers should not have to infer what they are approving.
4. **Stage.** Early idea, pre-approval, approved and planning, mid-rollout, in operation. Infer it if not stated, and say it is inferred.
   **Dates.** Check every date in the plan against today's date and the approval date. A cutover already past or a quarter already over is a finding. An artifact with no dates and no plan is not a finding on its own; say that it carries none.
5. **Hazards named.** What the package says must not happen, in its own words, and what it visibly worries about. Note hazards a reviewer would expect that the package never names.
6. **Defect sources.** Where defects enter this system's view today (tests, scanners, incidents, customers, audits, pen tests) and which of those the proposal adds, removes or changes. Note who fixes what each source finds.
7. **Who is affected.** Operators, on-call, developers, security, customers, auditors, and anyone whose job the proposal automates. Note who is missing from the authors list, especially the people who will run it.
8. **Claims.** The things the proposal says will be safer, more reliable or better handled, each with its citation. These are what the review tests.
9. **Stated constraints.** Regulation, deadlines, budget, team size, scale. Take them as given unless they contradict each other.
10. **Gaps.** What a resilience reviewer would expect and cannot find: degraded modes, recovery rehearsal, fix capacity, escape-point assignment, override path, baseline measures. These become questions, not accusations.

## Multi-artifact packages

- Note where artifacts disagree (the deck says multi-region, the design doc says one region for the first year). A contradiction is a finding in itself; the authors need to settle it before anyone approves.
- Treat the most detailed artifact as the source of record for mechanics and the deck as the source of record for what the decision-makers will see. A hazard that is clear in the appendix and absent from the deck is worth a line.
- Cite as `deck s7`, `deck s7 notes`, `doc §3.2`, `runbook step 4`, `diagram A` so the authors can find each reference. For a plain Markdown file, cite the section heading, and the line number when the file is short enough for lines to be stable: `§Adopt a design, L33`. When a PDF's pages do not match its slides (several slides per page, or a text-only export), cite by slide number or slide title, not by page.
- A contradiction between artifacts on something the decision depends on (failure domains, who is on call, what counts as a defect, who approves a risk acceptance) is High severity: it means the approvers and the implementers would be agreeing to different systems.
