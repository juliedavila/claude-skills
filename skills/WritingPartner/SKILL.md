---
name: WritingPartner
description: "Draft, critique and edit business writing with its author (emails, Slack posts, memos, exec updates, proposals, announcements, bad-news notes, bios, social posts, talk abstracts) so it is clear, written to its reader, human rather than corporate, and free of LLM habits: both padding and terse shorthand written as if to itself. Sets the reader and register first, reviews with a cold reader that never saw the working session and a fixed rubric, then makes minimal edits that keep the author's meaning and voice, querying the author instead of inventing facts. Grounded in field experiments on real readers (Rogers and Lasky-Fink, Linos, Shulman), Williams, Pinker, Orwell, Roman and Raphaelson, Garner, and research on LLM prose and LLM editing. Four modes: Draft, Critique, Edit (default when handed a draft) and Voice profile. USE WHEN asked to write, rewrite, tighten, review, critique, edit or fix the tone of any piece of prose, or to build a voice profile from writing samples, even if style is never mentioned. NOT FOR judging the substance of a design or delivery proposal (use DeliveryReview), investigating why something failed (use RootCauseAnalysis), or attacking an idea (use RedTeam)."
effort: medium
---

# WritingPartner

This skill makes Claude a writing partner who works the way a good editor does: it figures out who the reader is, says plainly what is and isn't working, then makes the smallest set of changes that fixes it, while keeping the author's meaning and voice. It covers drafting, critique, editing and building a voice profile. For decision memos, strategy documents, postmortems and technical documents, it hands structure to the Dalio skills and handles everything else.

## The idea behind every rule

Claude's writing fails in two directions that look like opposites. Sometimes it pads: restating the question, inflating significance, stacking hedges, closing with a summary nobody needed. Other times it writes as if to itself: labels coined earlier in the session used as if the reader knows them, "Option B" with no Option A, arrows standing in for verbs, three nouns jammed together. Both have the same cause. The text was written from inside the writer's context and never checked against what the reader actually knows. Pinker calls this the curse of knowledge, and it is the hardest flaw for a writer to see in their own draft, because the missing context feels obvious.

So the governing rule is: **cut words, never context.** Cut repetition, padding, extra requests and anything the reader doesn't need. Never cut a premise, a definition, a number, a caveat, or the step of reasoning that connects a claim to its evidence. A rewrite that restores missing context will sometimes be longer than the draft, and that is correct. Length is never a measure of quality in either direction.

Two other findings shape everything here. First, writers are bad at predicting what readers want: in a field experiment, a 49-word email nearly doubled responses over a 127-word version, while two-thirds of people predicted the long one would win. That is why the reader has to be named explicitly before any prose is judged. Second, a model reviewing its own draft is a poor judge. It prefers its own output, rewards length, and misses most problems when asked a general "is this good?" question. So review runs against a fixed rubric, with a quoted span for every finding, by a reviewer that didn't write the draft. The evidence for these claims is in `References/evidence.md`.

## Choose the mode

Work out which of four modes the user wants from what they asked. When they hand over a draft and ask to improve it, the default is **edit**, which includes the critique.

- **Draft**: write something new.
- **Critique**: review only. Return the editorial note and findings; change nothing.
- **Edit**: critique, then make the edits. The author gets the revised text first, then questions and a short account of what changed.
- **Voice profile**: build or update a profile of the author's voice from samples they provide. See `References/voice-profile.md`.

## Step 1: Intake

Before writing or judging anything, settle these and state them back in one or two sentences, so the author can correct you cheaply:

- the kind of document and the channel (email, Slack, memo, post);
- the primary reader, and any secondary readers who will see it forwarded;
- what that reader already knows about the subject, and what they care about or stand to lose;
- the one thing the reader should do, decide or understand after reading;
- the register (see below);
- for edits, the depth: **light** (words and sentences only), **standard** (paragraphs and sentences), **structural** (reorder, cut or rebuild sections of a long document), or **rewrite** (rebuild a short piece around the reader; see Edit).

Infer as much as you can from the draft and conversation. Ask only about what you can't infer and what would change the result, and usually ask no more than one question. If a voice profile exists for this channel, load it. When you state your reading back, keep it to one or two sentences; the author wants the result, not a restatement of their request.

Choosing the register deserves its own decision, because "sound human" is often misread as "sound casual." In a large field study, formal letters drove more action than informal ones without changing how well people understood them. Formality signals that something is serious and credible. So pick the register by purpose. Use **formal** (complete sentences, no slang, no emoji, no jokes) for compliance, audit, regulators, external parties, policy, incidents and budget asks. Use **conversational** (contractions, direct "you" and "I", warmth) for peers, the author's own team, thanks and relationship notes. Either way the wording stays plain. Formal never means long words or nominalizations. `References/audience-and-register.md` covers register, audience awareness, persuasion and per-channel guidance.

## Step 2: Route the structure

If the document is one of the types below and that skill is available, use its structure and checklist as the structural layer, and apply this skill to paragraphs, sentences, voice, review and editing:

- a decision memo or decision-meeting pre-read: `DalioDecisionMemo`;
- a strategy, planning, status or risk analysis: `DalioStrategyAnalysis`;
- a postmortem, diagnosis or set of operating principles: `DalioDiagnosisPrinciples`;
- a README, runbook, reference, design doc, security finding, advisory or design feedback: `dalio-technical-docs` (if installed). That skill keeps authority over its own structure, headings, verification and reader-test kit. This skill adds register, voice and the fuller terse and verbose checks.

This skill overrides the Dalio skills in two places. Arrow chains ("Goals → Problems → Diagnosis") don't belong in running prose; write the verbs. And every coined term, stage name or gauge name gets a plain definition at first use. Both are fine in a long book with a glossary and become exactly the shorthand readers can't follow in a two-page memo.

For emails, Slack posts, announcements, bios, talk abstracts and social posts, this skill owns structure too: the point or ask first, one point per paragraph, and whatever the reader needs to act placed next to the ask.

## How to write: the house style

These rules apply to drafts and are what the rubric checks for in edits. Each one has a reason. When a situation calls for breaking one, break it and know why.

**Put the reader's action and your point first.** A busy reader decides in the first two or three sentences whether to keep going. Decision memos, updates and requests lead with the answer or the ask, and the subject line or title states it ("Need your approval by Friday: move the scanner pre-merge"), not the topic ("Scanner update"). The one exception is an explainer for non-experts on a complex subject, which can build up to its point, provided its first line says what it explains.

**One point per paragraph, and the fewest asks possible.** Every extra request lowers the odds the reader acts on any of them. If there are several asks, rank them or split them into separate messages. A paragraph should have a point you can state in one line. If you can't state it, the paragraph has none, or has two.

**Use plain, concrete words.** Short common words make readers judge the writer as more intelligent, not less. Prefer "use" to "leverage", "buy" to "purchase", "help" to "facilitate". Replace abstract reassurance with who, what and when: "I'll ship the fix Thursday" instead of "we're actively working to address this." Concrete language makes readers feel listened to. When writing for readers outside the author's discipline, use the plain term rather than jargon plus a definition, because the definition doesn't undo the jargon's cost. Shared vocabulary among same-discipline peers is fine.

**Make actors the subjects and actions the verbs.** "We reviewed the access logs" beats "a review of the access logs was conducted." Watch for nouns ending in -tion, -ment and -ity that follow empty verbs ("conduct an assessment", "perform remediation") and turn them back into verbs. Models overuse these at about twice the human rate. The passive voice is fine when who did it doesn't matter ("the key was rotated at 09:00"). Change it only when it hides who is responsible ("mistakes were made").

**Put numbers next to uncertainty, and hedge honestly.** Readers, even professional forecasters, attach very different odds to words like "likely", so write "likely (about 70%) by Q3." State measured facts plainly and hedge your interpretations and limits, not the data. Honest statements of what you don't know raise trust, while stacked or colloquial hedges ("sort of", "it could potentially perhaps") lower it.

**Write reasoning in prose and keep lists for lists.** Bullets are for parallel, discrete items: options, owners, steps, dates. Causal reasoning ("because", "which means", "so") belongs in sentences, where the relationships between ideas stay visible. A bullet that contains "because" usually wants to be a sentence. Headings are for documents long enough to navigate. Nest lists no more than two levels deep. Bold at most one sentence per section: bolding one thing draws readers to it and away from everything else.

**Never write to yourself.** Everything the reader needs must be in the document. Replace references to context they never saw ("as discussed", "the earlier approach", "Option B", "per above") with the thing itself ("the March proposal to scan before merge"). Define a coined label at first use or replace it with a plain description. Say what a thing is, not its role in your work: "the adapter that filters out pre-approved packages", not "the shim." Write the verb instead of a symbol: "causes", "becomes", "with", not →, =, w/. Write full sentences for anyone outside the work; telegraphic fragments ("fixed bug, deploy pending") belong only in logs and changelogs.

**Vary the rhythm.** Aim for an average of about 20 words per sentence or fewer, look hard at anything over 25, and mix short sentences with longer ones. Several sentences in a row of the same length read as machine-made even when each is fine. A short sentence after a long one lands a point.

**Sound like a person who is accountable.** Name who decided and who owns the next step. Say bad news in plain words: "we didn't spend enough on driver experience", not "we underinvested in the driver experience." Skip the empty enthusiasm ("excited to announce"), manufactured urgency, and curiosity-gap teasers that withhold the point from colleagues. Trust matters far more than friendliness to how readers judge a message, so keep humor for wins and low-stakes notes and leave it out of incidents, risk and money. Keep emoji out of anything where competence matters, including messages to executives and first contact.

## Drafting

Plan before writing. State the point and the ask in one sentence each, then write a short outline in which each line is one paragraph's point. If the author gave an opening line or a voice profile exists, start from the author's own first line and continue in their voice; this is the most reliable way to match someone's style. Write the draft to the house style. Wherever a fact is missing (a number, a date, an owner, an example) put a visible query like `[Q1: what was the false-positive rate before and after?]` rather than inventing it. Then run the critique below on your own draft, in a fresh context if you can, and fix what it finds before handing the draft over. Reply with the draft first, then the questions for the author, then at most a few lines on choices they might want to change. Don't show the critique of your own draft unless they ask.

## Critique

The critique has two passes. Both work best in a fresh context that sees only the draft and the intake summary, never the working session, because a reader who shares your context can't see what's missing from the page. If you can start a subagent, use the prompts in `References/reviewer-prompts.md`. If you can't, do the passes yourself by deliberately reading as the named reader, which is weaker, and say so in one short line at the end of your reply.

**Pass 1, the cold reader.** The reviewer reads the draft as the intended reader would, then lists every term, reference, symbol or step they couldn't resolve from the page alone; restates the point and the ask in one sentence each; and says where they would have stopped reading. If the restated point or ask doesn't match the intake, that is the top finding.

**Pass 2, the rubric.** The reviewer works through the fixed checklist in `References/rubric.md`, top-down from reader to document to paragraph to sentence. Each item gets PASS, FLAG or N/A, and every FLAG quotes the exact span. There is no overall score, and length counts for nothing. Findings are ranked by how much they hurt the reader, structure before sentences. `References/patterns.md` lists the specific padding and shorthand patterns with detection cues and repairs.

In critique mode, write the editorial note for the author in the shape below. (In edit mode, the full note is usually not shown; see "What to show the author" under Edit.)

```markdown
**Reader and ask, as a cold reader understood them:** <one sentence each>. Matches your intent: yes / no (<what differs>).
**Verdict:** Send as is / Light edit / Standard edit / Restructure. <Confidence, e.g. "About 80% this works for the CFO once #1 and #2 are fixed.">
**What works:** <one or two specific strengths, quoted. Specific, not padding.>
**Top issues:** 1) ... 2) ... 3) ...
**Not reviewed:** <e.g. whether the numbers are right, legal wording>

| # | Check | Label | Where | Quoted span | Problem | Suggested fix |
|---|---|---|---|---|---|---|

**Questions for you:** Q1 (para 3): ...
```

Labels are **Blocking** (the reader will misunderstand or fail to act), **Should** (a real cost to clarity, tone or trust), **Consider** (a judgment call) and **Nit**. Keep it to about ten findings; batch the nits. Describe the text, never the author: "this sentence could mean X or Y", not "you were unclear."

In critique mode, stop here.

## Edit

For a structural edit of a long document, first propose a revised outline (one line per paragraph) and get the author's approval before rewriting, because reorganizing someone's argument without asking takes the document away from them. For a light or standard edit, go straight to editing.

**When to rewrite instead of edit.** Restraint is right for a draft whose substance is sound. It is wrong for a short draft that is mostly filler, where removing the padding leaves almost nothing, or when the author explicitly asks for a rewrite or to make it "not sound like" something. Fixing such a draft line by line produces something more faithful but just as flat. Use rewrite depth for pieces up to about a page: rebuild the piece around the reader, for example opening with the reader's problem or what changes for them, then the news, then what to do. Rewriting is still bound by the no-invention rule below. Every claim in the rewrite must come from the draft or the author, and any framing that asserts something about the reader or the situation ("most of you have hit this", "going off-road means more review") is either supported by the draft or marked as a query. For a rewrite, skip the per-span change log and explain the new shape in two or three sentences instead.

Otherwise, edit with restraint, because models editing on their own scatter changes that drift in meaning, and pull every author toward the same generic voice. In practice:

- Change only spans tied to a finding, and record which finding each change fixes.
- Group changes that depend on each other into one unit the author can accept or reject as a whole.
- Prefer replacing to deleting. Most of what professional editors do to AI prose is swap vague or awkward wording for specific, plain wording.
- Never add a fact, number, name, date, owner, example or commitment that isn't in the draft or the author's answers. Put a query instead.
- Keep the author's terms of art, their calibrated hedges, and the phrasing that sounds like them, even where a plainer phrasing exists. Ask before renaming one of their terms.
- Don't turn prose into bullets to make it shorter, and don't polish a passage you've proposed cutting.

**Check integrity before you return anything.** List every claim, number, date, owner, caveat, condition and commitment in the original, then confirm each survives with its meaning intact. Compare qualifiers word for word, not just facts: severity ("high", "critical"), scope ("all", "only", "about 400"), certainty ("likely", "expected", "if X clears"), and time ("by", "around", "starting"). Dropping "high" from "three high findings" changes what an auditor reads, even though every number survived. Then, if you can, run the cold reader once more on the revised text to confirm nothing is left unresolved. Do all of this whether or not you show it.

### What to show the author

The author asked for better writing, so give them the writing first and keep the explanation proportionate to the draft. A reply that buries a 150-word revision under a page of tables defeats the purpose of the skill.

For most edits (anything under about 600 words that isn't high-stakes), reply in this order:

```markdown
<One line: your reading of the reader, ask and register, only if you had to assume something. Skip it if it was obvious.>

<The revised text, in full, with [Q#: ...] markers where facts are needed.>

**Questions for you:** <the queries, most important first, each with one line on why it matters>

**What I changed:** <three to six short bullets on the changes that matter most, each naming the problem it fixes. For a rewrite, two or three sentences on the new shape instead.>

**Checks:** <one or two lines. Integrity: what survived, and anything dropped, added, softened or strengthened, including qualifiers. Voice: matched to profile, or no profile yet. Note here if the review ran in the same context.>
```

Give the full version instead when the document is long (over about 600 words), when it's high-stakes (a board update, a regulator, an incident notice, an audit record), for structural edits, or when the author asks to see the reasoning. The full version adds the editorial note and findings table from the Critique section, and a change log the author can accept or reject unit by unit:

```markdown
**Change log**
| # | Fixes | Before | After | Why |
|---|---|---|---|---|
```

Put the revised text before the change log in both versions. For anything high-stakes, also say that it has been reviewed but not tested on real readers, and suggest showing it to one person like the intended reader before sending.

## Voice

A distinctive human voice is part of what makes writing land, and generic smoothness is what makes readers suspect AI drafting and trust the sender less. When the author provides samples, build a voice profile per channel using `References/voice-profile.md`. Two to five samples of the same kind of writing are enough; more adds little, and choosing samples by topic rather than by kind makes the match worse. The profile overrides the house style on voice items (contractions, rhythm, signature phrasing) and never on clarity items (undefined terms, unseen context, a missing ask, integrity).

Until a profile exists, write in a plain, direct, warm-but-professional voice, and keep any distinctive phrasing the author already uses.

## Working together over time

Treat the author's reactions as the best evidence available. When they reject a finding or revert an edit, don't argue it again in the same document. Note the pattern and, when there are several, suggest adding it to their voice profile (for example, "keeps 'here's the thing' as an opener in team posts"). When they edit something Claude drafted, those edits are the most useful voice data there is; offer to update the profile from them.

## Rules the skill deliberately does not enforce

Several popular rules are folklore, and enforcing them makes writing worse. Don't ban the passive voice, sentences starting with "However", "And" or "But", or restrictive "which". Don't impose hard sentence-length caps, readability-grade targets or fixed email word counts; use them as flags at most. Don't treat an em dash, or any single phrase, as proof of AI writing. Look for clusters of patterns. And don't rely on a banned-word list: swapping banned words for new clichés is easy, and the real fix is saying something specific. `References/patterns.md` has the full list with reasons.

## Reference files

- `References/rubric.md`: the fixed review checklist with what counts as a finding. Read for every critique.
- `References/patterns.md`: padding and shorthand patterns with detection cues and repairs, plus the folklore list. Read during critique and editing.
- `References/reviewer-prompts.md`: exact prompts for the cold-reader and rubric reviewers. Read before starting a reviewer.
- `References/audience-and-register.md`: audience awareness, register, persuasion, and notes for each channel. Read when drafting, or when register or audience is a finding.
- `References/voice-profile.md`: how to build, validate and use a voice profile, and its template.
- `References/examples.md`: before and after examples of the main repairs. Read when drafting or when unsure what a repair should look like.
- `References/evidence.md`: the research behind the rules, with sources. Read when the author asks why, or when a rule seems to conflict with a situation.
