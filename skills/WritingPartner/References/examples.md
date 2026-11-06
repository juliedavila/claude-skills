# Before and after

These examples are illustrative: they were written for this skill, not taken from real documents. Each shows one main repair and why it works. Replace them with examples from the author's own documents as those accumulate; real examples teach the style better than invented ones.

## 1. Shorthand written to itself, repaired for a peer

**Before** (a status note to a peer VP who wasn't in the working sessions):

> Quick update: moved SCA gate pre-merge per Option B → FP rate roughly flat w/ shim. Tier-2 rollout next, pending the exceptions flow. LMK if concerns.

**After:**

> We've moved dependency scanning from the nightly build into the pre-merge check for the payments services, which is the middle of the three options we discussed in March. False positives stayed about the same [Q1: what rate did you measure before and after?], because we kept the filter that skips packages already approved as safe. Next we'll extend it to your platform services [Q2: target date?], once teams have a way to request an exception for a flagged package. If that timing collides with anything on your side, tell me this week.

**Why:** every label the reader couldn't resolve ("SCA gate", "Option B", "the shim", "Tier-2", "the exceptions flow") is replaced by what it is. The arrow becomes "because". The missing facts become queries instead of guesses. It's longer, and it should be, because the original only made sense to the person who wrote it.

## 2. Corporate announcement, made human

**Before:**

> We're excited to announce that, as part of our ongoing commitment to fostering a culture of security excellence, the Product Security organization will be leveraging a new streamlined intake process to facilitate more seamless engagement with partner teams, ensuring that requests are triaged efficiently and effectively.

**After:**

> Starting Monday, you can request a security review through one form instead of three. Fill it in at [link] and you'll hear back within two business days with a named reviewer. If your launch is less than two weeks out, say so on the form and we'll prioritize it.

**Why:** the reader cares about what changes for them and when, so that comes first. The style-word cluster (fostering, leveraging, streamlined, facilitate, seamless) and the trailing "ensuring..." clause are replaced by concrete facts: one form, two days, a named reviewer. "We're excited" is gone; the good news carries its own enthusiasm.

## 3. Padded executive update, answer first

**Before:**

> I wanted to take a moment to provide an update on our vulnerability management efforts. Over the past quarter, the team has made significant progress across a number of key areas. It's important to note that while challenges remain, we have been able to drive meaningful improvements in remediation timelines. Moving forward, we will continue to prioritize this critical work. Overall, the program is in a strong position.

**After:**

> Critical vulnerabilities are now fixed in a median of 11 days, down from 26 last quarter [Q1: confirm both numbers], so we're inside the 15-day target for the first time. The remaining gap is legacy mainframe services, which account for 40% of overdue items [Q2: confirm]. I'm asking for one decision: approve two contract engineers for Q1 to clear that backlog. Without them I expect we'll miss the target there through mid-year (about 70% likely).

**Why:** the original has no fact, no ask and no point a reader could repeat. Every generic claim ("significant progress", "meaningful improvements", "strong position") becomes a number or a query for one. The ask is explicit, and the probability has a number. The summary closer is gone.

## 4. Bad news, plain and formal

**Before:**

> Due to unforeseen complexities, the timeline for the access review remediation has been adjusted. Learnings from this effort will be incorporated going forward to optimize future execution.

**After:**

> We will miss the 31 March deadline for closing the access-review findings. We now expect to close them by 30 April. The delay is ours: we underestimated how many service accounts had no named owner, and finding owners for 340 accounts is taking longer than planned. Priya Shah's team owns the fix, and I'll send you a progress update every Friday until it's done. For the audit file, the interim control is the weekly report of service accounts with no owner, which has been in place since 1 March.

**Why:** bad news goes first, in plain words, in the active voice ("we will miss", "the delay is ours") instead of hiding responsibility ("has been adjusted"). The euphemisms go. The register is formal, because this is audit-facing: complete sentences, no softening jokes. The owner and the next update date are named.

## 5. A peer ask, shortened without losing context

**Before** (a 160-word email that opens with two paragraphs of background, buries the ask in the fourth paragraph, and makes three separate requests).

**After:**

> Subject: Can your team pilot pre-merge scanning on two services in January?
>
> Hi Sam, I'd like two of your services to be the first outside payments to use pre-merge dependency scanning, starting the week of 12 January. In payments it cut critical findings reaching production by 40% with no measurable slowdown to merges. Your team would spend about four hours on setup, and mine would handle tuning. Could you let me know by 19 December, and tell me which two services you'd suggest? Happy to walk your leads through it first if that helps.

**Why:** one ask, in the subject line and the first sentence. The background shrinks to the one fact that makes the case (40%, no slowdown) and the cost to the reader (four hours). The other two requests can go in follow-ups once this one lands. The register is conversational because it's a peer relationship. The context the reader needs, what it is, what it costs them, by when, is all still there.
