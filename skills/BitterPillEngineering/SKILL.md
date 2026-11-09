---
name: BitterPillEngineering
description: "Audits any AI instruction set (CLAUDE.md, rules files, system prompts, skill text) for over-prompting with one test: would a smarter model make this rule unnecessary? Applies five questions to every rule (already default behaviour? contradiction? redundant? one-off fix? vague?) and classifies each as CUT, RESOLVE, MERGE, EVALUATE, SHARPEN, MOVE to on-demand or KEEP. Keeps anti-fragile rules (verification harnesses, testable criteria, specific DO/DON'T examples, tool preferences, routing) and cuts fragile ones (chain-of-thought orchestration, format parsers, retry cascades, numeric personality scales, abstract values). Two workflows: Audit (every always-loaded file, with an estimate of tokens saved) and QuickCheck (one file, fast verdict). USE WHEN auditing an instruction set, prompt, rules file or CLAUDE.md for over-prompting and dead weight. NOT FOR code simplification, or for attacking the logic of an idea (use RedTeam)."
effort: medium
---

# BitterPillEngineering

Audit any AI instruction set for over-prompting. Based on the principle that **less scaffolding = better output** — every unnecessary rule competes for attention and degrades the rules that matter.

The core test: *"Would a smarter model make this unnecessary?"* If yes, it's scaffolding, not architecture.

## Workflow Routing

| Workflow | Trigger | File |
|----------|---------|------|
| **Audit** | "audit setup", "full audit", "check all rules" | `Workflows/Audit.md` |
| **QuickCheck** | "quick check", "check this file", "check these rules" | `Workflows/QuickCheck.md` |

## Examples

**Example 1: Full system audit**
```
User: "Run BPE on my setup"
→ Invokes Audit workflow
→ Reads all force-loaded files from settings.json
→ Evaluates each rule against the Five Questions
→ Returns categorized report with estimated token savings
```

**Example 2: Check a single file**
```
User: "Quick check this CLAUDE.md"
→ Invokes QuickCheck workflow
→ Reads the target file
→ Returns concise keep/cut/sharpen verdict
```

**Example 3: Post-cleanup validation**
```
User: "I trimmed my rules, check if anything's still redundant"
→ Invokes Audit workflow
→ Compares remaining rules against Claude defaults
→ Flags any surviving dead weight
```

## Gotchas

- Claude's built-in system prompt changes across versions — what was "default behavior" 3 months ago may not be now. When in doubt, test rather than assume.
- Rules that seem redundant with defaults may have been added because Claude was inconsistent about following the default. Check failure history before cutting.
- "One-off fix" rules sometimes prevent recurring failures. Check if the failure pattern is truly gone before removing.
- Harnesses often force-load files from more than one place (a startup list, a post-compaction restore list, an @-import). When you remove a file from one, check the others, or it comes back.

## The Five Questions

For every rule, instruction, or preference found, evaluate:

1. **Default behavior?** Does Claude already do this without being told?
2. **Contradiction?** Does this conflict with another rule in the same or different file?
3. **Redundancy?** Is this already covered by a different rule or file?
4. **One-off fix?** Was this added to fix one specific bad output rather than improve outputs generally?
5. **Vague?** Would Claude interpret this differently every time? (e.g., "be more natural", numeric personality scales)

## Classification

| Category | Action |
|----------|--------|
| Restates default behavior | **CUT** — the model already does this |
| Contradicts another rule | **RESOLVE** — pick one, cut the other |
| Duplicates another rule | **MERGE** — one location, one statement |
| One-off fix for past mistake | **EVALUATE** — still relevant or already learned? |
| Vague / unquantifiable | **SHARPEN** — add specific DO/DON'T examples, or cut |
| Loaded but rarely actionable | **MOVE to on-demand** — load on demand (a routing table, a skill, an @-import) when needed |
| Specific, actionable, non-default | **KEEP** — this is what good instructions look like |

## Anti-Fragile vs Fragile

**Keep (anti-fragile):** Verification harnesses, testable success criteria, data pipelines, specific DO/DON'T examples, tool preferences, routing rules.

**Cut (fragile):** CoT orchestrators, format parsers, retry cascades, numeric personality scales, abstract value statements, process descriptions that aren't followed.

## Output Format

```
## BitterPillEngineering Audit

**Scope:** [what was audited]
**Files read:** [count]
**Rules evaluated:** [count]

### CUT (restating defaults)
- [rule] — [reason]

### RESOLVE (contradictions)
- [rule A] vs [rule B] — [which to keep and why]

### MERGE (redundancies)
- [locations] — [merge into where]

### EVALUATE (one-off fixes)
- [rule] — [still needed? verdict]

### SHARPEN or CUT (vague)
- [rule] — [sharpen how, or cut why]

### MOVE to on-demand
- [content] — [how often it's actually needed]

### KEEP (carrying weight)
- [rule] — [why it matters]

**Estimated savings:** [lines] lines, ~[tokens] tokens
```
