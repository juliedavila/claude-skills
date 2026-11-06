---
name: DalioStrategyAnalysis
description: "Write strategy, planning or recurring status and risk analysis in Ray Dalio's layered style: a nutshell first, a model of how the system works, an archetype of numbered stages with observable markers, where we are now, sourced gauges and exhibits, and a quantified plan with a fallback. USE WHEN writing a strategy or planning document, a landscape analysis, or a recurring status or risk report. NOT FOR a single decision (use DalioDecisionMemo) or finding the leverage points in a recurring problem (use SystemsThinking)."
---

# Dalio-style strategy and status analysis

Produces strategy/planning docs and recurring status or risk write-ups using Dalio's layered architecture (nutshell → machine → archetype → where we are → what to do → appendix) and his gauge-and-exhibit conventions, with guardrails against the flaws critics flag (cherry-picked templates, unsourced charts, repetition).

## House style (applies to every section)

1. **Levels.** Main points above the line; detail only directly under the point it illustrates.
2. **Nutshell first** for the doc and for each major section (one sentence).
3. **Register split.** Mechanics as plain declaratives; judgments in first person with confidence and time window ("I put the odds at ~60% within 12 months."). When revising an earlier estimate, show old and new side by side and why.
4. **Numbers over adjectives.** Banned: "timeless," "universal," unquantified "significant/critical."
5. **Prose carries reasoning; bullets carry lists** (markers, gauges, owners).
6. **Restate once per level**; "In other words, ..." at most once per section.
7. Inline "1) 2) 3)" for short enumerations. Bold one thesis sentence per section.
8. Name teams and people. Define coined terms once. Keep counts (number of forces, gauges, stages) identical everywhere in the doc.

## Strategy document structure

### 0. Reading guide (2-3 lines)
"If you read only one thing, read the Nutshell. Section 4 says where we are and section 5 is the plan. Sections 2-3 explain why; the appendix is evidence for specialists."

### 1. Nutshell (one paragraph)
Where we are, where it's heading, what we'll do, the confidence, and the time horizon.

### 2. How the machine works
Build the model from an atomic unit (e.g., a code change, an alert, a vulnerability, a request). Add layers one at a time, naming the forces that drive outcomes. Identify one core mechanic and repeat it where it explains things. End with 3-5 numbered rules of thumb. Optional three passes at rising rigor: plain-language → mechanical → numbers/formula.

### 3. The archetype
Describe the typical sequence as numbered stages. For each stage: name, 2-4 **observable markers**, typical duration as a range. Then:
- **Case base:** which real cases (internal history, peer orgs, industry incidents) the archetype is derived from.
- **Counter-examples:** cases that didn't follow it, and why.
Use "(CONCEPTUAL)" on any diagram that isn't data.

### 4. Where we are
"We are in Stage N." Then "Today we are seeing:" followed by the markers present, each tied to evidence. State the **disconfirming marker** that would show the stage call is wrong. Confidence in first person.

### 5. What to do
Goal stated as a number. Show single-lever equivalents ("closing the gap through X alone would require..., through Y alone..."), then the blended plan with projected effect. Include a default/fallback if funding or agreement doesn't come. Owners and dates.

### 6. What we're watching
Named indicators, thresholds, and which way each would move the plan.

### Appendix
Detailed cases (compendium), data tables, method notes. Explicitly skippable.

## Status / risk report structure (recurring)

1. **Nutshell:** the overall reading this period and the change from last period.
2. **Gauge panel:** 3-8 named composite gauges. Each has a stated scale (0-1, or relative to own history), current reading, prior reading, direction, and color key (green = strong/good, red = weak/bad). Keep the gauge set stable across editions; if you change it, say so.
3. **Exhibits**, each following this pattern:
   - One-line lead-in: "The exhibit below shows ..."
   - Title in caps stating what is measured and how, units in parentheses, e.g. `MEDIAN TIME TO REMEDIATE CRITICAL VULNS (DAYS, 4-WEEK MOVING AVG)`.
   - **Source line and as-of date under every exhibit** - mandatory.
   - Data-limit footnotes where coverage is partial.
   - Recap: "To briefly summarize what this shows: 1) ..., 2) ..."
4. **Where we are** on the relevant archetype, if one exists.
5. **Estimates and revisions:** current probabilities with time windows next to last period's.
6. **What we're watching** and **actions** (owner, date).

If producing charts, label axes, include units, and prefer one message per chart.

## Self-check before returning
- Does the nutshell alone tell the reader where we are and what we're doing?
- Does the archetype list its case base and counter-examples? Does the stage call name a disconfirming marker?
- Does every exhibit have a method-explicit title, a source, an as-of date, and a recap?
- Is every forecast in first person with odds and a time window?
- Are counts consistent throughout? Any repeated restatements to trim?

## Do not
- Fit a template the evidence doesn't support; say "no reliable archetype yet" instead.
- Present illustrative diagrams as data.
- Cite Dalio's numbers or stages as if they apply to the org; derive your own.
