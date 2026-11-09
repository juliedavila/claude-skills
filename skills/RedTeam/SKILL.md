---
name: RedTeam
description: "Military-grade adversarial analysis that deploys 32 parallel expert agents (engineers, architects, pentesters, interns) to stress-test ideas, strategies, and plans, not systems or infrastructure. Two workflows: ParallelAnalysis (5-phase: decompose into 24 atomic claims, 32-agent parallel attack, synthesis, steelman, counter-argument, each 8 points) and AdversarialValidation (competing proposals synthesized into the best solution). Context files: Philosophy.md, Integration.md. Targets arguments, not network vulnerabilities. Findings ranked by severity; the goal is to strengthen rather than destroy, so weaknesses arrive with remediation paths. Collaborates with FirstPrinciples (decompose assumptions before attacking). USE WHEN an idea, plan, or strategy should be attacked hard to find where it breaks before someone else does. NOT FOR AI instruction set auditing (use BitterPillEngineering). NOT FOR network/system vulnerability testing (use a security assessment skill)."
effort: high
---

# RedTeam

Adversarial analysis of ideas, plans and strategies using parallel agents. The argument is broken into atomic claims, attacked from many expert perspectives at once, and rebuilt as the strongest version of itself beside the strongest case against it. The goal is to strengthen the idea before someone else finds the hole, so every weakness arrives with a remediation path.

## Workflows

| Workflow | Use when | File |
|---|---|---|
| **ParallelAnalysis** | Existing content (a plan, a proposal, an argument) should be stress-tested. Returns a steelman and a counter-argument, eight points each. | `Workflows/ParallelAnalysis.md` |
| **AdversarialValidation** | New content should emerge from competition: competing proposals are generated, attacked and synthesized into the best solution. | `Workflows/AdversarialValidation.md` |

**The five phases of ParallelAnalysis:** decompose into 24 atomic claims; 32 agents examine strengths and weaknesses in parallel; synthesize the convergent findings; write the steelman; write the counter-argument.

Context files: `Philosophy.md` (what success looks like, the agent types) and `Integration.md` (how other skills call this one, including FirstPrinciples for decomposing assumptions first, and the output format).

## Examples

- "Red team this microservices migration plan" runs ParallelAnalysis and returns the steelman and the counter-argument.
- "Poke holes in my plan to raise prices 20%" runs ParallelAnalysis and surfaces the one issue that could collapse the plan.
- "Which of these two approaches is better for this feature?" runs AdversarialValidation and synthesizes the best of both.

## Gotchas

- **Attack ideas, not systems.** This skill finds flaws in arguments, strategies and plans, never network or application vulnerabilities.
- **Volume is not severity.** Thirty-two agents produce many findings; rank by what would actually break the plan and discard the noise.
- **Strengthen, do not destroy.** A weakness without a remediation path is not finished.
- **Decompose before attacking.** When the plan rests on stated constraints, run FirstPrinciples Challenge over them first, so the agents attack the real assumptions rather than the wording.
