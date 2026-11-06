---
name: DalioDecisionMemo
description: "Write a decision memo or decision-meeting pre-read in Ray Dalio's style: the answer first, options framed as expected-value bets with stated probabilities, a named decider, a believability-weighted record of dissent, and a closing block with owners, dates and what would reverse the call. USE WHEN a document asks someone to make a decision, or a meeting needs a decision pre-read. NOT FOR reviewing someone else's proposal (use DeliveryReview or RedTeam) or improving the prose of an existing document without changing its structure (use WritingPartner)."
---

# Dalio-style decision memo

Produces a document that gets one decision made by the right person. It combines Dalio's level discipline, expected-value framing and meeting protocols with a Minto/BLUF opening and Amazon-style causal prose, because Dalio's own bullet-heavy format hides relative importance (the "PowerPoint" critique).

## House style (applies to every section)

1. **Levels.** Keep main points "above the line" and supporting detail "below the line." Detail appears only directly under the point it illustrates. Never open a section with detail.
2. **Nutshell first.** The doc opens with a nutshell; every major section opens with a one-sentence nutshell of that section.
3. **Register split.** State mechanics and facts as plain declaratives ("Pipeline X blocks merges on critical findings."). State judgments in first person with a confidence and time window ("I assess ~70% that adoption passes 80% of repos by Q3."). Never let an opinion read as a fact. Label suggestions as suggestions.
4. **Numbers over adjectives.** Replace "significant," "critical," "major" with a number, a range, or a named comparison. Banned: "timeless," "universal," "obviously," unquantified "significant/critical."
5. **Prose carries reasoning; bullets carry lists.** Causal chains ("because," "which means," "so") go in sentences. Bullets/tables are only for enumerations: options, owners, markers, dates.
6. **Restate once per level, not per paragraph.** Use "In other words, ..." at most once per section to crystallize a point.
7. **Inline enumerations** for short lists: "three reasons: 1) ..., 2) ..., 3) ...".
8. **Bold** one thesis sentence per section, nothing else.
9. **Name people and teams** instead of "we/they/the business."
10. Plain words. Define any coined term once.

## Structure

### 1. Header block (table or labeled lines)
- **Decision needed:** the exact question, restated in one sentence so asker and decider agree.
- **Decider (D):** one named person. **Recommender (R):** author. **Input (I)** and **Agree/veto (A)** if any. Make explicit that the right to give input/debate is not the right to decide.
- **Whose goals this serves:** the outcome owner(s).
- **Mode:** Decide / Discuss / Inform.
- **Decide by:** date, and what happens by default if no decision.

### 2. Nutshell (BLUF) - 3 to 5 sentences
The recommendation, its confidence, its time window, the single biggest reason, and the biggest risk. A reader who stops here can act.

### 3. The situation (narrative prose)
What is happening, in numbers, and why now. One short paragraph per above-the-line point. If a reusable mechanism explains the situation, include a short "How the machine works" paragraph: the atomic unit, the cause-effect chain, the one core mechanic.

### 4. Options as bets
For each option (2-4, always include "do nothing / defer"):
- What it is, in one sentence.
- Probability it achieves the goal, payoff if it does, cost/downside if it doesn't. Write the expected-value logic in a sentence. No option without a probability; if you can't estimate, give a range and say what would narrow it.
- First-order consequences, then second- and third-order consequences.
A compact table comparing options is fine *after* the prose.

### 5. Value of more information
Say what further info would change the call, what it costs to get, and the cost of waiting. Recommend decide-now or decide-after-X.

### 6. Recommendation
Restate the choice. "In other words, ..." once. State what would make you reverse it.

### 7. Disagreement log (believability-weighted)
| Who | Position | Relevant track record (domain-specific: has done this ≥3 times and can explain cause-effect?) | Their strongest argument |
Record dissent faithfully; don't strawman. Believability is per domain, never a global score.

### 8. Closure
- **Decision** (filled after the meeting).
- **Actions:** owner, task, due date.
- **What we're watching:** 2-5 named indicators with thresholds that would trigger revisiting.
- **Note-taker** (for meetings).

### Appendix (optional)
Data, cases, standing principles that break ties. Tell the reader explicitly they can skip it.

## Meeting-brief variant
When asked for a decision-meeting pre-read or agenda: use the header block, the exact question, the nutshell, roles (who is teacher / student / peer on this topic, by believability), a "parking lot" for topic slip, and the closure block. Keep it to one page.

## Self-check before returning
- Can the decider act from the header + nutshell alone?
- Does every option carry a probability and a downside?
- Is every judgment in first person with a confidence? Is every fact stated plainly?
- Did any bullet carry a "because"? Move it into prose.
- Is there more than one bold sentence in any section?
- Do actions have owners and dates? Are watched indicators named with thresholds?

## Do not
- Attribute rules to Dalio that aren't documented (e.g., "1-2-3 go").
- Use the disagreement log to rate or rank people publicly.
- Pad with slogans. If a sentence could hang on an office wall, cut it or make it specific.
