# Review Workflow (default)

Full review of an artifact package across the applicable lenses, with a sketch for every visual that should exist.

## Steps

1. **Collect the package.** List every artifact the user gave or linked. If a link cannot be reached, say so and continue with the rest; do not stop the review over one missing file unless it is the main document.

2. **See everything as rendered.** Follow `Intake.md` for each artifact type. Run `Tools/extract.ts --inventory` on decks and documents, and `Tools/extract.ts` for notes and text. Read every page image. Do not start judging during the look; note slide, page and figure references as you go. Record in the header what could not be seen as rendered.

3. **Write the proposal map.** Per `Intake.md`: reader, medium, purpose, the story in a paragraph, what the authors control, the visual inventory with a message per visual, and the passages that want a visual.

4. **Steelman.** Two or three sentences on what the visual layer is trying to do and the strongest reading of its current choices. Keep it in the review under "The artifact as we read it".

5. **Choose lenses.** Read `Lenses.md`. Pick every lens this artifact touches, record the ones skipped with the reason, and apply the fixed-template rule to lenses 7 and 9 when the template is fixed.

6. **Apply each lens.** For each chosen lens, work through its questions against the map and the rendered pages. Collect candidate strengths and candidate holes with citations. Check each candidate hole against the lens's "where this lens breaks" section and the stated constraints before keeping it.

7. **Turn the passages that want a visual into holes.** For each, say what kind of visual it is asking for and why the reader would get it faster, and write a sketch per `Sketches.md`. Rank them with the other holes; a comparison the decision depends on, left in prose, can outrank a weak chart.

8. **Merge and rank.** Several lenses will flag the same root issue (a topic title is a message problem, a load problem and a narrative problem). Merge into one hole named by the root cause and list the lenses. Rank by severity, then by confidence.

9. **Write suggestions.** For each hole, the smallest change that closes it, stated so the authors could edit the artifact with it. Add a sketch only where `ReviewFormat.md` says it belongs.

10. **Write questions.** Every Low-confidence hole needs a question that would settle it.

11. **Write the review** to file using `ReviewFormat.md`. Then reread it once as the authors: is every finding cited, is the praise specific, is anything a taste word, does every sketch use real labels, did the review file a hole against a template the authors cannot change? Fix what fails.

12. **Report** to the user in chat: the overall read in two sentences (shorter than the review's own), the top two holes by name, how many visuals should be added, the path to the review file, and any artifact that could not be seen as rendered.

## For large packages

When the package is long (a 60-slide deck plus a 30-page document), parallel subagents can each apply a subset of lenses to the same map and inventory. Give each subagent the map, the artifact paths, its lenses from `Lenses.md` and the finding rules from `ReviewFormat.md`. Merge and rank yourself (steps 8 to 11); never paste subagent output into the review unread.
