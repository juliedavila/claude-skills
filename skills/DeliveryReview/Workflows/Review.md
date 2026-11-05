# Review Workflow (default)

Full review of a proposal package across the applicable lenses.

## Steps

1. **Collect the package.** List every artifact the user gave or linked. If a link cannot be reached, say so and continue with the rest; do not stop the review over one missing file unless it is the main document.

2. **Read everything.** Follow `Intake.md` for each artifact type. Extract deck notes with `Tools/extract.ts`. Do not start judging during the read; note page and slide references as you go.

3. **Write the proposal map.** Per `Intake.md`. If the stated problem is unclear, write the most plausible reading and flag it as the first question for the authors.

4. **Steelman.** Write two or three sentences stating the strongest version of the case for this proposal, including what it does for the organization that the current state does not. Keep it in the review under "The proposal as we read it".

5. **Choose lenses.** Read `Lenses.md`. Pick every lens this proposal touches, and record the ones skipped with the reason. A broad proposal can touch all nine; that is fine as long as each lens yields a finding or a strength, not padding.

6. **Apply each lens.** For each chosen lens, work through its questions against the map and the artifacts. Collect candidate strengths and candidate holes with citations. Check each candidate hole against the lens's "where this lens breaks" section and the proposal's stated constraints before keeping it.

7. **Merge and rank.** Several lenses will flag the same root issue from different sides (a release train is a batching problem, a feedback problem and a change-control problem). Merge them into one hole named by the root cause and list the lenses. Rank by severity, then by confidence.

8. **Write suggestions.** For each hole, the smallest change that closes it, stated so the authors could edit the proposal with it. Where a hole has a cheaper alternative that preserves the authors' goal, lead with that.

9. **Write questions.** Every Low-confidence hole needs a question that would settle it.

10. **Write the review** to file using `ReviewFormat.md`. Then reread it once as the authors: is every finding cited, is the praise specific, is anything phrased as a slogan, did the review argue with a proposal the authors did not write? Fix what fails.

11. **Report** to the user in chat: the overall read in two sentences (shorter than the review's own), the top two holes by name, the path to the review file, and any artifact that could not be read or that lacked speaker notes.

## For large packages

When the package is long (a 60-slide deck plus a 30-page doc), parallel subagents can each apply a subset of lenses to the same proposal map. Give each subagent the map, the artifact paths, its lenses from `Lenses.md` and the finding rules from `ReviewFormat.md`. Merge and rank yourself (steps 7 to 10); never paste subagent output into the review unread.
