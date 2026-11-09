# Panel Workflow (default)

Full reviews from every applicable seat, run in parallel, merged into one.

## Steps

1. **Collect the package.** List every artifact the user gave or linked, as absolute paths or links. If a link cannot be reached, say so; a seat that cannot read the main document is not worth launching.

2. **Settle the facts.** Reader, medium, purpose, stage, what the authors control, what is off limits, today's date. Take them from the user; infer the rest from a first look at the package and mark the inferences. Do not build a proposal map or form any view of the artifact's quality; that is the seats' job.

3. **Choose the seats** from `Routing.md`. Record each seat and the reason, and any seat the user added or dropped. State the expected cost in one line (seats times roughly 130k to 170k tokens; about six minutes wall-clock).

4. **Write the briefs** from `Brief.md`: identical facts, one skill name and one output path per seat.

5. **Launch every seat at once**, each as its own subagent in a fresh context, in the background, so they run in parallel. If the host cannot start subagents, run the seats one after another yourself, each as a fresh full read of the package with that one skill, and record "serial, one context" as the mode.

6. **Watch, don't poll.** Arm a stall watch on the seats' output files where the host allows it. A seat silent for ten minutes has stalled: give it one nudge, then proceed without it and record the gap in the header. Never fabricate a seat's result.

7. **Read every seat's review from disk, in full.** Not the chat summaries. If a seat wrote nothing, it failed; say so.

8. **Merge** per `Merge.md`, steps 1 to 6: fold, resolve conflicts by precedence, rank, write the order of work, merge the questions, keep the misfits.

9. **Write the merged review** to `<main-artifact-stem>-panel-review.md` next to the package, using the format in `Merge.md`. Then reread it once as the authors: is every hole still cited, did any seat's finding get softened, does every conflict say which seat lost and why, is the order of work actionable? Fix what fails.

10. **Report** to the user in chat: the overall read in two sentences, the top three holes by name with the seats that raised them, the number of conflicts and how they resolved, the path to the merged review and to each seat's file, and any seat that failed.

11. **Optional adversarial pass.** If the user asked for RedTeam as well, run it now from the parent on the artifact plus the merged review's "The artifact as the panel read it" section, and append its result as a final section of the merged review.

## After the panel

Application is serial. The authors (or WritingPartner's Edit mode, on request) work the order of work from the top. A prose edit before the substance fixes is wasted on paragraphs that may not survive.
