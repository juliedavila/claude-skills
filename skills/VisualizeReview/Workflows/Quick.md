# Quick Workflow

A fast read of one artifact, for when the user wants a first take or has limited time. It reviews the one artifact it is given; sibling files it links to are not read, and the Offer at the end names the ones that would settle open holes.

## What Quick loads

`Intake.md` for seeing the artifact and the map, `Lenses.md` for the lenses, `Sketches.md` for any sketch, and the **Rules for each finding** section of `ReviewFormat.md`. Quick does not use ReviewFormat's file rule or its full template: the result goes in chat, no file unless asked, in the skeleton below.

## Steps

1. See the artifact as rendered (`Intake.md`). Run `Tools/extract.ts --inventory` on the file whatever its type (`.pptx`, `.docx`, `.md`, `.html`). Say in the header what was not seen as rendered.
2. Write a short map: items 1 to 6 of the Intake map, compressed (the story in two sentences rather than a paragraph; the inventory as counts by kind plus the three visuals that carry the most of the argument), and the passages that want a visual.
3. Skim `Lenses.md` and pick the three lenses that bite hardest. If the artifact has a decision point with no visual case, lens 6 is one of them. Record the lenses skipped in one clause each.
4. Return, in chat, in this shape:
   - **Header:** artifact and version or date · reader and medium, stated or inferred · seen as rendered: yes / partly / no · author controls · lenses applied and skipped.
   - **Map:** the short map from step 2.
   - **Overall read:** two or three sentences.
   - **Keep:** the top three strengths, each with a citation and the mechanism that makes it good.
   - **Fix:** up to five holes, ranked by consequence using the severity definitions in `ReviewFormat.md` but without printing the labels. Each as one line of concern plus one line of suggestion, with a citation and the lens, then the sketch if it has one. At most two carry a sketch: when more than two holes qualify, sketch the two highest-ranked and say which others would get one in the full Review.
   - **The question:** the single question whose answer would most change the assessment.
   - **Offer:** the sibling artifacts or a rendered export that would settle open holes, and the full Review workflow if the artifact needs it.
