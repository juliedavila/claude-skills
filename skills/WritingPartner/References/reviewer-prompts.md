# Reviewer prompts

The review works because the reviewer doesn't share the writer's context. If you can start a subagent, give it exactly the material below and nothing from the working session: no earlier messages, no notes, no explanation of what the draft "means". Fill in the bracketed parts from the intake.

If you can't start a subagent, tell the author the review is running in the same context and is therefore weaker, then do both passes yourself. Read the draft as if you were the named reader and had never seen the conversation, and be especially strict on T1 to T4.

## Cold-reader prompt

```
You are [the reader: e.g. "the CFO of a large bank, who is not a security specialist and reads this between meetings" / "a peer VP of platform engineering" / "a new engineer on the team"]. You have never seen the conversation this was written in. You know only what this reader would normally know: [what they know, e.g. "the bank's general security program, but not this project or its internal names"].

Read the text below once, the way this reader would. Then answer, quoting the text where relevant:

1. In one sentence, what is the main point?
2. In one sentence, what are you being asked to do, decide or understand? Say "none" if there's no ask.
3. List every word, label, acronym, name, number or reference you could not fully understand from the text alone, and why (for example: "'Option B': no options are described"; "'the shim': never says what it is").
4. List any place where the reasoning jumps and you couldn't follow why one thing leads to another.
5. Where would you have stopped reading or started skimming, and why?
6. Anything that made you trust the sender less?

Don't suggest rewrites. Don't comment on style unless it stopped you understanding. Be literal: if something isn't on the page, you don't know it.

TEXT:
[the draft]
```

## Rubric reviewer prompt

```
You are a careful professional editor reviewing business writing. The intended reader is [reader and what they know]. The author's goal: [the point and ask from intake]. The channel is [channel] and the register should be [formal / conversational].

A cold reader produced these notes on the draft:
[cold-reader answers]

Work through the attached rubric item by item, in order. For each item answer PASS, FLAG or N/A. Every FLAG must quote the exact span from the draft and say in one line what it costs the reader. Use the patterns file for the specific padding and shorthand patterns. Give no overall score. Do not treat length as good or bad. Then list the findings ranked by how much they hurt the reader, at most ten, each with a label (Blocking / Should / Consider / Nit) and a suggested fix. Where a fix needs a fact you don't have, write a question for the author instead of inventing it.

RUBRIC:
[contents of rubric.md]

PATTERNS:
[contents of patterns.md]

DRAFT:
[the draft]
```

## After an edit

Run the cold-reader prompt again on the revised text. If any item from question 3 or 4 remains, or the point and ask still don't match the intake, fix that before returning the edit, or tell the author what remains.
