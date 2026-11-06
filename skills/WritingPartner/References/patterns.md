# Patterns to catch, and rules not to enforce

This file is for the reviewer and the editor. It lists the specific habits that make prose read as padded, robotic or self-referential, with how to spot each one and how to repair it. Treat every pattern as a reason to look closer, not as proof of anything. A single em dash or a single "robust" means nothing. A paragraph with four of these habits is worth rewriting.

The most useful question for any sentence is "what does this give this reader?" In a study of what makes text feel like slop, the strongest predictors were relevance, information density and tone, not individual words. The word-level patterns below are symptoms of that deeper problem.

## Padding

Professional writers who edited over a thousand AI-written paragraphs made four kinds of change most often: awkward word choice (28% of edits), poor sentence structure (20%), unnecessary exposition (18%) and cliché (17%). Three-quarters of their edits replaced wording rather than deleting it. So the usual repair is to say the specific thing in plain words, not to cut.

| Pattern | How to spot it | Repair |
|---|---|---|
| Trailing significance clause | A sentence ending in ", highlighting...", ", underscoring...", ", reflecting...", ", ensuring..." (models use these clauses about five times as often as people) | Delete it, or state the specific consequence and what shows it |
| Noun-heavy phrasing | Clusters of -tion, -ment, -ity nouns; "the implementation of the remediation of..."; empty verbs like "conduct", "perform", "undertake" | Find who does what, and write it as a clause with a real verb |
| Style-word clusters | Several of: delve, underscore, showcase, meticulous, intricate, commendable, crucial, pivotal, robust, seamless, landscape, tapestry, realm, foster, holistic | Use the plain word. Flag clusters, not a single use |
| False contrast | "It's not X, it's Y"; "not just X but Y"; "this isn't about X" | State Y directly. Keep the contrast only if the reader actually believes X |
| Filler triads | Three adjectives or clauses where the third adds nothing ("fast, reliable, and efficient") | Keep only the items that say something different |
| Vague attribution | "Experts agree", "industry leaders note", "studies show" with no study | Name the source or cut the claim |
| Generic praise or progress | "Drove meaningful improvements", "significant progress", "a key milestone" | Ask the author for the number or the example. Never invent one |
| Restating and summarizing | Opening by repeating the request; "In summary..." or "Overall..." closers that repeat the body | Cut. End on the next action, the decision or the last real point |
| Templates and clichés | "In today's fast-paced...", "plays a key role in", "a mix of X and Y", "at the end of the day", "navigate the complexities" | Say the specific thing, or cut |
| Didactic or promotional tone | "It's important to note", "it's worth mentioning", "exciting", "game-changing", "we're thrilled" | Delete it, or replace it with the evidence that would make it true |
| Elegant variation | The same thing called "the tool", then "the platform", then "the solution" | Pick one name and repeat it |
| Chatbot residue | "Great question", "I hope this helps", "Let me know if you'd like me to..." inside a deliverable | Delete |
| Uniform rhythm | Four or more sentences in a row of similar length, often 15 to 22 words each | Vary it: a short sentence for the claim, a longer one for the explanation |
| Rhetorical question then answer | "So what does this mean? It means..." | State the answer |
| Em-dash clusters | Several per paragraph | Use commas, colons, parentheses or two sentences. Flag only alongside other patterns |
| Structure as decoration | Headings over one-paragraph sections, bullets of fragments, "**Label:** text" bullets, bold scattered through paragraphs, title-case headings | Turn connected reasoning into prose. Keep lists for parallel items, tables for lookup |

## Shorthand: writing to itself

No study has measured these habits directly, so the detection rules below come from reasoning, mainly Pinker's account of the curse of knowledge: experts pack ideas into private chunks and name things by their role in their own work. A model deep in a working session is in exactly that position. The repairs follow the writing canon.

| Pattern | How to spot it | Repair |
|---|---|---|
| Coined labels | A capitalized, hyphenated or quoted term, or "the X approach / path / gate / track", that the document never defines and the reader wouldn't know | Replace it with a plain description. If it must recur, define it once at first use |
| References to unseen context | "As discussed", "the earlier approach", "Option B", "per above", "the new version", "this fixes it", where the thing referred to isn't in the document | Restate the thing in full: "the March proposal to move scanning before merge" |
| Symbols for verbs | →, =>, =, +, &, w/, ~, / inside sentences | Write the verb or word: causes, becomes, means, and, with, about, or |
| Telegraphic fragments | Dropped subjects and articles: "Fixed bug, added test, deploy pending" | Write full sentences for anyone outside the work. Keep fragments for logs and changelogs |
| Private identifiers as nouns | File names, variable names, ticket numbers, internal acronyms used in running prose | Use the plain name. Put a string in code format only if the reader will type or search for it |
| Role names | "The fallback", "the wrapper", "the stimulus", "the gate", without saying what the thing is | Say what it is or does: "the adapter that filters out pre-approved packages" |
| Noun stacks | Three or more nouns in a row: "vuln triage SLA breach escalation path" | Unpack into a clause: "who we escalate to when a vulnerability misses its fix deadline" |
| Missing steps | A conclusion with no "because", or a leap the reader can't reconstruct | Add the missing step |
| No orientation | The document starts mid-thought, with no line saying what it is and what the reader should do | Add a one- to three-sentence opening that does |
| Over-structure | Bullets nested three deep, every paragraph a heading, tables for two items | Flatten to prose, at most two levels of nesting |

A worked repair (illustrative, not from a real document). The shorthand draft: "Moved SCA gate pre-merge (per Option B) → FP rate roughly flat w/ shim; rollout to Tier-2 next." The repair: "We moved the dependency scan from the nightly build to the pre-merge check, the second of the three options in the March proposal. False positives stayed about the same [Q1: what rate did you measure before and after?], because we kept the adapter that filters out packages already approved as safe. Next we'll roll it out to the second group of services [Q2: which teams, and by when?]." The repair is longer, and should be, and it asks for the two facts it would otherwise have had to make up.

## Rules not to enforce

These rules are widely repeated and either wrong or too blunt. Mention one only when breaking it actually hurts a specific sentence.

| Popular rule | Why not |
|---|---|
| Never use the passive voice | The rule is based on misidentified examples, and models already underuse the agentless passive. Flag a passive only when it hides who is responsible |
| Never start a sentence with "However", "And" or "But" | Good writers do it routinely |
| Restrictive clauses must use "that", not "which" | E. B. White invented the rule; it isn't a rule of English |
| Avoid adjectives and adverbs | The real target is empty modifiers ("very", "really", "truly") |
| "Omit needless words" | It gives no test for which words are needless. Use the specific padding patterns instead |
| Hard sentence-length caps or reading-grade targets | The commonly cited limits rest on weak evidence. Use length as a flag, judge the sentence |
| Emails must be 50 to 125 words | The figure comes from correlational industry data |
| Informal tone always gets more action | A large field study found formal letters drove more action for institutional requests |
| Define jargon and you're fine | Definitions don't restore the clarity jargon costs. Use the plain term where one exists |
| Never hedge | Honest statements of limits raise trust. Hedge interpretations, not facts |
| Stories always beat statistics | Overall the evidence is a tie. A data claim plus one representative example beats either alone |
| An em dash, or a "robotic" feel, proves AI wrote it | Single signs are weak, and people's intuitions about spotting AI text are mostly wrong |
| A list of banned phrases fixes AI style | Untested, and banning words tends to produce substitute clichés. Fix the sentence, not the word |
