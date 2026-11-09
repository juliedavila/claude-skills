# The Nine Lenses

Each lens is a question to put to the artifact, the signs that it fails the question, the signs that it passes, the works whose findings back the lens, and where the lens itself stops applying. Not every lens applies to every artifact. A chart-heavy quarterly deck needs 1 through 5 and 9. An architecture document needs 1, 6, 8 and 9. A templated corporate deck gets 7 only on what the author controls. Apply the ones that bite and say which you skipped and why.

**The fixed-template rule.** When the package says, or the artifact shows, that the template, brand system or chart tool is fixed, lenses 7 and 9 review only the choices still open to the author: the order of slides or sections, what goes on each, the design of each figure, where emphasis falls, and alt text. Findings against the template itself go once under "Where the lenses don't fit", never as holes.

---

## 1. Message

**Question:** Does each visual make one claim the reader is meant to believe, and is that claim stated where the eye lands first?

**Ask:**
- Can the title of each visual be written as a sentence ("Churn doubled after the price change") rather than a topic ("Churn")? If the artifact uses topic titles, where does the reader learn what to see?
- What would be lost if this visual were deleted? If the answer is nothing, it is decoration.
- Does the caption or the surrounding text say the same thing the visual shows, or something adjacent?
- Where several visuals sit together, does each add a claim the others do not?

**Smells:** topic titles; a chart whose caption describes the axes rather than the finding; a figure the text never refers to; decorative stock images and icon rows; a dashboard panel with no reason to look at it; the same claim shown twice in different forms.

**Strengths to name:** action titles that state the finding; a figure the text leans on by number; a visual that carries a claim the prose could not make as fast; captions that tell the reader what to notice.

**Grounding:**
- Jean-luc Doumont, *Trees, Maps, and Theorems* (2009): a message, not a topic, at every level; a figure the reader can get from its caption alone.
- Cole Nussbaumer Knaflic, *Storytelling with Data* (2015): the action title; focus attention on the one thing; declutter what does not carry the message.
- Edward Tufte, *Beautiful Evidence* (2006): the figure is part of the argument, not an illustration beside it.

**Where this lens breaks:** Reference material (an appendix table, a data dictionary, a map for lookup) exists to be consulted, not to make a claim. Review those for findability and accuracy, not for a message.

---

## 2. Form fit

**Question:** Does the kind of visual match the kind of thing being shown?

**Ask:**
- What is the comparison: parts of a whole, items against each other, change over time, a distribution, a relationship between two measures? Each has forms that work and forms that mislead.
- What is the structure: a sequence, a hierarchy, a network, a cycle, a matrix of two dimensions, a place? Flow, tree, graph, loop, grid, map.
- Is a table being asked to show a pattern, or a chart being asked to give exact values? Tables are for lookup and precision; charts are for comparison and shape.
- Does the form carry the data the artifact has, or the data the authors wish they had (a trend line through three points, a pie of two values)?

**For tables, ask:** what the row lead carries (the thing or its action), whether the rows are sorted by the comparison the reader is making rather than alphabetically, whether numbers are right-aligned with the same decimals so magnitude reads as length, whether the columns fit the narrowest medium the page will be read on, and whether the table has a caption that states its claim.

**Smells:** pie charts for anything but a few parts of one whole; a line chart over categories with no order; a stacked bar used to compare the middle segments; a word cloud; a 2x2 whose axes are not independent; a flowchart for something that is not a flow; a table of twelve columns where the reader needs one comparison.

**Strengths to name:** the right form for the comparison, stated or evident; a table where exact values matter and a chart where the shape matters; a diagram type that matches the structure (a sequence drawn as a sequence).

**Grounding:**
- Gene Zelazny, *Say It With Charts* (1985; 4th ed. 2001): choose the chart from the comparison being made (component, item, time series, frequency distribution, correlation), not from the data's shape.
- Dan Roam, *The Back of the Napkin* (2008): the six questions and the picture each one wants: who and what (portrait), how much (chart), where (map), when (timeline), how (flowchart), why (multi-variable plot).
- Tamara Munzner, *Visualization Analysis and Design* (2014): what is shown, why, and how, as separate decisions; marks and channels.
- Stephen Few, *Show Me the Numbers* (2004; 2nd ed. 2012): when a table beats a graph and when it does not.

**Where this lens breaks:** The tool the authors have may not make the right form. When the package says the charts come from a fixed tool, suggest the best available form and say what the ideal one would be, once.

---

## 3. Perception and encoding

**Question:** Is the finding encoded in a channel the reader can read accurately, and does the grouping on the page match the grouping in the data?

**Ask:**
- Which visual channel carries the comparison that matters? Position on a common scale and length are read accurately; angle, area and volume are read poorly; color hue and saturation worst of all for quantity.
- Are things that belong together placed together, aligned, enclosed or colored alike, and things that do not kept apart? Readers group by proximity, similarity, enclosure and connection before they read a label.
- What does the eye land on first, and is that the point? One contrasting element draws attention; five contrasting elements draw none.
- Is color doing one job (a category, an emphasis, a scale) or several at once?
- Are the labels on the data, or in a legend the reader must look up each time?

**For callouts and emphasis in text, ask:** what each callout box encloses, whether the enclosure matches a real grouping (a warning, an inference, an aside) or is used for emphasis, whether a reader can tell the kinds apart at a glance, how many kinds there are (more than three and the distinction is lost), and whether bold inside tables and paragraphs marks one thing per block or everything.

**Smells:** a finding carried by pie-slice angle or bubble area when bars would do; a rainbow palette on an ordered quantity; red and green as the only distinction; a legend of eight colors; direct comparison across two panels with different scales; gridlines and borders as heavy as the data; everything bold.

**Strengths to name:** the key comparison on one axis; a single accent color on the one thing that matters; direct labels; small multiples on a shared scale; sorted bars.

**Grounding:**
- William Cleveland and Robert McGill, "Graphical Perception" (*Journal of the American Statistical Association*, 1984): the ranking of elementary perceptual tasks, from position on a common scale (most accurate) down to shading and color saturation.
- Jacques Bertin, *Semiology of Graphics* (1967; English 1983): the visual variables (position, size, value, texture, color, orientation, shape) and what each can and cannot encode.
- Colin Ware, *Information Visualization: Perception for Design* (2004; 4th ed. 2020): preattentive attributes and Gestalt grouping as the mechanics behind "what the eye sees first".
- Cynthia Brewer, ColorBrewer (Harrower and Brewer, 2003): sequential, diverging and qualitative palettes chosen for the kind of data.

**Where this lens breaks:** When the reader has time and the figure is for exploration rather than a single claim, a richer encoding (several channels, many categories) can be right. Judge against the purpose from the map, and against the medium: a projected slide gets five seconds, a page in the hand gets minutes.

---

## 4. Integrity

**Question:** Does the visual show the data honestly, and would a careful reader draw the same conclusion from the numbers as from the picture?

**Ask:**
- Where does the axis start, and does the truncation exaggerate a difference? Bars must start at zero; lines may not need to, but the choice should be visible.
- Are two measures on two y-axes, and does the scaling of each decide the story?
- What range of time or population was chosen, and what happens to the finding if the range moves?
- Is the size of the effect in the picture proportional to the size in the data (Tufte's lie factor)?
- Does 3D, perspective, or an icon's area distort magnitude?
- Where is the source and the as-of date, and does the chart say what was excluded?
- Does the text's claim match what the chart can support (a correlation shown, a cause claimed)?

**Smells:** truncated bar axes; dual axes with no justification; a trend from three points; a cherry-picked window with no wider context; a percentage with no base; "up to" and "as much as" framings; no source line; a map colored by raw counts that only shows where people live.

**Strengths to name:** zero-based bars; a stated and justified axis choice; the source and as-of date under every data visual; uncertainty shown where it exists; the wider context shown beside the window the argument needs.

**Grounding:**
- Edward Tufte, *The Visual Display of Quantitative Information* (1983): the lie factor, graphical integrity, the data-ink ratio.
- Alberto Cairo, *How Charts Lie* (2019): charts that mislead by being poorly designed, by displaying dubious data, by displaying insufficient data, by concealing uncertainty, and by suggesting misleading patterns.
- Darrell Huff, *How to Lie with Statistics* (1954): the gee-whiz graph and the one-dimensional picture, still the clearest catalogue of the basic tricks.

**Where this lens breaks:** A truncated axis is sometimes the only way to show a real but small change that matters (a 0.3 percent shift in a metric where 0.3 percent is a lot). The lens asks that the choice be visible and justified, not that it never be made.

---

## 5. Cognitive load

**Question:** Does the reader spend their attention on the claim, or on decoding the page?

**Ask:**
- What on this slide or figure does not carry the message? Gridlines, borders, backgrounds, logos repeated on every page, icons that decorate, labels that repeat the axis.
- Is the explanation next to the thing it explains, or in a legend, a footnote or a different slide?
- Does the slide say in words what the figure already shows (redundancy), or say in words what the figure does not show (a missing signal)?
- How many ideas is one slide or figure carrying? One is right for a projected slide; a document figure can carry more if the caption walks the reader through it.
- Is the reader told where to look (an annotation, a highlight, an arrow) when the figure is dense?

**Smells:** chartjunk; a legend across the room from the lines; six bullets and a chart on one projected slide; the same number in the title, the chart and the caption; a dense figure with no annotation; animations and builds that hide what the eye needs to compare.

**Strengths to name:** high data-ink; labels on the data; one idea per projected slide; a dense figure with a guided reading in its caption; annotations that point at the finding.

**Grounding:**
- Edward Tufte, *The Visual Display of Quantitative Information* (1983) and *Envisioning Information* (1990): chartjunk, the data-ink ratio, small multiples, layering and separation.
- Richard Mayer, *Multimedia Learning* (2001; 3rd ed. 2020): the coherence principle (cut what does not serve the point), signaling (cue what matters), spatial and temporal contiguity (put words next to the pictures they explain, at the same time), redundancy (do not narrate the same words that are on the screen), segmenting (let the reader take it in parts).
- John Sweller, cognitive load theory (1988; Sweller, Ayres and Kalyuga, *Cognitive Load Theory*, 2011): extraneous load competes with the load the material itself needs.

**Where this lens breaks:** A figure made for experts who will study it (a scientific plot, an engineering drawing) can carry far more than a figure for a decision-maker with five seconds. Set the load against the reader and the medium from the map.

---

## 6. Narrative and sequence

**Question:** Do the visuals, in the order the reader meets them, tell the story the map says the artifact is telling?

**Ask:**
- List the visuals in order and read only their titles. Is that the story? If the titles are topics (lens 1), read the visuals themselves and ask the same. For a document with few or untitled visuals, run the same test on the headings; claim-shaped headings that read as the story are a strength to name.
- Where is the decision point, and is the visual that makes the case sitting at it?
- Does each visual build on the one before (same axes, same entities, one change at a time), or does the reader start over with each?
- Is the whole shown before the parts, and are the details available without being forced on everyone?
- For a diagram, does the reader know where to start reading it, and does the layout follow the order of the story (left to right, top to bottom, cause before effect)?
- Does the artifact go from what is to what could be, and back, or is it a list?

**Smells:** the same procedure or structure described twice at different granularity, far apart, with the overview last; a deck whose chart titles in sequence make no sentence; the key visual in the appendix; every chart on a different scale or set of categories; the summary visual after the ask instead of before it; a diagram with no entry point; a timeline that runs right to left; a "journey" slide that is a row of icons.

**Strengths to name:** titles that read as the story in order; a summary visual at the decision point; consistent entities and scales across a sequence; a diagram with an obvious reading order; progressive disclosure from overview to detail.

**Grounding:**
- Barbara Minto, *The Pyramid Principle* (1987): the answer first, then the grouped reasons, then the support; the same order applies to the visual sequence.
- Nancy Duarte, *Resonate* (2010) and *slide:ology* (2008): the alternation between what is and what could be as the shape of a persuasive sequence; one idea per slide; the slide as a visual aid to a spoken story versus the slidedoc read alone.
- Jill Larkin and Herbert Simon, "Why a Diagram Is (Sometimes) Worth Ten Thousand Words" (*Cognitive Science*, 1987): a diagram pays when it puts related information in one place, so the reader searches and infers less; a diagram that scatters related things pays nothing.
- Ben Shneiderman, "The Eyes Have It" (1996): overview first, zoom and filter, then details on demand.
- Scott McCloud, *Understanding Comics* (1993): the reader does the work between frames; the transitions between one visual and the next are where the story is made or lost.

**Where this lens breaks:** A reference document or a dashboard is not read in order. Review those for findability (can the reader get to the visual they need) rather than for sequence.

---

## 7. Layout, hierarchy and typography

**Question:** Does the page tell the reader where to look first, second and third, and can the eye move through it without effort?

**Ask:**
- What is the reading order the layout implies, and does it match the order the content needs?
- Is there one visual hierarchy (size, weight, position) and does the most important thing sit at the top of it?
- Is there enough space for the eye to separate groups, or does everything touch?
- Are things aligned to a grid the reader can feel, so differences in position mean something?
- Is the type readable at the distance and size the medium gives it (projected across a room; a phone; a printed page)? Are there more than two or three type sizes and weights doing work?
- For a document: do figures sit beside the text that discusses them, and do they stand alone with their captions?

**Smells:** text in a projected slide below about 24 points; five type sizes; a slide filled edge to edge; a figure two pages from its discussion; a "please see figure 4" with figure 4 on the next page; centered paragraphs; emphasis by all caps and color at once; a page where the title is the smallest thing.

**Strengths to name:** a clear first thing on every page; generous margins and consistent spacing; two type sizes doing all the work; figures next to their text; alignment that makes position meaningful.

**Grounding:**
- Jean-luc Doumont, *Trees, Maps, and Theorems* (2009): visual hierarchy, the grid, and the difference between a document and a slide.
- Nancy Duarte, *slide:ology* (2008): the grid, whitespace, contrast and hierarchy on a slide.
- Edward Tufte, *The Cognitive Style of PowerPoint* (2003): the slide format's low resolution forces fragments; a document carries an argument that a deck cannot.
- Robin Williams, *The Non-Designer's Design Book* (1994; 4th ed. 2014): contrast, repetition, alignment, proximity, as the smallest usable vocabulary for layout.

**Where this lens breaks:** The fixed-template rule. In most corporate settings the master, the fonts and the color blocks are not the author's to change. Review the order of content, what goes on each page, where emphasis falls and how figures are designed, and put the template's faults in one line under "Where the lenses don't fit".

---

## 8. Diagram semantics

**Question:** In a diagram of a system, a process or an organization, does every box and every line mean one stated thing, at one level of abstraction?

**Ask:**
- What does an arrow mean here: data flow, a call, a dependency, a sequence, authority? Is it the same meaning everywhere on the diagram?
- Are all the boxes the same kind of thing (all services, all teams, all steps), or is a system drawn beside a person beside a database beside a goal?
- Is there a legend, or is the notation one the reader already knows (and is that stated)?
- Could the diagram be wrong? A diagram that every possible system would satisfy says nothing.
- Is the level of abstraction consistent, and is the reader told which level they are at (the whole system in context, its major parts, the inside of one part)?
- Does the diagram show the thing the text discusses, or a generic version of it?

**Smells:** boxes and arrows with no legend and arrows of several meanings; a "cloud" labelled with the vendor's name standing in for the architecture; mixed abstraction levels; the logo-wall diagram; a diagram that shows no failure path, no boundary, no direction; a flowchart with no decision; an org chart drawn as an architecture.

**Strengths to name:** a stated notation or a legend; one meaning per line style; consistent abstraction per diagram with a set of diagrams at increasing depth; boundaries drawn where trust or ownership changes; a diagram that makes a specific claim the text then relies on.

**Grounding:**
- Simon Brown, the C4 model (c4model.com, 2011 onward): context, containers, components and code as four levels of abstraction, each diagram at one level, with a notation stated on the page.
- Gregor Hohpe, *The Software Architect Elevator* (2020): an architecture diagram is a model with a chosen viewpoint, so it must leave things out to say anything, and a line must mean one thing; boxes and lines with no semantics are decoration dressed as architecture.
- Jill Larkin and Herbert Simon (1987), as in lens 6: the value of a diagram is in locality; a diagram whose related parts are scattered has lost the reason to be a diagram.
- Gene Zelazny, *Say It With Charts*, on concept visuals: process, flow, interaction and structure diagrams as distinct forms with distinct rules.

**Apply it to the review's own sketches.** Before a sketch ships, check it against these questions: one meaning per arrow, one kind of box, a stated entry point, and a claim it could get wrong.

**Where this lens breaks:** A sketch in a working session or an early idea does not need a legend. A diagram made for a decision, a review or an external reader does. Size the ask to the stage from the map.

---

## 9. Access and medium

**Question:** Can every intended reader, on the device or surface they will actually use, see what the visual is for?

**Ask:**
- Does any finding depend on distinguishing red from green, or on hue alone? About one in twelve men cannot.
- Is the contrast between text and background, and between data and background, enough to read in a bright room or on a phone?
- Does the page have alt text or a caption that carries the finding for a screen reader, a text-only mail client or a search index?
- Does the visual survive grayscale printing, a small screen, a projector that washes out pale colors, a thumbnail in a chat? Does a table with four or more columns survive phone width, or does it scroll sideways and lose its row leads?
- Is the artifact going to be read in the medium it was designed for, and if several (projected, then mailed), does it work in each?

**Smells:** red and green as the only distinction; pale yellow on white; six-point axis labels; charts as images with no alt text on a public page; a dashboard designed for a wall shown on a laptop; a slide that only works with the speaker's narration, mailed as a PDF.

**Strengths to name:** a color-blind-safe palette with a second channel (shape, label, pattern) on the key distinction; contrast that passes on a phone; alt text that states the finding; a figure that still works in grayscale.

**Grounding:**
- Web Content Accessibility Guidelines 2.x: contrast of 4.5:1 for text and 3:1 for graphical objects; the "use of color" criterion, which requires that color not be the only means of conveying information.
- Masataka Okabe and Kei Ito, "Color Universal Design" (2008): the eight-color palette distinguishable under the common forms of color-vision deficiency.
- Cynthia Brewer, ColorBrewer: palettes marked for color-blind safety, print safety and photocopy safety.
- Nicolas Rougier, Michael Droettboom and Philip Bourne, "Ten Simple Rules for Better Figures" (*PLoS Computational Biology*, 2014): know your audience, identify your message, adapt the figure to the support medium, captions are not optional.

**Where this lens breaks:** The fixed-template rule applies to palette and type. Even then, the second channel on the key distinction, the alt text and the figure's own design are the author's, and the lens reviews those in full.
