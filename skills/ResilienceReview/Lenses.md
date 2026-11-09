# The Nine Lenses

Each lens is a question to put to the proposal, the signs that it fails the question, the signs that it passes, the thinkers whose mechanisms back the lens, and where the lens itself stops applying. Not every lens applies to every proposal. An architecture change needs lenses 1, 2, 5 and 6. A vulnerability or defect management program needs 3, 8 and 9. A proposal to automate an operational decision needs 1, 7 and 8. A README or release index for a design package has no running system behind it; review the claims it makes, and lenses 3, 7 and 9 usually carry it. Each lens lists more questions than any one artifact can answer; ask the ones the artifact can, and say which lenses you skipped and why.

Thinker pages marked **(TD)** have a full editorial reading, including each thinker's own limits, at the Thinker Distillery: `https://juliedavila.github.io/thinker-distillation/thinkers/<slug>/`. Read the page when a finding leans on that thinker and you need the precise claim and web access is available. Without it, the summaries here are enough to cite the mechanism; do not quote a thinker beyond what this file says.

---

## 1. Hazards and control structure

**Question:** Does the proposal say what must never happen, and does every part of the system that can cause it have a controller with feedback good enough to prevent it?

**Ask:**
- What are the hazards, stated as system states, not as component failures? "Customer data readable by another tenant", not "the auth service crashes".
- For each hazard, who or what controls it, and how does that controller learn the current state? A controller acting on a stale or wrong model of the process is the classic path to an accident.
- Which control actions would be unsafe if not given, given wrongly, given too early or too late, or stopped too soon? Does the design prevent them or only detect them?
- Does the proposal add a new controller (automation, an agent, a central service) that acts on the system? What feedback does it get, and what happens when its model is wrong?
- Does it couple things that were independent, so that one failure now has a path to another?

**Smells:** a risk register made of component failures with no system-level hazards; "monitoring" as the only safety mechanism; automation that acts without reading back the result; safety constraints implied but never written; a new shared dependency or control plane that everything now routes through; "the operator will catch it" with no statement of how the operator would know.

**Strengths to name:** hazards written as states to avoid, each with a named constraint; control loops where every action has a feedback path; a design that removes a hazard rather than guarding it; failure domains that keep a fault local.

**Grounding:**
- Nancy Leveson **(TD)** `nancy-leveson`: STAMP and STPA. Accidents come from inadequate control of safety constraints, not only from component failures; analysis starts from hazards and the control structure, and asks which control actions would be unsafe. *Engineering a Safer World* (2011).
- Charles Perrow, *Normal Accidents* (1984): systems that are both interactively complex and tightly coupled produce accidents as a normal consequence of their design, because unexpected interactions propagate faster than people can understand them.
- Richard Cook **(TD)** `richard-cook`: the hazard is intrinsic to the system; defenses are what stand between normal operation and catastrophe, and catastrophe requires several of them to fail at once.

**Where this lens breaks:** A full STPA is heavy. For a small internal tool a hazard list and a sentence per constraint is proportionate; say so rather than demanding a control-structure diagram. Some coupling is deliberate and cheap to accept: a batch report that fails when the warehouse is down is fine if someone says so.

---

## 2. Failure modes, blast radius and coupling

**Question:** When a part of this fails, how far does the failure travel, and what stops it?

**Ask:**
- What fails together? Trace a single dependency outage through the design and list what else stops working.
- Where are the integration points, and does each one have a timeout, a bounded retry with backoff and jitter, and a circuit breaker or equivalent?
- Is there a degraded mode, defined in advance, for each important dependency being down? Who decides to enter it?
- Does the system keep running when its own control plane (deploy system, config service, feature-flag service, identity provider) is unavailable?
- Are capacities balanced? A fast producer and a slow consumer with an unbounded queue between them is a failure waiting for load.
- What is the failure mode of the safety mechanism itself? A circuit breaker that fails closed can be worse than none.

**Smells:** synchronous call chains with no timeouts; retries without backoff; a single control plane everything depends on at runtime; "highly available" with no named failure domains; a new shared library, database or queue that joins formerly independent services into one fate; unbounded result sets or queues; health checks that test the process, not the dependency.

**Strengths to name:** bulkheads (per-tenant, per-cell or per-shard isolation); explicit degraded modes; static stability (keeps serving when the control plane is down); load shedding with a stated priority order; fail-fast at the edge.

**Grounding:**
- Michael Nygard, *Release It!* (2007; 2nd ed. 2018): stability antipatterns (integration points, chain reactions, cascading failures, blocked threads, unbalanced capacities, slow responses, unbounded result sets) and the patterns that answer them (timeouts, circuit breaker, bulkheads, steady state, fail fast, handshaking, decoupling middleware).
- Richard Cook **(TD)**: change introduces new forms of failure; latent failures sit in the system until a combination exposes them; "going solid", where efficiency removes the slack that kept parts loosely coupled.
- Charles Perrow, *Normal Accidents*: tight coupling means a disturbance in one place reaches another before anyone can intervene.
- John Allspaw **(TD)** `john-allspaw`: dark debt, latent failure modes in the interactions between parts that no inspection of any single part can find.

**Where this lens breaks:** Isolation costs money and complexity. A ten-user internal tool does not need cells. Size the ask to the cost of the outage, and name the cost in the review so the authors can disagree with a number rather than a principle.

---

## 3. The defect lifecycle

**Question:** When this system has a defect, how does it get found, how fast does it get fixed, and does the fix remove the defect or the class it belongs to?

A defect here is anything the system does that it should not, or fails to do that it should: a bug, a vulnerability, a misconfiguration, a data error, a hazard left uncontrolled. Security defects are one class among others and belong in the same lifecycle. A proposal that adds a way to find defects without adding the capacity to fix them has added inventory, not quality.

**Ask:**
- Where do defects come from in this system (tests, scanners, incidents, customers, audits, pen tests), and does the proposal change any of those sources?
- What counts as a defect? Is there a proof condition, so that a finding is accepted only when it reproduces, and false positives are measured as waste rather than argued about?
- Who triages, how often, and how long does a defect wait between being found and being owned? Treat the backlog as a queue: what is its size, its age distribution and its arrival rate against its fix rate?
- How long does a fix take by defect class, from found to deployed? Is that measured, or only the severity label and its SLA?
- Does fixing capacity match finding capacity? If a new scanner, test suite or audit will find more than the teams can fix, what happens to the remainder?
- When a defect is fixed, what prevents the class from recurring: a lint rule, a derived check in the pipeline, a paved road that makes the mistake impossible, a regression test kept forever? Or only this instance?
- Is there a stop-the-line condition: a defect class or escape that halts other work until fixed? Is pulling it cheap enough that people will?
- For each defect that reached production, which stage should have caught it (design, build, pipeline, pre-production, production monitoring)? Does the proposal assign an escape point, so the right layer gets strengthened?
- Does it measure escapes per change, by defect class, against a fixed comparison, or does it count defects in a way that moves with how hard anyone is looking?

The queue questions need an operating system to point at; a design or a README can only answer the fix-capacity and class-prevention ones, and that is enough.

**Smells:** a new finder (scanner, audit, red team) with no fix capacity budgeted; backlog size as a goal ("zero criticals by Q3") with no change to arrival or fix rate; defect counts as team targets; a separate security backlog with no owner on the product side; severity SLAs with no measurement of actual time to fix; fixes that patch the instance with no class prevention; triage as a weekly meeting queue; no definition of what closes a defect; sigma levels or defects-per-million for a domain with no fixed specification.

**Strengths to name:** a proof condition for findings; fixing capacity sized before finding capacity is added; class-level prevention (paved roads, pipeline checks, kept regressions); an escape point assigned to each production defect; a cheap, honored stop-the-line; escape rate per change by class against a fixed comparison; false-positive rate tracked as waste.

**Grounding:**
- W. Edwards Deming, *Out of the Crisis* (1986), point 3: cease dependence on mass inspection to achieve quality; build quality into the process in the first place. Inspection finds defects after they are made and after their cost is sunk.
- Shigeo Shingo, *Zero Quality Control* (1986): source inspection, which checks the conditions that produce a defect rather than the product, and poka-yoke, mistake-proofing that makes the error impossible or immediately visible.
- Taiichi Ohno, *Toyota Production System* (1988): jidoka, stopping the line when a defect appears so it cannot flow downstream, and the andon cord that makes stopping cheap and normal.
- Don Reinertsen, *The Principles of Product Development Flow* (2009): queues are inventory; a defect backlog is a queue, with the same economics of utilization, arrival rate and cost of delay as any other.
- Capers Jones, *Applied Software Measurement* (1991; 3rd ed. 2008): defect removal efficiency, the share of defects found before release, as the measure of how well upstream stages catch what they should.
- Jez Humble **(TD)** `jez-humble` and Dave Farley **(TD)** `dave-farley`: build quality in; the deployment pipeline as the place where checks run automatically on every change, so a class of defect, once known, never ships again.
- This skill's position, from the paved-road and security-validation work of its author: in security and in any domain without a fixed specification, where the adversary or the requirement adapts, zero-defect and sigma-level targets are fiction. The honest measure is escapes per change, by defect class, against a fixed comparison, and the critical capability is the speed of fixing real defects without stalling the business, because finding has always outrun fixing.

**Where this lens breaks:** Some defects are correctly accepted as risk, with an owner and a date; the lens checks that the acceptance is explicit, not that it never happens. Stop-the-line is only right when the cost of a defect flowing downstream exceeds the cost of stopping; for a low-stakes internal tool, a ticket is fine. A proposal at the earliest stage cannot baseline an escape rate; ask for the cheapest honest proxy and a date.

---

## 4. Drift toward the boundary

**Question:** After this lands, what pressures act on the people running it, and what keeps them from drifting past the margin without noticing?

**Ask:**
- What gets skipped when the team is behind? The proposal describes the intended procedure; what is the shortest path that still appears to work?
- Are the safety margins stated as numbers (capacity headroom, on-call load, time to review a change, error budget), or implied?
- If the proposal produces an efficiency gain, is any of it kept as slack, or is all of it spent on more throughput?
- What would tell someone the system is operating closer to its limit than last quarter? Is that measured?
- Is there a review that asks whether today's normal would have been yesterday's exception?

**Smells:** efficiency gains captured fully as capacity; procedures that assume unlimited time; exceptions approved case by case with no count kept; alert thresholds relaxed to cut noise with no analysis of what was lost; a target that rewards skipping a step; "temporary" workarounds with no end date; headroom not stated anywhere.

**Strengths to name:** margins written as numbers with owners; leading indicators of drift (exception rate, skipped-step rate, muted-alert count, on-call hours); slack deliberately retained; a scheduled look at whether accepted deviations have accumulated.

**Grounding:**
- Jens Rasmussen **(TD)** `jens-rasmussen`: under pressure for less effort and lower cost, work migrates toward the boundary of acceptable performance; accidents happen where that boundary is invisible until crossed. "Risk management in a dynamic society" (1997).
- Diane Vaughan, *The Challenger Launch Decision* (1996): normalization of deviance, where each accepted anomaly becomes the baseline for judging the next, until the abnormal is routine.
- Erik Hollnagel **(TD)** `erik-hollnagel`: the efficiency-thoroughness trade-off; people adjust constantly between the two, so a procedure that assumes full thoroughness describes work as imagined, not as done.
- David Woods **(TD)** `david-woods`: the Law of Stretched Systems, where every improvement in capacity is consumed by running closer to the edge.
- Sidney Dekker **(TD)** `sidney-dekker`: *Drift into Failure* (2011), where failure emerges from locally rational decisions under resource pressure, not from a broken part.

**Where this lens breaks:** Some drift is adaptation that works, and people routing around a bad procedure are often right. The lens asks that the margin be visible and the drift be noticed, not that practice be frozen to the written procedure.

---

## 5. Detection and sensemaking

**Question:** When something goes wrong or starts to, how fast do the people responsible know, and can they build an accurate picture of what is happening?

**Ask:**
- What is the time to detect for the failures the proposal cares about, and how does it compare with the time at which harm becomes irreversible?
- Can an operator ask a question nobody anticipated, without shipping new instrumentation?
- Do alerts say what is wrong for the user, or only that a component is unhealthy? Who owns each alert?
- Are near misses captured anywhere, or only failures that caused harm?
- Does the proposal reduce the diversity of signals or the number of people who understand the system? When one person holds the only accurate picture, the organization loses it the week they are away.
- When the picture is unclear, who has the authority to act on an incomplete one?

**Smells:** dashboards defined in advance as the whole observability plan; alerts on component health owned by no one; near misses not recorded; one person who understands how it works; a single notification channel at 2 a.m.; telemetry sampled or aggregated in a way that loses the rare case; "we will know because customers will tell us".

**Strengths to name:** wide, structured, high-cardinality events; alerts tied to user-facing objectives; a near-miss channel that is used; shared mental models built through exercises; explicit authority to act under uncertainty.

**Grounding:**
- Charity Majors **(TD)** `charity-majors`: observability as the ability to ask new questions of a system from the outside without changing it; arbitrarily wide structured events.
- Karl Weick and Kathleen Sutcliffe, *Managing the Unexpected* (2001): the five habits of high-reliability organizations, including preoccupation with failure (treating near misses as data), reluctance to simplify and sensitivity to operations.
- Richard Cook **(TD)**: above and below the line of representation; operators never see the system, only representations of it, so what the representations omit is where surprises live.
- David Woods **(TD)**: anomaly response, where the hard part is recognizing that an anomaly is unfolding and revising the picture as evidence arrives.
- The Aviation Safety Reporting System (NASA, 1976): a confidential, non-punitive near-miss reporting channel as the main source of safety learning in a mature industry.

**Where this lens breaks:** More telemetry is not automatically better; alert fatigue is a hazard in its own right. For a small system, a few good alerts and a person who knows the system are enough. Ask for the signals that would change a decision, not for completeness.

---

## 6. Recovery and adaptive capacity

**Question:** When this fails in a way nobody designed for, can the system degrade gracefully and can the people around it adapt, and has anyone rehearsed it?

**Ask:**
- How long does recovery take, by whom, and has it been done recently for real or in an exercise?
- Are rollbacks, restores and failovers tested on a schedule, or assumed?
- Is there a degraded mode the system can run in, and is it exercised, so it works when needed?
- When the runbook does not fit the situation, what do people do? Do they have the authority, the information and the spare attention to improvise?
- Is adaptive capacity being spent? Heroics in the last few incidents are a sign the margin is gone.
- If the proposal removes people, spare capacity or options in the name of efficiency, what replaces the adaptability they provided?

**Smells:** recovery defined as "page the on-call"; backups never restored; a disaster-recovery plan never exercised; automation that must be perfect because there is no manual path; runbooks as the only answer to surprise; time to restore not measured; heroics praised rather than investigated; an error budget with no policy attached to exhausting it.

**Strengths to name:** game days or fault-injection exercises with findings fixed; restores tested on a schedule; degraded modes that are run regularly; authority to act held close to the work; an error-budget policy with consequences; recovery time measured and trending.

**Grounding:**
- David Woods **(TD)**: four concepts of resilience (rebound, robustness, graceful extensibility, sustained adaptability); graceful extensibility as the ability to stretch when surprise exceeds the design envelope; brittleness as its opposite. "Four concepts for resilience" (2015).
- John Allspaw **(TD)**: fault injection in production as a way to learn how the system and its people actually respond; "Fault Injection in Production" (ACM Queue, 2012).
- Casey Rosenthal and Nora Jones, *Chaos Engineering* (2020): the practice of running controlled experiments on a system in production to build confidence in its ability to withstand turbulence, from the Netflix Chaos Monkey (2011) onward.
- Kelly Shortridge **(TD)** `kelly-shortridge`: security chaos engineering as resilience engineering applied to security; the system's capacity to recover matters more than the fiction of preventing every compromise.
- Betsy Beyer et al., *Site Reliability Engineering* (2016): error budgets as the agreed level of unreliability, with a policy that changes behavior when the budget runs out; time to restore as a first-class measure.
- Erik Hollnagel **(TD)**: Safety-II, the ability to succeed under varying conditions, so resilience is built by studying how things usually go right.

**Where this lens breaks:** Experiments in production need guardrails and a blast radius the business has agreed to; a review should not demand chaos experiments in a system with no way to contain them. In a small organization, adaptive capacity is mostly people who know the system; saying that out loud is a valid answer, as long as the bus factor is acknowledged.

---

## 7. Humans and automation

**Question:** Where the proposal automates something, does it give the humans who remain a job they can do well, or does it leave them to catch what the automation misses?

This lens applies with full force to agentic systems. An agent acting in production is a controller in the lens 1 sense and an automation in this one.

**Ask:**
- When the automation fails or meets a case it was not built for, what does the human do, and how would they know it has happened?
- Does the design keep the human skilled enough to take over? A person who only watches loses the skill the takeover needs.
- Is the automation's state and reasoning visible? Can an operator tell what mode it is in and what it is about to do?
- Who can override it, how fast, and is the override exercised?
- Does the proposal rely on sustained human vigilance over a system that is right almost all the time? People cannot do that.
- Does the automation hide slow degradation by compensating for it until it cannot?

**Smells:** "a human will monitor the agent" as the safety mechanism; no manual mode, or a manual mode never used; silent mode changes; removing the people who understood the system once the automation is in; alerts that assume the human knows what the automation was doing; automation designed by people who will never operate it.

**Strengths to name:** automation decisions logged and inspectable; a manual path exercised on a schedule; a fast override with a clear owner; operators in the design team; automation that calls for help early and specifically rather than failing late.

**Grounding:**
- Lisanne Bainbridge, "Ironies of Automation" (1983): automation removes the easy parts of a task and leaves the human the hard parts, while eroding the skills and situational awareness needed to do them; monitoring for rare failure is a task humans do badly.
- Sidney Dekker **(TD)**: work-as-imagined versus work-as-done; the procedure describes the intended interaction, and the gap is where the automation surprises people. *The Field Guide to Understanding 'Human Error'* (3rd ed. 2014).
- Nadine Sarter, David Woods **(TD)** and Charles Billings, "Automation Surprises" (1997): mode confusion and the strong, silent automation that acts without telling the crew.
- Erik Hollnagel **(TD)** and David Woods **(TD)**, *Joint Cognitive Systems* (2005): the human and the automation together form the unit that does cognitive work; design the joint system, not the two halves.
- Nancy Leveson **(TD)**: automating a decision that used to have a human in the loop changes the control structure and needs its own hazard analysis.

**Where this lens breaks:** Some tasks are better fully automated, with no human in the loop, and some human steps are the hazard. The lens is against a bad division of labor, not against automation. Where the automation is better than the human at the whole task, the review should say so and ask about the override path and nothing more.

---

## 8. Learning and just culture

**Question:** When this system fails or nearly fails, will the organization learn something that changes the system, and can people tell the truth about what happened?

This is where the defect lifecycle closes. A production defect or incident that produces only a fixed instance and an action item has not been learned from.

**Ask:**
- Does the incident or defect review produce changes to the system, or action items for people? Are action items tracked to closure and then checked for effect?
- Is blame structurally possible: names in reports, discipline tied to findings, incident counts used as performance measures? Any of these suppresses reporting.
- Are near misses reviewed, or only failures with consequences?
- Does the organization study how normal work succeeds, so it knows what it is protecting?
- Does what is learned reach the teams who did not have the incident?
- Does the review distinguish honest error and drift from reckless disregard, so that accountability exists without blame?

**Smells:** "root cause: human error"; action items that are retraining and reminders; postmortems only for the highest severity; action items closed with no evidence they worked; incident counts as a target; reports that name individuals; lessons that stay inside the team.

**Strengths to name:** a written blameless process; action items with evidence of effect; near-miss reviews; cross-team sharing of incident learning; Safety-II reviews of surprising successes; an explicit line between error and recklessness, agreed in advance.

**Grounding:**
- Sidney Dekker **(TD)**: *Just Culture* (2007; 3rd ed. 2016), where accountability and learning are compatible only when the organization decides in advance how it will draw the line and who draws it.
- John Allspaw **(TD)**: the blameless postmortem (Etsy, 2012); the review of an incident is the organization's main chance to learn how its systems actually behave, and blame is what makes people stop telling it.
- James Reason **(TD)** `james-reason`: *Managing the Risks of Organizational Accidents* (1997), latent conditions and the reporting culture that a just culture makes possible; added defensive layers only help when their holes are independent.
- Erik Hollnagel **(TD)**: Safety-II, learning from what goes right as well as what goes wrong, because the same adjustments produce both.
- David Woods **(TD)**: the incident review is where adaptive capacity is built; its value is in the revised understanding, not the action item list.

**Where this lens breaks:** Just culture is not the absence of accountability; reckless behavior and sabotage exist. The lens checks that the process can tell the difference and that the difference is decided by a stated rule, not by whoever is angriest.

---

## 9. Evidence and assurance

**Question:** How would anyone know this system is as safe and as resilient as the proposal claims, and does the evidence come from the running system?

**Ask:**
- What is the claim, what is the argument, and what evidence supports each step? A claim with no argument is a hope; an argument with no evidence is a plan.
- Does the evidence come from the system in operation (incidents, escapes, recovery times, exercise results) or from documents about it (policies, certificates, audit reports)?
- Are measures of stability paired with measures of speed? Safety bought by freezing change is not safety for long.
- Is there a baseline, and a comparison that stays fixed while the system changes?
- Which measures can be gamed, and which suppress the reporting they depend on? Incident counts and defect counts are the two easiest.
- What result would falsify the claim that this is safer?
- What fixes the identity of the artifact the evidence is about? A digest pinned by the consumer, a signed tag, a reproducible build. A comparison is only fixed if the thing compared cannot move, and a tag name can.

**Smells:** compliance presented as safety; "we passed the audit" as evidence; a trust chain that ends at a name that can be moved; a certificate standing in for an argument; incident counts as the only measure; evidence from staging only; no baseline; metrics turned into targets for teams; a safety case written to satisfy a reviewer rather than to find a flaw.

**Strengths to name:** claim, argument and evidence laid out so a reader can attack any step; measures from production; escape rate by defect class against a fixed comparison; a rising near-miss report rate read as improved reporting, not worse safety; a stated falsification condition; speed and stability reported together.

**Grounding:**
- Tim Kelly and Rob Weaver, "The Goal Structuring Notation" (2004), and Peter Bishop and Robin Bloomfield, "A Methodology for Safety Case Development" (1998): a safety case as a structured argument, supported by evidence, that a system is acceptably safe for a given use.
- Nancy Leveson **(TD)**: the critique of safety cases, in "The Use of Safety Cases in Certification and Regulation" (2011): an argument built to show safety invites confirmation bias; the discipline is to try to show the system is unsafe and fail.
- Erik Hollnagel **(TD)**: Safety-I measures the absence of bad outcomes, which says little when bad outcomes are rare; Safety-II asks for measures of how often things go right under variation.
- Nicole Forsgren **(TD)** `nicole-forsgren`: change failure rate and time to restore as stability measures that move with throughput in well-run systems; measures diagnose a system and should not become targets.
- Capers Jones: defect removal efficiency as a measure that can be baselined and compared across releases.

**Where this lens breaks:** Early proposals cannot baseline, and a safety case can become paperwork, which is Leveson's point. Ask for the argument and the one or two measures that would change a decision, not for a document. Where a regulator mandates a particular assurance artifact, the review checks that it argues honestly, not whether it should exist.
