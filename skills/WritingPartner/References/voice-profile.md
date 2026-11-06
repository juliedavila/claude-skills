# Voice profile

A voice profile records how one person writes so that drafts and edits sound like them rather than like Claude. It matters for more than taste. Readers who suspect a message was AI-drafted rate the sender as less sincere and less invested, especially in personal messages, and idiosyncratic voice cues are what make writing read as authentic. Writing with AI also pulls everyone toward the same style, and in one study people who edited an AI draft ended up closer to the AI's style than their own while believing the opposite. A profile is the counterweight.

## What samples to use

Ask the author for two to five pieces of the same kind of writing that they think sound like them, per channel: for example three peer emails, three executive memos, three team Slack posts, two talk abstracts. Research on style imitation found that going from two examples to ten adds little, that choosing samples by topic similarity makes the match worse, and that models match email and formal prose much better than casual posts. So choose by kind of writing, not by subject, and expect a weaker match on Slack and social posts.

Use only writing the author wrote themselves, without heavy AI help. Ask if unsure. Never build one channel's profile from another channel's samples.

## How to build it

1. Measure what can be measured, using a script if you can: sentence-length distribution, paragraph length, contractions per hundred words, "I" versus "we", direct "you", and punctuation habits (dashes, parentheses, semicolons, exclamation marks).
2. Describe what can't be measured, quoting evidence for each claim: how they open and close messages, their signature moves, recurring phrases, metaphors they reach for, how they hedge, how they use humor, how they adjust for audience.
3. Write the negative space: words, phrases and moves they never use. This is often the most useful part. Ask the author directly as well, since people usually know their pet hates ("I'd never write 'circle back'").
4. Collect 20 to 30 sentences that sound most like them, labeled by channel.
5. Validate: draft two short pieces with the profile, ask the author to edit them, and update the profile from their edits. Their edits are better evidence than the samples.

Save the profile somewhere the author controls (a file in their skills folder or project, or a document) and say where it lives.

## How to use it

When drafting, start from the author's own opening line if they give one, then continue in their voice. Continuing someone's own text gives a closer style match than describing their style.

When editing, the profile overrides the house style on voice items (contractions, rhythm, signature phrasing, preferred openers) and never on clarity items: undefined terms, references to unseen context, a missing ask, and integrity of facts. If a signature habit causes a clarity problem, keep the habit and fix the problem another way, or ask.

After an edit, check the result against the profile: sentence lengths near the author's median, contractions at their usual rate, nothing from the never-say list, signature moves kept rather than smoothed away.

Update the profile whenever the author rejects a finding for voice reasons or edits a draft noticeably. Note the date and what changed.

## Template

```markdown
# Voice profile: <name>, <channel: exec memo | peer email | team Slack | external post or abstract>
Samples: <2-5 titles or dates, same kind of writing>. Last validated: <date>, from <n> author edits.

## Measured (recompute when samples change)
- Sentence length: median __ words; under 8 words __%; over 25 words __%
- Paragraph length: median __ sentences
- Contractions: __ per 100 words (none / some / frequent)
- Pronouns: "I" vs "we" __ : __; addresses reader as "you": yes / no
- Punctuation: dashes __, parentheses __, semicolons __, exclamation marks __ (per 1,000 words)
- Openings: <quoted examples>
- Closings and sign-offs: <quoted examples>
- Hedging: <e.g. "my read is...", gives numbers with odds: yes / no>

## Described (quote evidence for each)
- By audience: up __ / across __ / down __ / external __
- Signature moves: <e.g. opens with the stakes in one line; ends with a single named next step>
- Signature phrases (use sparingly): ...
- Metaphors: <domains they draw on>
- Humor: <type, how often, when; never in incidents or budgets unless samples show otherwise>
- This, not that: <e.g. direct, not curt; technical, not jargon-heavy; confident, not salesy>

## Never says
- Words and phrases: ...
- Moves: <e.g. no rhetorical-question openers, no exclamation marks upward>

## Exemplars
- <20-30 verbatim sentences, labeled by channel>

## Change history
- <date>: <what changed and why>
```
