---
name: DeliveryReview
description: "Reviews an engineering or product design proposal that touches software delivery (developer workflow, CI/CD, release, environments, platforms, team structure, change control, operations, incident practice) through lean and agile delivery thinking. Takes a package of one or more artifacts (PDF or Markdown most often, also slide decks, Word docs, images and links) and returns a balanced review: what the proposal gets right, where it will slow flow or degrade quality, and concrete suggestions to make it better. Grounded in Reinertsen, the Poppendiecks, Humble and Farley, Forsgren, Kim, Beck, Fowler, Brooks, Hickey, Skelton and Pais, Fournier, Majors, Allspaw, Cook, Woods, Hollnagel, Dekker and Shortridge. Two workflows: Review (full package review, default) and Quick (one artifact, the top findings only). USE WHEN asked to review, critique, poke holes in, pressure-test or give feedback on a proposal, RFC, design doc, strategy deck or plan that would change how software gets built, shipped or run. NOT FOR line-by-line code review, incident investigation (use RootCauseAnalysis), a review centred on failure, recovery or defect handling (use ResilienceReview), attacking an idea with no delivery dimension (use RedTeam), or editing a document's prose."
effort: high
---

# DeliveryReview

A review skill for proposals that change how software moves from idea to production and how it behaves once there. The question every lens comes back to: **will this make it faster and safer to deliver small changes, get feedback on them, and recover when they go wrong, or will it add delay, batching and handoffs in the name of control?**

The review is constructive and critical at once. It names what the proposal does well, specifically enough that the authors know what to protect. It pokes holes with evidence, never with slogans. Every hole comes with a suggestion small enough to act on.

## Inputs

A **package**: one or more artifacts that together make the proposal. A deck, a design doc, an appendix, a diagram, a link. Optional context from the user: the audience for the review, the decision being asked for, the stage (early idea, pre-approval, post-approval) and anything off limits.

If the user gives no context, infer the stage, the decision and the reader from the package and state the inferences at the top of the review. Do not interview the user before starting; anything you cannot infer becomes a question in the review.

**The reader.** Write so the proposal's authors can act on every finding, whoever asked for the review. If the user is an approver or reviewer rather than an author, the same review still works: they can forward it, and the Overall read gives them the verdict in a few sentences.

## Workflows

| Workflow | When | File |
|---|---|---|
| **Review** (default) | Any package, any size. Full pass across all lenses. | `Workflows/Review.md` |
| **Quick** | One artifact, or the user wants a fast read. Top three strengths, top five holes, the one question that matters most. | `Workflows/Quick.md` |

Reference files, loaded by the workflows:

- `Intake.md`: reading each artifact type, including decks with speaker notes, and building the proposal map.
- `Lenses.md`: the nine lenses, each with questions, proposal smells, the thinkers behind it, and where the lens itself breaks.
- `ReviewFormat.md`: the shape of the output and the rules each finding must meet.
- `Tools/extract.ts`: pulls slide text and speaker notes from `.pptx`, and body text from `.docx`, in order.

## Principles

1. **Steelman before you critique.** Restate the proposal in its strongest form, including the problem it solves, before any finding. If the restatement is wrong, every finding built on it is wrong.
2. **Cite the artifact.** Every finding points to a slide, page or section. A finding you cannot point to is an inference, and it is labelled as one.
3. **Lean is an economic argument, not a vibe.** Small batches, short queues and fast feedback win because of cost of delay and transaction cost, not because agile says so. Argue from mechanism. "This isn't agile" is never a finding.
4. **Every lens has limits.** Each one in `Lenses.md` lists where it breaks. Regulated contexts, safety-critical systems and genuinely irreversible changes can justify gates, large batches or upfront design. Say when one applies.
5. **Severity follows consequence.** Rank by what happens to flow, quality or people if the hole stays open, not by how many lenses noticed it.
6. **Suggestions are the smallest change that closes the hole.** Prefer "add a rollback path to slide 9" over "rethink the release model".
7. **Credit is specific.** "Good proposal" is not a strength. "The flag-based rollout on slide 7 separates deploy from release, so the team can ship dark and turn on per customer" is.

## Gotchas

- **Decks hide the argument in the notes.** Always read speaker notes. The slide says "Unified release cadence"; the notes say "monthly".
- **Absence is a finding, but a careful one.** A proposal that never mentions rollback may have it elsewhere. Phrase missing items as questions unless the package claims to be complete.
- **Don't review the org you imagine.** You do not know the authors' constraints. When a lens depends on a fact the package does not give (team size, regulation, current lead time), ask for it instead of assuming.
- **Thinker names are support, not authority.** Cite a thinker for the mechanism they described, then show that mechanism operating in this proposal. A finding that only says "Reinertsen would disagree" is not done.
- **Don't flatten tradeoffs.** Many proposals trade flow for control on purpose. The review's job is to make the price visible and suggest a cheaper way to get the same control, not to refuse the trade.
- **Watch for metric targets.** Proposals often promise DORA or velocity improvements as goals. The measures diagnose a system; turning them into targets invites gaming.
- **Keep confidential detail out of quotes.** When the review will travel further than the authors, quote only what the reader needs.
