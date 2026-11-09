# Routing: Which Seats a Package Gets

Decide the package type from the artifacts and the user's context, then take the seats from the table. Add or drop seats when the user asks or the package makes it obvious (a deck with no figures still gets VisualizeReview, because missing visuals are its findings; a plain-text policy does not). Record the seats and the reasons in the merged review's header.

| Package type | Seats | What each brings |
|---|---|---|
| Engineering or product proposal that changes how software is built, shipped or run (RFC, design doc, platform or process deck) | DeliveryReview · ResilienceReview · VisualizeReview · WritingPartner (critique) | Flow, batching and feedback · failure, recovery and the defect lifecycle · whether the visuals carry the argument and what is missing · whether the prose reaches its reader |
| System design, architecture, runbook, operating model, defect or vulnerability program | ResilienceReview · VisualizeReview · WritingPartner (critique), plus DeliveryReview when the proposal also changes the path to production | Hazards, blast radius, defects, recovery · diagram semantics and missing figures · prose |
| Research brief, essay, long-form explainer, white paper | VisualizeReview · WritingPartner (critique), plus DeliveryReview or ResilienceReview only when the brief argues for a change in practice | Visual layer and missing figures · reader, register and clarity · substance where there is a proposal inside |
| Decision memo or decision-meeting pre-read | Dalio structure seat (DalioDecisionMemo checklist) · WritingPartner (critique) · VisualizeReview, plus the substance seat the decision's subject calls for | Decider, options as bets, disagreement log, closure · prose · the one visual at the decision point |
| Strategy, plan, recurring status or risk report | Dalio structure seat (DalioStrategyAnalysis checklist) · VisualizeReview · WritingPartner (critique) | Nutshell, machine, archetype, gauges and exhibits · exhibits as visuals · prose |
| Postmortem or diagnosis write-up, operating principles | Dalio structure seat (DalioDiagnosisPrinciples checklist) · ResilienceReview (lens 8, learning) · WritingPartner (critique) | Proximate causes as verbs, root causes as design adjectives · whether the learning changes the system · prose |
| Slide deck for a talk or a pitch | VisualizeReview · WritingPartner (critique), plus a substance seat if the deck proposes a change | Narrative order, one idea per slide, the visual at the ask · the words on the slides and in the notes |

## The Dalio structure seat

The three Dalio skills write documents; they do not review them. A structure seat is a reviewer briefed to apply one Dalio skill's **Self-check before returning** list and its **Do not** list as a rubric against the artifact, citing where each item passes or fails, and to return findings in the seat format from `Brief.md`. The brief names the skill and says the seat reads only its structure sections, not its drafting instructions.

## Skills that never sit on a panel

- **RedTeam** spawns its own agents. When the user wants an adversarial pass as well, run RedTeam from the parent after the merge, on the merged review's "The proposal as we read it" section plus the artifact, and append its steelman and counter-argument as a final section.
- **RootCauseAnalysis** investigates an incident that happened; it has no artifact to review. If the package is a postmortem, the Dalio diagnosis seat and ResilienceReview's learning lens cover it.
- **FirstPrinciples, SystemsThinking, BitterPillEngineering, LearningConditions** are thinking tools, not reviews. A user who wants one of them run on the artifact's subject asks for it directly.

## Adding a seat the table does not list

Any skill with a Review or Quick workflow that reads a package and returns cited findings can take a seat. Brief it exactly as the others, and add it to the precedence order in `Merge.md` at the layer it belongs to (substance, structure, visuals, prose).
