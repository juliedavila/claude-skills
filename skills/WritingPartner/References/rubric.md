# Review rubric

This checklist is fixed on purpose. Reviewers who make up their own criteria as they go produce worse reviews than reviewers with no checklist, and a holistic "is this good?" judgment from a model agrees with human editors almost not at all. So work through every item, in order, and answer each with PASS, FLAG or N/A. Every FLAG must quote the exact words it refers to. If you can't quote it, it isn't a finding.

Work top-down. Reader and document problems matter more than sentence problems, and there is no point polishing a sentence in a paragraph that should be cut. Length is never a finding by itself: a draft is not worse for being long or better for being short. The question is always whether each part does something for this reader.

Each item lists what counts as a FLAG and what doesn't, because over-flagging is as harmful as missing things. An author who gets fifteen weak findings stops trusting the three real ones.

## Reader

**R1. Point and ask.** Can a cold reader state the point and the ask in one sentence each, and do those match what the author intended? FLAG if the cold reader's restatement differs from the intake, or if there is no identifiable ask in a document that needs one. This is usually the most important finding in the review.

**R2. Register.** Is the register right for the purpose? FLAG casual phrasing, jokes or emoji in compliance, regulatory, external, incident, risk or budget writing, and in first contact or messages upward. FLAG stiff, institutional phrasing in a thank-you, a peer note or a team post. Don't flag contractions in conversational writing.

**R3. Why the reader should care.** Is the "so what" stated in the reader's terms, with as much context and proof as their familiarity with the problem requires? FLAG when the stakes are stated only in the writer's terms ("this unblocks the platform team") for a reader who cares about something else ("this cuts audit findings"), or when a reader new to the problem gets the solution before the problem.

## Document

**D1. Answer first.** For decisions, updates and requests: is the answer, decision or ask within the first two or three sentences, and does the title or subject line state it? FLAG a topic-only subject line ("Q3 update") or an ask that first appears in the last paragraph. N/A for explainers that deliberately build up, if their first line says what they explain.

**D2. Number of asks.** Count the requests. FLAG more than one unranked ask in one message. Suggest ranking them or splitting the message.

**D3. Objections and costs.** For persuasive writing: are the reader's two or three most likely objections answered, and is the cost stated next to the benefit? FLAG a proposal that lists only benefits, or ignores an obvious alternative (including doing nothing).

**D4. Structure fits the content.** FLAG headings over sections of one short paragraph; lists nested more than two levels; tables with two rows; "inline header" bullets ("**Label:** text") used for running argument; more than one bold sentence per section; title-case headings; a long message with no structure where the reader needs to navigate. Don't flag a well-used list of parallel items.

## Paragraph

**P1. One point each.** Reverse-outline: write each paragraph's point in one line. FLAG any paragraph whose point you can't state, or that makes two unrelated points, and any order a reader would find hard to follow.

**P2. Flow.** Does each sentence follow from the one before, with accurate connectives? FLAG a jump the reader can't bridge, a "however" with no contrast, or a paragraph whose sentences have unrelated subjects so the reader keeps changing focus.

**P3. Reasoning in prose.** FLAG a bullet that contains "because", "so" or "which means", and a list of fragments where the relationship between the items is the point.

## Sentence

**S1. Actors and actions.** Are the people or systems doing things the subjects, and are the actions verbs? Quote the worst nominalization ("conduct an evaluation of", "the implementation of the remediation"). FLAG only where turning it back into a verb makes the sentence clearer.

**S2. Length and rhythm.** FLAG sentences over about 25 words that are hard to follow (not every long sentence), and runs of four or more sentences of similar length. Don't apply a hard cap.

**S3. Plain words.** For this reader, is there a plainer word for each technical or inflated one? FLAG "leverage", "utilize", "facilitate" and similar where a plain word works, and discipline-specific jargon used with readers outside the discipline. Don't flag shared vocabulary among same-discipline peers.

**S4. Calibrated uncertainty.** FLAG probability words with no number ("likely", "unlikely", "a real chance") where the reader will act on the odds; hedges on measured facts; stacked hedges ("could potentially perhaps"); colloquial hedges ("sort of", "kind of") in professional writing. Don't flag honest statements of limits.

**S5. Hidden responsibility.** FLAG a passive or agentless construction only where it hides who did something or who owns the next step ("it was decided", "mistakes were made", "will be addressed").

## Terse shorthand ("writing to itself")

Use the cold reader's list of unresolved items as the main input here. These checks rest on reasoning rather than direct research, but they target the failure readers complain about most in Claude's working prose.

**T1. Undefined labels.** FLAG every coined label, acronym, code name, stage name, file or variable name, ticket number, or "role name" ("the shim", "the gate", "the fallback") that the reader couldn't resolve from the document. Shared, standard terms for this reader are fine.

**T2. Unseen context.** FLAG references to things outside the document: "as discussed", "the earlier approach", "Option B", "per above" with nothing above, "the new version", "this fixes it".

**T3. Symbols and compression.** FLAG arrows, =, +, w/, ~ and similar used in place of verbs in sentences; telegraphic fragments with dropped subjects and articles outside logs and changelogs; stacks of three or more nouns ("vuln triage SLA breach escalation path").

**T4. Missing steps.** FLAG a conclusion with no stated reason, a jump in reasoning the reader can't reconstruct, and a document with no opening line saying what it is and what the reader should do.

## Verbose padding

**V1. Inflation.** FLAG trailing "-ing" clauses that assert significance (", highlighting the importance of...", ", ensuring..."); clusters of model-favored style words (delve, underscore, showcase, pivotal, crucial, robust, seamless, landscape, tapestry, meticulous); "it's not X, it's Y" contrasts where no reader believed X; triads where the third item adds nothing; vague attributions ("experts agree", "industry leaders note"). Flag clusters, not a single use of a word.

**V2. Filler.** FLAG restating the request, "in summary" closers that repeat the body, didactic phrases ("it's important to note"), promotional tone ("exciting", "game-changing"), and chatbot residue ("I hope this helps", "let me know if you'd like") in a deliverable.

**V3. Generic where specific belongs.** FLAG a vague positive claim where a fact should be ("drove meaningful improvements", "significant progress"). The fix is a query to the author for the number or example, never an invented one.

**V4. Elegant variation.** FLAG one thing called by several names ("the tool", "the platform", "the solution"). Pick one and repeat it.

## Integrity and voice

**I1. Consistency and support.** FLAG numbers, names, dates or owners that differ between places in the document, and claims the reader will act on that have no source or basis. When reviewing an edit, also FLAG any qualifier from the original that the edit dropped or changed: severity ("high"), scope ("all", "only", "about"), certainty ("likely", "if") or timing ("by", "around").

**VO1. Voice.** If a voice profile exists: FLAG anything on the author's never-say list and noticeable drift from their measured habits (much longer sentences, no contractions where they always use them, generic phrasing replacing a signature move). If there's no profile: N/A.

## Severity labels

- **Blocking**: the reader will misunderstand, miss the ask, or lose trust in the sender. Every Blocking finding names what will go wrong.
- **Should**: a real cost to clarity, tone or trust, but the message still works.
- **Consider**: a judgment call the author may reasonably decline.
- **Nit**: minor; batch these into one line.

Keep the list to about ten findings. If there are more, keep the most serious and summarize the rest in one line.
