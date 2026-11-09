---
name: ResilienceReview
description: "Reviews a design, architecture, operating model, runbook, automation or agent proposal, or a defect and vulnerability management program, for how the system will fail, how its defects get found and fixed, and how it and its people recover, through safety science and resilience engineering. Takes a package of artifacts (Markdown, PDF, decks, Word, images, links) and returns a balanced review: specific strengths, ranked holes with the mechanism behind each, and the smallest change that closes each one. Nine lenses, with the defect lifecycle (finding, triage, time to fix, class-level prevention, escape points) as a first-class lens. Two workflows: Review (full package) and Quick (one artifact). USE WHEN asked to review, critique, poke holes in or pressure-test a system design or program for safety, reliability, resilience or defect handling. NOT FOR investigating an incident that already happened (RootCauseAnalysis), reviewing how change flows to production (DeliveryReview), attacking an idea with no system behind it (RedTeam) or editing prose."
effort: high
---

# ResilienceReview

A review skill for proposals that change how a system fails, how its defects are found and fixed, and how it recovers. The question every lens comes back to: **when this meets real load, real faults, real adversaries and real people under pressure, will harm stay small and get fixed fast, or will the design hide the hazard until it is expensive?**

The review is constructive and critical at once. It names what the proposal does well, specifically enough that the authors know what to protect. It pokes holes with evidence, never with slogans. Every hole comes with a suggestion small enough to act on.

## Inputs

A **package**: one or more artifacts that together make the proposal. A design doc, an architecture diagram, a runbook, a program charter, a deck, a link. Optional context from the user: the audience for the review, the decision being asked for, the stage (early idea, pre-approval, post-approval, in operation) and anything off limits.

If the user gives no context, infer the stage, the decision and the reader from the package and state the inferences at the top of the review. Do not interview the user before starting; anything you cannot infer becomes a question in the review.

**The reader.** Write so the proposal's authors can act on every finding, whoever asked for the review. If the user is an approver, an operator or a security reviewer rather than an author, the same review still works: they can forward it, and the Overall read gives them the verdict in a few sentences.

## Workflows

| Workflow | When | File |
|---|---|---|
| **Review** (default) | Any package, any size. Full pass across all lenses. | `Workflows/Review.md` |
| **Quick** | One artifact, or the user wants a fast read. Top three strengths, top five holes, the one question that matters most. | `Workflows/Quick.md` |

Reference files, loaded by the workflows:

- `Intake.md`: reading each artifact type, including decks with speaker notes, and building the proposal map, with the hazards and defect sources the map must carry.
- `Lenses.md`: the nine lenses, each with questions, proposal smells, the thinkers behind it, and where the lens itself breaks.
- `ReviewFormat.md`: the shape of the output, the rules each finding must meet, and the escape-point field for defect findings.
- `Tools/extract.ts`: pulls slide text and speaker notes from `.pptx`, and body text from `.docx`, in order.

## Principles

1. **Steelman before you critique.** Restate the proposal in its strongest form, including the hazard it reduces or the defect it handles better, before any finding. If the restatement is wrong, every finding built on it is wrong.
2. **Cite the artifact.** Every finding points to a slide, page or section. A finding you cannot point to is an inference, and it is labelled as one.
3. **Argue from mechanism.** A hazard is a system state, a failure travels along a coupling, a defect escapes a stage, people drift under a pressure. Name the state, the coupling, the stage or the pressure. "Not resilient" and "single point of failure" are not findings until they say what fails, what it takes with it, and who notices.
4. **Fixing beats finding.** A proposal that adds detection, scanning or review without adding the capacity to fix what they find has added a queue. Say so, and ask where the fix capacity comes from.
5. **Every lens has limits.** Each one in `Lenses.md` lists where it breaks. A small internal tool, a deliberate accepted risk, a regulated artifact that must exist: say when one applies and soften the finding.
6. **Severity follows consequence.** Rank by what happens to people, data or service if the hole stays open, not by how many lenses noticed it.
7. **Suggestions are the smallest change that closes the hole.** Prefer "add a timeout and a fallback at the call on page 4" over "redesign for cell isolation".
8. **Credit is specific.** "Good resilience story" is not a strength. "The design on page 6 keeps serving cached policy when the policy service is down, so an outage there degrades freshness instead of availability" is.

## Gotchas

- **Safety means several things.** Readers bring safety-critical engineering, AI safety, information security or psychological safety to the word. Read the package for the meaning it uses and say which one the review takes; the lenses apply to all of them, differently.
- **Counts suppress reporting.** Incident counts and defect counts are the two easiest measures to game and the fastest way to make people stop reporting. Treat a proposal that targets either as a High finding unless it says how reporting stays safe.
- **Decks hide the argument in the notes.** Always read speaker notes. The slide says "resilient by design"; the notes say "single region for now".
- **Absence is a finding, but a careful one.** A proposal that never mentions restores may test them elsewhere. Phrase missing items as questions unless the package claims to be complete.
- **Don't review the org you imagine.** You do not know the authors' constraints or scale. When a lens depends on a fact the package does not give (traffic, team size, regulation, current time to fix), ask for it instead of assuming.
- **Agents are controllers.** When the proposal puts an AI agent or any automation in a position to act on the system, apply lens 1 (what feedback does it get) and lens 7 (what is the human's job now) together. "A human reviews the agent's output" is a claim to test, not a mechanism. In Quick the pair shares one lens slot.
- **Thinker names are support, not authority.** Cite a thinker for the mechanism they described, then show that mechanism operating in this proposal. A finding that only says "Woods would call this brittle" is not done.
- **Mandated methods stay.** Where a regulator or standard requires FMEA, HAZOP, a safety case or a particular control, do not suggest replacing it. Suggest that it argue honestly and that the evidence come from the running system.
- **Keep confidential detail out of quotes.** When the review will travel further than the authors, quote only what the reader needs.
