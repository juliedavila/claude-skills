---
name: FirstPrinciples
effort: high
description: "Physics-based reasoning that deconstructs a problem to irreducible truths instead of reasoning by analogy. Three steps: DECONSTRUCT (break it into constituent parts and their actual values), CHALLENGE (classify every element as hard constraint, soft constraint or unvalidated assumption; only physics is immutable), RECONSTRUCT (build the optimal solution from the hard constraints alone, ignoring inherited form). Outputs a constituent-parts breakdown, a constraint classification table and a reconstructed solution with the key insight. Workflows: Deconstruct, Challenge, Reconstruct. Other skills invoke it by running Challenge on all stated constraints. USE WHEN a stated constraint needs testing, or a problem should be rebuilt from fundamentals rather than from its inherited form. NOT FOR incident investigation and causal chains (use RootCauseAnalysis) or structural feedback loops (use SystemsThinking)."
---

# FirstPrinciples

Reasoning from fundamentals instead of by analogy. Analogy asks "how did we solve something similar?" and copies the answer with small changes. First principles asks "what is this actually made of, and which of its constraints are real?" and rebuilds from there. The output is analysis: a map of parts, a classification of constraints, and a solution built from the hard constraints alone.

## Workflows

| Workflow | Use when | File |
|---|---|---|
| **Deconstruct** | The problem is accepted as a whole and nobody has listed what it is made of or what each part really costs | `Workflows/Deconstruct.md` |
| **Challenge** | A constraint, requirement or "we always" is doing a lot of work and nobody has asked whether it is real | `Workflows/Challenge.md` |
| **Reconstruct** | The parts and the real constraints are known and the question is what to build from them | `Workflows/Reconstruct.md` |

A full analysis runs all three in order. Other skills usually need only Challenge, run over every stated constraint before they begin.

## The method

**Deconstruct.** List the constituent parts and the actual value or cost of each, not the market price or the conventional estimate. Ask what a physicist would say this thing is made of.

**Challenge.** Classify each part and each stated constraint:

| Type | Definition | Example | Can it change? |
|---|---|---|---|
| **Hard** | Physics or reality | "Data cannot travel faster than light" | No |
| **Soft** | Policy or choice | "We always use REST" | Yes |
| **Assumption** | Unvalidated belief | "Users won't accept that UX" | May be false |

For each soft constraint and assumption: who decided it, on what evidence, and what happens if it is removed. Only hard constraints survive to the next step.

**Reconstruct.** Starting from the hard constraints alone, what is the simplest thing that satisfies them? Ask what other field has solved the analogous problem differently, and whether the inherited design was optimizing function or form.

## Output format

```markdown
## First Principles Analysis: [Topic]

### Deconstruction
- **Constituent parts**: [fundamental elements]
- **Actual values**: [real costs or metrics, not market prices]

### Constraint classification
| Constraint | Type | Evidence | If removed |
|---|---|---|---|

### Reconstruction
- **Fundamental truths**: [the hard constraints only]
- **Optimal solution**: [built from them]
- **Form vs function**: [what the inherited design was really optimizing]

### Key insight
[One sentence: which assumption was limiting us]
```

## Example

**Problem:** "Cloud hosting costs $10,000 a month; that's just what it costs."

1. **Deconstruct:** compute, storage, bandwidth, managed services, each with its actual usage and unit cost.
2. **Challenge:** managed Kubernetes is a soft constraint (a choice); the region is a soft constraint; the traffic volume is hard.
3. **Reconstruct:** the compute the traffic needs costs about $2,000; the other $8,000 buys convenience the team is choosing, which may be worth it, but is now a decision rather than a fact.

## Gotchas

- **Decompose to axioms, not to smaller components.** A list of subsystems is not a deconstruction. The value is in reaching the irreducible elements and their real costs.
- **Challenge inherited assumptions specifically.** The ones everybody shares are the ones nobody has checked.
- **Soft constraints are not physics.** A policy, a contract or a habit can be changed; the analysis has to say so even when changing it would be expensive.
- **Market prices are not costs.** "Batteries cost $600 per kWh" is a market price; the material cost is the fundamental.
- **Ignoring form is not ignoring requirements.** The reconstructed solution still has to satisfy every hard constraint, and the review of it should check that it does.
- **This is analysis, not implementation.** "Analyze" means run this skill. "Fix" means do the work directly.

---

**Attribution:** reasoning from first principles is old (Aristotle's *archai*; Descartes' method). Its current engineering form was popularized by Elon Musk in interviews from 2012 onward; this skill's framing of the three steps draws on the summaries by James Clear and Mayo Oshin.
