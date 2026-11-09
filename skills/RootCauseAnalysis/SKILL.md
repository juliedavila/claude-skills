---
name: RootCauseAnalysis
description: "Structured incident investigation grounded in the Toyota Production System, Kaoru Ishikawa, James Reason's Swiss cheese model, Dean Gano's Apollo method and blameless postmortem practice. Five workflows: FiveWhys (one causal thread), Fishbone (category mapping when several areas are suspect), Postmortem (blameless timeline, contributing factors, action items; wraps the others), FaultTree (AND/OR logic for multi-path or safety-critical failures) and KepnerTregoe (IS/IS-NOT distinction analysis for subtle, hard-to-reproduce defects). The proximate cause is where analysis starts; humans are never root causes; a cause is root enough when it is actionable. USE WHEN investigating why something failed, or keeps failing, and the answer has to hold up. NOT FOR structural feedback loops (use SystemsThinking), axiom decomposition (use FirstPrinciples) or reviewing a design before it fails (use ResilienceReview)."
effort: high
context: fork
---

# RootCauseAnalysis

Structured investigation of why something failed: past the proximate cause, down to the contributing factors and latent conditions that made the failure possible. The goal is not "the" root cause, a framing that is almost always wrong, but a set of contributing factors that are actionable. A good analysis ends with changes that prevent a class of failure, not only the incident in front of you.

Five axioms:

1. **Proximate cause is where analysis starts.** "The deploy failed because X crashed" opens the investigation; it never closes it.
2. **There is rarely one cause.** Incidents have active failures (what someone did) and latent conditions (what the system allowed), lined up as in James Reason's Swiss cheese model.
3. **Humans are not root causes.** If a person could make the mistake, the system allowed it. "Operator error" is a stop sign for analysis, not a conclusion.
4. **Actionability is the stop condition.** A cause is root enough when it points to a change you can make. Shallower and you miss the fix; deeper ("thermodynamics") and you cannot act.
5. **The analysis is a fight against bias.** Hindsight, confirmation, single-cause and outcome bias all corrupt investigations; the structure exists to resist them.

## Workflows

| Workflow | Use when | Trigger phrases | File |
|---|---|---|---|
| **FiveWhys** | One clear failure point, a single causal thread | "5 whys", "ask why until root" | `Workflows/FiveWhys.md` |
| **Fishbone** | Several categories of cause suspected (people, process, tools, inputs, measurement) | "fishbone", "ishikawa", "6 M's", "4 P's" | `Workflows/Fishbone.md` |
| **Postmortem** | A production outage or security incident that needs a formal, blameless review | "postmortem", "incident review" | `Workflows/Postmortem.md` |
| **FaultTree** | Multi-path or safety-critical failure that needs AND/OR logic | "fault tree", "FTA" | `Workflows/FaultTree.md` |
| **KepnerTregoe** | A subtle defect that appears in one place and not another | "is/is-not", "what changed", "why here and not there" | `Workflows/KepnerTregoe.md` |

For any non-trivial incident, **Postmortem wraps the others**: start with its timeline and structure, and use FiveWhys, Fishbone or FaultTree inside it as investigation tools. `MethodSelection.md` has the fuller decision flow; `Foundation.md` has the canonical methods and their sources.

Pair with **SystemsThinking** when the same pattern recurs across incidents (it continues from contributing factors down to structure and mental models), with **FirstPrinciples** to decompose a contributing factor before fixing it, and with **RedTeam** to stress-test a remediation ("how would we cause this again?").

## Examples

**Production outage, Postmortem with FiveWhys inside**
```
"the payments service went down for 14 minutes last night"
Timeline: deploy 23:47 → health check passed → traffic shift 23:49 → p99 spike 23:51 → auto-rollback 00:01
Why did p99 spike? Cold cache. Why cold? New pod group. Why no warm-up? Not in the deploy script. Why? Not in the checklist. Why? The template predates the caching layer.
Contributing factors: stale deploy template (latent); no warm-up step (active); no cold-cache canary (latent)
Remediation: update the template, add the warm-up step, add a cold-cache canary gate
```

**Subtle defect, KepnerTregoe**
```
"this flaky test only fails in CI, not locally"
IS / IS NOT: fails on CI, passes locally; fails Tuesdays, not other days; fails on shared runners, not dedicated; fails with parallel workers, not serial
Distinctions point to time zone plus concurrency plus a shared file system
Hypothesis: a local-timezone assumption and a race on shared /tmp, both triggered only in CI
```

## Gotchas

- **Blameless is not optional.** The question is what system allowed this, never who did it. Keep the incident review and any performance conversation in separate rooms; mixing them corrupts the analysis, because people stop telling the truth.
- **Reconstruct the timeline before theorizing.** Hindsight compresses it. Write what happened in order, then ask why.
- **The first plausible cause is almost never the only one.** Name at least three contributing factors before stopping, and test each for actionability: if you cannot change it, go shallower; if you can, go one level deeper to be sure you have found the lever.
- **Ask who else could make this mistake.** If the answer is anyone on the team, the cause is systemic.
- **More than about five whys usually means you switched causal chains.** Redraw it as a tree, not a line.
- **Correlation is a hypothesis to test.** Two things happening together is not a cause.
- **Outcome bias is sneaky.** A decision that turned out badly can still have been right given the information at the time. Judge the process separately from the outcome.

---

**Attribution:** the Five Whys come from the Toyota Production System, as described by Taiichi Ohno (*Toyota Production System*, 1988) and often credited to Sakichi Toyoda; Kaoru Ishikawa, *Guide to Quality Control* (1968), for the fishbone diagram; James Reason, *Human Error* (1990), for the Swiss cheese model; Dean Gano, *Apollo Root Cause Analysis* (2008); Charles Kepner and Benjamin Tregoe, *The Rational Manager* (1965); the Google SRE book (2016) and John Allspaw's blameless postmortem (Etsy, 2012).
