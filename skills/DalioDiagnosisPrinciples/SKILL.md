---
name: DalioDiagnosisPrinciples
description: "Write up a problem diagnosis or postmortem in Dalio's format (outcome, responsible party, how it should have worked, proximate cause as a verb, root cause as a design attribute, design change), blameless by default, or write and refine team operating principles in his numbered, testable format. USE WHEN writing the diagnosis or postmortem document once the causes are understood, or drafting operating principles or tenets. NOT FOR investigating why something failed (use RootCauseAnalysis first, then this skill to write it up)."
---

# Dalio-style diagnosis and operating principles

Two linked document types. In Dalio's 5-Step Process (Goals → Problems → Diagnosis → Design → Doing), a good diagnosis ends in a design change, and recurring design changes become written principles. This skill covers both, adapted for a blameless engineering culture: root causes describe the design by default, never a person's character, because the person-level version is where Bridgewater's practices turned harmful.

## House style (applies to both types)

1. **Levels.** Main points above the line; detail only under the point it illustrates. Separate "the case" (fix this instance) from "the machine" (change the system that produced it).
2. **Nutshell first** for the doc and each major section.
3. **Register split.** Facts and timeline as plain declaratives; judgments in first person with confidence.
4. **Numbers over adjectives.** Banned: "timeless," "universal," unquantified "significant/critical."
5. **Prose carries reasoning; bullets carry lists.**
6. Restate once per level. Bold one thesis sentence per section. Name teams/roles.

---

## A. Diagnosis / postmortem

### Nutshell (3-4 sentences)
What happened, impact in numbers, the root cause in one phrase, and the design change.

### Fields, in order
1. **Goal / expected outcome:** what the machine was supposed to produce.
2. **Actual outcome and impact:** with numbers (duration, scope, severity).
3. **Responsible party (RP):** the team or role that owns that part of the machine. Accountability for the outcome, not blame.
4. **How the machine should have worked:** a short description of the intended design (who/what was supposed to catch or prevent this).
5. **Proximate causes - phrased as verbs:** the actions or failures to act that directly produced the outcome ("did not rotate the key," "merged without required review"). Use a short timeline if needed.
6. **Root causes - phrased as adjectives about the design:** the reasons beneath the proximate causes ("unowned," "single-approver," "alert-fatigued," "undocumented"). Test: if this were fixed, would the proximate causes stop recurring? Person-fit or capability questions go to a private channel, never in this document.
7. **Which step failed:** goals unclear, problem not surfaced, misdiagnosed earlier, poor design, or poor execution.
8. **Pattern check:** has this root cause appeared before? Link prior issues. A pattern escalates the fix.
9. **Design change:** what changes in responsibilities, process, tooling or controls. Start with the high-level picture, then drill down to tasks.
10. **Tasks:** owner, action, due date.
11. **Case vs. machine:** one paragraph stating what was fixed for this case and what changed in the system.
12. **Principle candidate (optional):** if this reveals a reusable rule, draft it in the format in section B.

### Issue-log entry (one line, for trackers)
`Severity | RP | Outcome (one line) | Root cause (adjective) | Design change | Link`

### Do not
- Write root causes as character traits of named people.
- Count issues as a performance metric; measure recurrence and fix quality.

---

## B. Operating principles

### Structure
1. **Reading guide:** "The summary table is the whole picture; the rest explains each principle."
2. **Summary table:** every principle's number and one-line headline, before any elaboration.
3. **Principles**, numbered N → N.N → N.Na so they can be cited ("per 2.3b"). Group under at most ~7 top-level principles.
4. **Glossary** for any coined term.
5. **Revision log:** date, change, and the case that prompted it. Principles are written, tested against outcomes, and refined.

### Entry shape for each principle
- **Headline:** a short imperative in bold.
- **Trigger:** the situation in which it applies.
- **Action:** what to do, specifically enough to implement.
- **Rationale:** the cause-effect reason, in prose.
- **Worked example:** a real case (incident, decision) where it changed the outcome, with numbers if possible.
- **Less effective vs. more effective:** one-line contrast of the behavior.
- **Self-test question:** "How often do I/we ...?"
- **Sub-rules:** lettered (a, b, c), only if each is independently actionable.

### Specificity test (apply to every principle)
- Names a trigger and an action?
- Has at least one real case behind it?
- Could a reasonable person disagree with it? If not, it's a platitude; cut it or sharpen it.
- Is it fewer words than its rationale?

### Do not
- Turn principles into wall slogans.
- Exempt leaders from the principles.
- Include more principles than people can remember; cap the top level.

## Self-check before returning
- Diagnosis: proximate causes are verbs, root causes are design adjectives, every task has an owner and date, and the case-vs-machine paragraph exists.
- Principles: summary table first, citable numbering, every entry passes the specificity test, revision log present.
