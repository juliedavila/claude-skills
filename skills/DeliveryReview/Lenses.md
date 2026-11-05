# The Nine Lenses

Each lens is a question to put to the proposal, the signs that it fails the question, the signs that it passes, the thinkers whose mechanisms back the lens, and where the lens itself stops applying. Not every lens applies to every proposal. A release-process change needs lenses 1 through 4 and 8. A team restructure needs 6, 7 and 9. Apply the ones that bite and say which ones you skipped and why.

Thinker pages marked **(TD)** have a full editorial reading, including each thinker's own limits, at the Thinker Distillery: `https://juliedavila.github.io/thinker-distillation/thinkers/<slug>/`. Read the page when a finding leans on that thinker and you need the precise claim and web access is available. Without it, the summaries here are enough to cite the mechanism; do not quote a thinker beyond what this file says.

---

## 1. Flow and batch size

**Question:** Does the proposal make work move through the system in smaller batches with shorter waits, or does it add queues, batching or handoffs?

**Ask:**
- Where does work wait under this proposal, and for whom? Count the handoffs from commit to customer.
- Does it batch anything that used to flow (releases, approvals, environment refreshes, merges, planning)?
- Does it assume people or shared resources run near full utilization? Queues grow sharply as utilization nears 100%, so a plan with no slack is a plan with long waits.
- Does it say what delay costs? If two items compete for the same capacity, how does the proposal decide which goes first?
- Does it limit work in progress, or only add more work?

**Smells:** release trains or fixed windows introduced to "reduce risk"; a shared team or environment everyone must pass through; "we will batch these into a quarterly …"; plans that schedule specialists at 100%; prioritization by loudest stakeholder or by HiPPO with no cost-of-delay reasoning; long-lived branches.

**Strengths to name:** smaller increments than today; a WIP limit; an explicit cost-of-delay or WSJF ordering; removing a handoff; making a queue visible.

**Grounding:**
- Don Reinertsen, *The Principles of Product Development Flow* (2009): queues are the hidden inventory of product development; high utilization inflates them; optimal batch size is a U-curve set by holding cost against transaction cost; "if you only quantify one thing, quantify the cost of delay". Cost of delay is older than this book: it runs through Smith and Reinertsen, *Developing Products in Half the Time* (1991).
- Mary and Tom Poppendieck, *Implementing Lean Software Development* (2006): waste in software, including partially done work, extra features and handoffs.
- Gene Kim **(TD)** `gene-kim`: the First Way, fast flow of the whole system ahead of any one silo.
- Jez Humble **(TD)** `jez-humble`: "work in small batches" is one of the five continuous delivery principles.

**Where this lens breaks:** Small batches only pay when the transaction cost per batch is low. If deployment is manual and takes a day, forcing daily releases raises cost before it lowers it; the honest suggestion is to cut the transaction cost first (automation), then the batch. Some work is genuinely indivisible: a database engine swap or a regulatory filing. Say so rather than demanding increments that would be fake.

---

## 2. Feedback and learning

**Question:** Does the proposal shorten the time between doing something and learning whether it worked, for developers, for the product and for the organization?

**Ask:**
- How long from a developer's change to a trustworthy signal that it works? Does the proposal shorten or lengthen that?
- What is the proposal itself uncertain about, and how will it find out cheaply before committing? Is there a pilot, a reversible first step, an exit criterion?
- What would make the authors stop or change course? Is that written down?
- Does it learn from production (usage, incidents) or only from plans?

**Smells:** a big-bang rollout with no pilot; success criteria that can only be judged at the end; feedback that arrives quarterly; "phase 1" that is most of the cost; no stated assumptions; a plan that treats the design as known when it is a guess.

**Strengths to name:** a pilot with a named team and a decision date; explicit assumptions with tests; a reversible first step; faster local test or build loops.

**Grounding:**
- Dave Farley **(TD)** `dave-farley`: optimize for learning (iteration, feedback, incrementalism, experiment) and for managing complexity; software engineering as an empirical discipline.
- Daniel Terhorst-North **(TD)** `dan-north`: Deliberate Discovery, where ignorance is the constraint on delivery, so spend effort early finding out what you do not know.
- Kent Beck **(TD)** `kent-beck`: 3X (Explore, Expand, Extract), where the right practice depends on the phase; exploring needs cheap experiments, not heavy process.
- Gene Kim **(TD)**: the Second Way (shorten and amplify feedback) and the Third Way (continual experimentation and learning).
- Nicole Forsgren **(TD)** `nicole-forsgren`: DevEx names feedback loops, cognitive load and flow state as the measurable properties of developer experience.

**Where this lens breaks:** Some decisions are one-way doors (data deletion, public API commitments, contracts, safety cases). For those, more upfront analysis is the right call. The review should check that the proposal knows which of its decisions are one-way and spends its analysis there, not demand experiments for everything.

---

## 3. The path to production

**Question:** Does the proposal keep or strengthen a single, automated, repeatable path from commit to production, where any good build can ship on demand and a release can be undone?

**Ask:**
- Is there one path to production, or does the proposal add a side door, a manual step or a second pipeline?
- Does the same artifact move through every stage, or is it rebuilt per environment?
- Are deploy and release separate decisions (feature flags, dark launches, progressive rollout)?
- What is the rollback or roll-forward story, and how long does it take?
- Does trunk stay releasable? How long do branches live?
- What happens to work when the pipeline is red?
- **Tests.** How long does the commit stage take to give a developer a trustworthy answer? Is most of the checking in fast unit and component tests, with a thin layer of slow end-to-end tests? How are flaky tests handled: quarantined and fixed, or rerun until green? Are acceptance tests written in the problem's own terms, so they survive changes to the UI and the implementation?
- **Database and schema changes.** Can each schema change ship without downtime and without a coordinated release of every consumer? Is it split into expand (add the new shape alongside the old), migrate, then contract (remove the old shape once nothing uses it)? Does the migration run in the pipeline like any other change?
- **Environments.** Are environments built from code (infrastructure as code), so staging and production differ only in declared configuration? Can a fresh environment be created on demand?

**Smells:** environment-specific builds; manual sign-off steps inside the pipeline; a staging environment treated as proof of production readiness; long-lived release branches; "hardening sprints"; no rollback plan; a migration that cannot be run backwards with no flag to hide it; schema changes that require every consumer to deploy at once; a long end-to-end suite as the main safety net; flaky tests that teams rerun until they pass; environments configured by hand, so staging drifts from production.

**Strengths to name:** pipeline as the only route to deploy; build once, promote everywhere; flags or canaries; automated rollback; trunk-based development with short-lived branches; a commit stage that answers in minutes; expand-and-contract schema changes; environments built from version-controlled code.

**Grounding:**
- Jez Humble **(TD)** and Dave Farley **(TD)**: the deployment pipeline (a release candidate carried through gates, the same binary in every environment), continuous delivery, and release decoupled from deploy. *Continuous Delivery* (2010).
- Martin Fowler **(TD)** `martin-fowler`: continuous integration, integrating to mainline at least daily, verified by an automated build.
- MinimumCD (minimumcd.org): a community checklist of minimum continuous delivery practices, including trunk-based development, daily integration, a pipeline that is the only way to deploy, stopping feature work when the pipeline is red, and on-demand rollback.
- Charity Majors **(TD)** `charity-majors`: staging cannot reproduce production, so build the guardrails that make testing against real traffic safe.
- Dave Farley **(TD)**: four-layer acceptance tests, written as specifications in the problem's terms, expressed through a domain-specific language and carried out by drivers that talk to the system, so the tests outlive changes to the interface.
- The test pyramid: many fast, low-level tests and few slow end-to-end ones, from Mike Cohn, *Succeeding with Agile* (2009), and Fowler's "TestPyramid" bliki entry. Fowler's "Eradicating Non-Determinism in Tests" (2011) sets out why a flaky test is worse than no test: it teaches people to ignore red.
- Expand and contract: Scott Ambler and Pramod Sadalage, *Refactoring Databases* (2006), on evolving a schema in small, reversible steps with a transition period; Danilo Sato's "ParallelChange" (2014) on Fowler's site names the expand, migrate, contract sequence.
- Kief Morris, *Infrastructure as Code* (2016): environments defined in version control, rebuilt rather than patched, so they stay consistent.

**Where this lens breaks:** Some targets cannot take continuous deployment: firmware, mobile app stores, on-premise customer installs, regulated releases with mandated review. Continuous delivery (always releasable) still applies even when continuous deployment does not. Review against that, not against "deploy on every commit". Expand and contract costs extra releases and a period of carrying two schemas; for a small internal database with one consumer, a short maintenance window can be the cheaper honest answer.

---

## 4. Change control and governance

**Question:** Where the proposal adds control (approvals, gates, reviews, policies), does the control actually reduce risk, and is it the cheapest way to get that reduction?

**Ask:**
- What failure is each gate meant to catch? Is there evidence it catches it?
- Who approves, and how close are they to the change? An approver far from the code adds wait without adding knowledge.
- Can the control be automated into the pipeline (policy as code, required checks) instead of a meeting or ticket?
- What is the exception process, and how often will it fire? Many exceptions mean the policy is wrong.
- Does the control sit high on the hierarchy (eliminate the hazard by design) or low (rely on people being careful)?

**Smells:** a change advisory board or new approval tier for routine changes; manual evidence gathering for audits; separation of duties implemented as a handoff instead of as peer review plus pipeline evidence; security or compliance as a phase at the end; a policy whose exception process is already sketched as a large workflow.

**Strengths to name:** controls encoded in the pipeline with audit evidence produced automatically; peer review as the approval; risk-tiered gates where low-risk changes flow freely; a design that removes a hazard instead of guarding it.

**Grounding:**
- Nicole Forsgren, Jez Humble and Gene Kim, *Accelerate* (2018): approval by an external body correlated negatively with lead time, deployment frequency and time to restore, and showed no correlation with change fail rate. The authors recommend lightweight peer review plus a deployment pipeline. The finding is correlational; present it as such.
- Kelly Shortridge **(TD)** `kelly-shortridge`: Security Obstructionism, practices whose outcome is to impede progress for security's speculative sake; the Ice Cream Cone hierarchy, where elimination and substitution by design beat procedures and warnings.
- Will Larson **(TD)** `will-larson`: exception debt, what accumulates when an organization spends its time granting exceptions to its own policies.
- James Reason **(TD)** `james-reason`: the Swiss cheese model; added layers help only when their holes are independent. A second approval by people who look at the same summary adds a slice with the same holes.

**Where this lens breaks:** Some controls are mandated (SOX, PCI DSS, FDA, FedRAMP and the like). Do not suggest removing a mandated control. Suggest meeting it more cheaply: automated evidence, pre-approved standard changes, controls in the pipeline. Separation of duties is often satisfiable by peer review plus an immutable audit trail; say "check with your auditors" rather than asserting it.

---

## 5. Changeability and design

**Question:** Will the system be easier or harder to change after this proposal lands?

**Ask:**
- What does the proposal couple that was independent before (services, teams, schemas, release schedules)?
- Is the complexity it adds essential to the problem, or brought in by the chosen tools?
- Does it break existing consumers, or grow alongside them? Is there a migration path that keeps the old way running until the new one is proven?
- Is it a rewrite? If so, why not an incremental replacement?
- Does it carry a single coherent design, or a committee's sum of everyone's asks?

**Smells:** big-bang rewrites; a shared library or schema every team must upgrade in lockstep; a "framework" with no second user; a second system carrying every feature the first left out; breaking API changes with a flag day; "we'll clean it up later" with no slot to do it.

**Strengths to name:** strangler-fig migration; additive interface changes; clear module boundaries; a tidy-first step that makes the main change cheap; an explicit statement of what the proposal will not do.

**Grounding:**
- Kent Beck **(TD)**: Constantine's Equivalence, the cost of software is roughly the cost of changing it; "make the change easy, then make the easy change"; tidying.
- Rich Hickey **(TD)** `rich-hickey`: simple versus easy; complecting, which entwines concerns that could stay independent; accretion versus breakage, where interfaces should grow, not break.
- Fred Brooks **(TD)** `fred-brooks`: essential versus accidental complexity; conceptual integrity; the second-system effect.
- Martin Fowler **(TD)**: strangler fig application; design stamina hypothesis (internal quality pays back within weeks).
- Ward Cunningham **(TD)** `ward-cunningham`: technical debt as the gap between the code and what the team now understands, paid down by rewriting toward the new understanding.

**Where this lens breaks:** Sometimes a rewrite is right (the platform is end-of-life, the language is unsupported, the old system cannot be run safely). And simplicity can be a cover for under-building something that genuinely has hard requirements. Judge against the proposal's stated problem, not against an abstract taste for small.

---

## 6. Teams, coordination and cognitive load

**Question:** Does the proposal reduce the number of people and teams who must agree for a change to ship, and keep each team's load within what it can hold?

**Ask:**
- How many teams must coordinate for a typical change after this lands? Before?
- Does the team structure match the architecture the proposal wants? Conway's law runs both ways.
- What new knowledge does every team now need to hold? Who carries it?
- Does it add a central team that every stream must route through?
- Is the plan staffed by adding people late?

**Smells:** a new central team as a mandatory gate; a reorg described only as boxes, with no interaction model; every team asked to learn a new specialty; dependency charts with many cross-team arrows; heroics in the plan ("the platform team will support all migrations").

**Strengths to name:** stream-aligned ownership end to end; a named interaction mode between teams and an end date for collaboration phases; fewer coordination points; load moved off product teams onto a platform they choose to use.

**Grounding:**
- Matthew Skelton and Manuel Pais, *Team Topologies* (2019): four team types (stream-aligned, platform, enabling, complicated-subsystem), three interaction modes (collaboration, X-as-a-Service, facilitating), and team cognitive load as a design constraint; reverse Conway, shaping teams to get the architecture you want. Melvin Conway's 1968 paper is the antecedent.
- Alex Komoroske **(TD)** `alex-komoroske`: coordination headwind, the drag that grows superlinearly with the number of agreements a decision depends on; heroics as a symptom.
- Fred Brooks **(TD)**: Brooks's Law, adding people to a late project makes it later.

**Where this lens breaks:** Some coordination is the point: a cross-cutting security fix, a regulatory change, an incident. And a small organization does not need four team types. Scale the lens to the org's size, and ask about size if the package does not say.

---

## 7. Platforms, paved roads and adoption

**Question:** If the proposal builds something for other engineers, will they choose to use it because it is better, and what happens to the teams that do not?

**Ask:**
- Who is the user, and what evidence is there that they want this? Were they asked?
- Is adoption mandated or earned? If mandated, why would it not be earned?
- What does the platform own end to end (including migrations and upgrades), and what is left to each team as glue?
- What does it deliberately leave out?
- How will the authors know if teams are routing around it?

**Smells:** a platform with a mandate and no users yet; success measured by adoption percentage under a mandate; every team expected to do its own migration; no product owner; a feature list with no non-goals; "golden path" that only covers the easy cases.

**Strengths to name:** a first customer team named; the platform absorbing migration cost; a self-service interface; an opt-in path with a deprecation plan for the old way; explicit non-goals.

**Grounding:**
- Camille Fournier **(TD)** `camille-fournier`: (with Ian Nowland, *Platform Engineering*, 2024) the over-general swamp, glue, shadow platforms, centralizing the cost of migrations, and platform as a product that teams choose to adopt.
- Erik Hollnagel **(TD)** `erik-hollnagel` and Sidney Dekker **(TD)** `sidney-dekker`: work-as-imagined versus work-as-done; the proposal describes the imagined workflow, and adoption fails in the gap.
- Will Larson **(TD)**: strategy testing, picking an approach and iterating rapidly in the details until it works, before scaling it.

**Where this lens breaks:** Some platforms must be mandatory: identity, secrets, logging for compliance. Even then, the review can ask that mandated platforms be good enough that the mandate rarely needs enforcing.

---

## 8. Production, operability and resilience

**Question:** When this proposal meets real traffic, real failures and real surprises, can people see what is happening, act on it and recover?

**Ask:**
- How will an on-call engineer know this is broken, and how will they find out why? Can they ask new questions without shipping new instrumentation?
- What is the blast radius of a failure, and how is it limited?
- Does the proposal remove slack (buffers, spare capacity, people's time) in the name of efficiency?
- Who operates it, and were they part of the design?
- What surprise is it not designed for, and what would the people on call do then?

**Smells:** "observability" meaning three dashboards defined in advance; efficiency targets that cut spare capacity; automation with no manual override or with a hidden mode; on-call ownership missing from the plan; a dependency that makes formerly independent services fail together; incident review framed around human error.

**Strengths to name:** structured, high-cardinality telemetry; progressive rollout with automatic abort; error budgets; runbooks written by operators; an incident review practice that looks for systemic conditions.

**Grounding:**
- Charity Majors **(TD)**: observability as the ability to ask unpredicted questions; arbitrarily wide structured events.
- David Woods **(TD)** `david-woods`: adaptive capacity and graceful extensibility; the Law of Stretched Systems, where any gain is spent on running closer to the limit.
- Richard Cook **(TD)** `richard-cook`: how complex systems fail; above and below the line of representation; going solid, where efficiency strips the buffers that kept parts loosely coupled.
- Jens Rasmussen **(TD)** `jens-rasmussen`: migration toward the boundary of acceptable performance under pressure for less effort and lower cost.
- John Allspaw **(TD)** `john-allspaw`: blameless postmortems; dark debt, latent failure modes in interactions that no component inspection can find.
- Erik Hollnagel **(TD)**: the efficiency-thoroughness trade-off, which people make all day, so procedures that demand both are fiction.
- Nancy Leveson **(TD)** `nancy-leveson`: STPA, safety as a control problem; useful when the proposal automates a decision that used to have a human in the loop.

**Where this lens breaks:** Not everything needs resilience engineering. An internal tool with a ten-person user base can fail loudly and get fixed Monday. Size the operational ask to the cost of the outage.

---

## 9. Measurement and outcomes

**Question:** How will anyone know whether the proposal worked, and do its measures describe outcomes for the system rather than activity?

**Ask:**
- What does success look like in six months, in numbers the authors can get?
- Is there a baseline today?
- Do the measures cover both speed and stability? A proposal that improves one by degrading the other has not improved anything.
- Is a measure being turned into a target for individuals or teams?
- Does it measure developer experience directly (surveys, friction logs), not only system telemetry?

**Smells:** success measured as adoption, tickets closed, story points or lines of code; DORA metrics as team targets or for comparing teams; "productivity" measured per developer; no baseline; outcome measures promised for after the budget is spent.

**Strengths to name:** a baseline for the four DORA measures or equivalent; a mix of system and survey data; a stated hypothesis ("lead time drops from X to Y because Z"); measures reviewed at a set date with a decision attached.

**Grounding:**
- Nicole Forsgren **(TD)**: the DORA four key measures (deployment frequency, lead time for changes, change failure rate, time to restore); the finding that throughput and stability move together in well-run systems; SPACE, five dimensions instead of a single productivity number; DevEx.
- Mik Kersten, *Project to Product* (2018): the Flow Framework, measuring flow of value across the value stream rather than project completion.
- Value-stream mapping, from Mike Rother and John Shook, *Learning to See* (1999): map the steps and the waits, then measure the waits.

**Where this lens breaks:** Measures can be expensive to build, and early proposals cannot always baseline. Ask for the cheapest honest proxy and a date to replace it. Never let the absence of metrics block a small reversible change.
