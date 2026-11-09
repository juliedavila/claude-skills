---
name: LearningConditions
description: "Raise learning capacity over time by managing the standing conditions around it: triaging what deserves deep work versus storage, designing sessions so encoding actually happens, surviving the week-two collapse, detecting the drift back to fluency-preserving habits, and instrumenting whether capacity is genuinely rising. USE WHEN deciding how to handle incoming material, setting up or repairing a study practice, asking why a learning habit keeps dying, or asking whether you are actually getting better at learning. NOT FOR learning one specific topic to conviction or reviewing a built model (use Internalize, which owns the per-topic loop and spaced cold-recall). NOT FOR looking something up (use Research) or capturing a reference (use Knowledge ingest)."
effort: medium
---

# LearningConditions

Technique is not the bottleneck. **Adherence and self-deception are.** This skill owns the layer
around learning rather than any single act of it: what gets deep work, what conditions a session
needs, whether the practice survives contact with a real calendar, whether you have quietly
drifted back to habits that feel productive, and whether capacity is actually rising.

## The one idea everything rests on

**The two ways a learning practice dies are invisible from the inside.** It dies by abandonment,
which feels like a busy week rather than a decision. Or it dies by drift, where the ritual
continues while the cognitive work inside it quietly stops, and the output still looks right.
Both failure modes feel fine while they happen. So the standing conditions worth managing are
the ones that make those two failures *visible*, early, from outside your own sense of how it is
going.

## Boundary with the per-topic learning loop (read before doing anything)

A companion skill, `Internalize` where it is installed, owns the per-topic loop: learn THIS to conviction, the cold-recall gate, the ELI5
and peer-defense passes, and the spaced review and interleaved discrimination of models already
built. **Do not re-implement any of that here.** This skill decides *what deserves that
treatment*, sets up the conditions for it, and tells you whether it is working over months.
When a topic earns deep work, hand off to `Internalize` if it is installed and stop; if it is not, say that the topic earned deep work and let the user choose how to do it. Do not improvise a study method here.

## Workflow Routing

| Trigger | Workflow |
|---------|----------|
| "what should I do with this", "is this worth learning properly", new book/paper/course/talk landed | `Workflows/Triage.md` |
| "set up a session", "how should I study this", "I have 90 minutes" | `Workflows/Session.md` |
| "this keeps dying", "I fell off", "will this survive", designing a new practice | `Workflows/Adherence.md` |
| "am I fooling myself", "this feels fine but", periodic health check on a practice | `Workflows/DriftCheck.md` |
| "am I actually getting better", quarterly review, "is this working" | `Workflows/Instrument.md` |

## Quick Reference

- **Triage first, always.** Most material does not deserve deep work, and treating everything as
  conviction-worthy is itself a cause of abandonment. Five destinations: conviction, working
  reference, arbitrary detail, skim-and-drop, and no.
- **Low felt effort reliably means it is not working. High felt effort does NOT mean it is.**
  This asymmetry is the most rigorous thing in the source material and the most commonly
  collapsed. Difficulty is necessary and not sufficient, so a hard session can still be wasted.
- **Design for the week you will actually have, not the week you are imagining.** A practice
  sized for a clear calendar is a practice that ends the first time the calendar is not clear.
- **The artifact looking right is not evidence.** Every drift check asks for the reasoning
  behind the artifact, generated cold, never the artifact itself.
- **Instrument capacity, not activity.** Hours studied and pages covered are the metrics that
  survive drift untouched, which is exactly why they are the wrong ones.

**Load on demand:**
- What is actually evidence-backed here, graded, with the honest ceiling: `References/EvidenceBase.md`
- The five triage destinations and their tests: `References/TriageMap.md`

## Gotchas

- **Do not let this skill become technique advice.** The moment it starts recommending study
  methods it has drifted into `Internalize`'s territory and lost its own job. Its job is the
  conditions: what, whether, how long, and is it real.
- **Never accept a self-report of how a practice is going.** Both failure modes feel fine from
  inside. Every check needs an external signal: a cold reconstruction, a calendar record, a
  changed decision, something that exists outside the feeling.
- **A drop in confidence after a drift check is success.** The point of the check is to break a
  fluency illusion. Expect and welcome the drop. Reassuring the user here defeats the workflow.
- **Do not prescribe a schedule before knowing the actual constraints.** Caregiving weeks, travel,
  busy seasons and job changes are not obstacles to route around; they are the real
  shape of the week and the practice has to be sized to the worst one, not the best one.
- **Resist the urge to quantify capacity precisely.** The honest instruments here are coarse and
  slow. A confident number would be the same error the source material makes, and
  `References/EvidenceBase.md` says plainly where the evidence stops.
- **Triage is allowed to say no.** The most valuable output of this skill is often a decision
  not to learn something. Skills that cannot decline anything generate their own abandonment.
