# Slide-level rules and the slide spec

Use this file in Slides mode, after the storyline is agreed. A spec describes each slide well enough that a person or a deck tool can build it without guessing what the slide is for. It does not design the chart: it says what the visual has to prove and names its form.

Grades follow `evidence.md`.

## Rules for a single slide

**The title is the claim.** A full sentence the body then supports, two lines at most on a projected slide. Dividers and discussion slides are the exception: their title is the question the section or the room will answer. In the one controlled test, a sentence headline over visual evidence beat a topic title over bullets on comprehension, with fewer misconceptions and better recall ten days later (experimental, one study by the method's authors, engineering students). Later classroom studies outside that lab mostly agree. No study isolates the headline from the body.

**The body is the evidence for the title.** One visual, one table or one short block of text that makes the title believable. If the body supports a different claim from the title, one of them is wrong. If nothing in the body would change were the title deleted, the slide is decoration.

**One step of the argument.** Presenting complex material in segments helps (strong). This is the best support there is for "one idea per slide", and it is indirect.

**Show structure as structure.** A sequence, a comparison, a hierarchy or a timeline belongs in a diagram or a table. In the one experiment on managers, a strategy shown as a diagram was received more favourably than the same words as bullets, with no gain in understanding (experimental, one study, 76 managers). Bullets are for lists that are lists.

**Put the words next to the thing.** Label the chart directly and annotate the figure where the point is. Text integrated with the part it explains beats a separate legend, caption or facing column (strong).

**Mark the one thing to look at.** A highlight, an arrow, a single accent colour on the element the title is about. Cues that mark what matters raise learning by a small to moderate amount (strong).

**Cut what is interesting and beside the point.** Decorative pictures, asides and extra facts lower learning of the main material (strong in education research, untested for buy-in). Keep a story only where it carries the argument.

**Every change means something.** A change of colour, size or layout tells the audience that something differs. Real decks break this more than almost any other rule. Keep the same entity the same colour and shape through the deck.

**The caveat that would change the decision goes at the top.** In the title, or beside it at the same size. Never in a sub-bullet or a footnote.

**Numbers carry their context.** The unit, the period, the comparison that makes the number mean something, and the source. Uncertainty as a range with what it rests on. A probability word with its number beside it.

**Pair the deciding number with a case.** When the decision comes after the meeting, one concrete case beside that number helps it survive in memory (experimental).

**The slide survives being lifted out.** Decks get reordered and forwarded, so each slide carries its own claim, units, date and source.

## Rules that depend on the medium

| | Presented live | Read alone |
|---|---|---|
| Words in the body | A few key terms the speaker also says | Full sentences beside the visual |
| A figure plus text | Never the script beside a figure | The explanation beside the figure |
| What must be remembered | Stays on screen, or is brought forward to the slide that needs it | Already on a page the reader can return to |
| Builds | Optional. Worth it for a diagram too dense for a newcomer to take in at once: one layer at a time, then the whole left up. A diagram that reads clearly as one picture needs none. Not for bullet lists as a habit | A run of pages, one layer each, when the diagram is that dense |
| How to read the chart | In the notes, for the speaker to say | Printed on the page |

Spoken words vanish. Anything the audience has to hold or compare while listening should stay visible (experimental). The evidence on step-by-step reveals is split: segmenting supports them for complex explanations, and one classroom study found animated bullet builds did worse than showing the slide whole (contested).

## Kinds of slide

A storyline uses a small set of slide kinds. Naming the kind in the spec keeps each slide to one job.

| Kind | Its job | Carries |
|---|---|---|
| **Opening** (live) | Frame and answer | The question, the answer or the ask, and why now |
| **Summary page** (read alone) | The whole deck for a reader who stops here. In a reading deck this is the opening: one page, one job | The answer or the ask, why now, the main claims as sentences, and the reading time |
| **Map** | Show the whole and how the parts relate | One diagram that returns with the current part marked |
| **Claim and evidence** | Establish one reason or one finding | A claim title and one visual |
| **Case** | Make a number concrete | One real example and the base rate it stands for |
| **Comparison** | Set options against criteria | One table, options as columns, the same few criteria as rows |
| **Objection** | Answer the strongest counter-argument | The objection in the audience's words, and the answer |
| **Risk** | State the downside | Size, likelihood, remedy, and what would reverse the recommendation |
| **Decision** | Ask | Who does what, by when, at what cost, and the next step |
| **Discussion** | Get the room's view | The specific question, and what the answer will change |
| **Divider** | Mark a section | The section's question |
| **Backup** | Hold detail | Whatever a sceptical reader might ask for, linked from its parent |

## The slide spec

One block per slide. Write real content: real claims, real labels, real numbers from the author's material. Where a fact is missing, write a query and never fill it in.

```markdown
### 4 · Claim and evidence
**Title:** Onboarding time, not price, explains the Q3 churn: accounts set up in under three days stay at twice the rate.
**Job:** First of three reasons. Answers "why did churn double?"
**Shows:** Retention at 90 days by onboarding time, four sorted bars. The under-three-days bar marked in the accent colour. Direct labels, no legend.
**On the slide (live):** The title, the chart, one label: "2x".
**On the page (read alone):** The title, the chart, and two sentences beside it: how the cohorts were defined, and that price changes in the same period show no such split (see backup B2).
**Speaker says:** How to read the bars. The one account that makes it concrete: [A3: which account can we name?]
**Stays visible:** The 2x figure, carried to slide 7 where the cost of the fix is compared with it.
**Source:** Billing and onboarding logs, Q1 to Q3. As of [A4: date].
**Backup:** B2, price changes against churn.
```

Field notes:

- **Title** is the claim from the agreed storyline. If writing the spec changes the claim, update the storyline.
- **Job** names the slide's place in the argument and the question it answers. A slide with no job is cut.
- **Shows** names the form in plain words (sorted bars, a two-column table, a flow), the comparison, the sort and the one marked element. It does not style anything. The sketch table in `VisualizeReview` lists forms, and opening it is optional.
- **On the slide** and **On the page**: write the one for the deck's primary medium, and both when the same deck will be rendered twice. A pre-read page that later serves as meeting backup is specified as read-alone only.
- **Speaker says** holds what would otherwise be text on a live slide. For a read-alone deck, leave this field out: its content is on the page.
- **Stays visible** records anything a later slide depends on. For a read-alone deck, use it to note what later pages repeat, or write "none".
- **Tracker**: in a reading deck longer than about ten pages, add one line to "On the page" naming the section strip and which section is marked.
- **Source** is never optional for a number.
- **Queries** to the author are numbered A1, A2 and continue the numbering from the storyline.

Return the spec with the storyline table at the top (or a pointer to it when it sits just above in the same reply), so the author can still run the titles test, and the queries collected at the end. Before the pages exist, give a word budget per page and the reading time it implies.

## Before returning a spec

- The titles alone, read in order, still make the argument.
- Each body supports its own title.
- No slide has two jobs.
- Every number has a unit, a period and a source. Every uncertain one has a range, or a plain statement of what is unknown where no range can be defended.
- Every term is defined before it is used, in the form the medium calls for.
- For a decision: the ask is an action, the strongest objection is answered, doing nothing is an option with a cost, and the main weakness is stated.
- For read-alone: the eight items in `medium.md` are on the pages.
- For live: no slide holds the script, and anything a later slide needs is carried forward.
- Every query to the author is listed.
