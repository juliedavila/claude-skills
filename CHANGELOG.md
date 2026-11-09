# Changelog

Versions follow [Semantic Versioning](https://semver.org). A new skill or a new workflow in an
existing skill is a minor bump; a fix to an existing skill's text or tooling is a patch.

## 0.4.0 - 2026-11-09

- Added **VisualizeReview**: a review of the visual layer of anything made for human eyes (decks,
  documents, pages, dashboards). Nine lenses from message and form fit through perception, integrity,
  cognitive load, narrative order, layout, diagram semantics and access, with a fixed-template rule
  for what the author cannot change. Missing visuals are findings, each with a sketch (Mermaid or a
  text layout) from a Sketches reference. The extractor gains `--inventory`, a per-slide or
  per-section count of pictures, charts, diagrams, tables and words for `.pptx` and `.docx`, and of
  figures, tables, callouts and code blocks per section for Markdown and HTML.
- A cold run against a public research brief found seventeen seams in the first draft, fixed before
  release: table and callout questions in the lenses, a Markdown inventory, the sketch cap rule, and
  a severity wording that contradicted Quick in all three review skills.

## 0.3.1 - 2026-11-09

- Prompt audit of all twelve skills. Descriptions trimmed under the listing cutoff (ResilienceReview
  was being truncated); thinker rosters moved out of descriptions and into the lens files.
- FirstPrinciples, RedTeam, RootCauseAnalysis and SystemsThinking bodies deduplicated: one
  statement of each method, one routing table, merged gotchas, stale date stamps and leftover
  notification lines removed. Attributions made precise (first principles predates its popularizer;
  the Five Whys credit is stated as contested; named works replace "tradition").
- BitterPillEngineering no longer names one harness's settings keys; LearningConditions treats the
  companion Internalize skill as optional.
- WritingPartner keeps every rule and template; the research sentences behind the rules now live
  only in References/evidence.md, which already carried them with sources.

## 0.3.0 - 2026-11-09

- Added **ResilienceReview**: a safety-science and resilience-engineering review of designs,
  architectures, operating models and defect or vulnerability programs. Nine lenses with the defect
  lifecycle as a first-class lens, an optional escape-point field on defect findings, two workflows
  (Review, Quick) and the same `.pptx`/`.docx` extractor as DeliveryReview.
- DeliveryReview now points its production lens at ResilienceReview for proposals whose subject is
  failure, recovery or defect handling.
- Both review skills: the Quick workflow now loads the finding rules, delivers its map, has its own
  chat skeleton with a lenses-applied line, and no longer conflicts with the format file over writing
  a file. Intake gains a README row, a citation convention for plain Markdown and a rule for dateless
  artifacts. Found by a cold run of ResilienceReview against a public README.

## 0.2.0 - 2026-11-09

- Added **DeliveryReview**: a lean and agile review of proposals that change how software is
  built, shipped or run. Two workflows (Review, Quick), nine lenses, a `.pptx`/`.docx` extractor.
- Added **WritingPartner**: drafting, critiquing and editing business writing, with a rubric,
  voice profile and reviewer prompts in its References.
- Added **DalioDecisionMemo**, **DalioStrategyAnalysis** and **DalioDiagnosisPrinciples**, moved here
  from a separate Dalio writing-skills repo.
- Skills can now be authored in this repo directly. The port script refuses to overwrite one from
  a private copy, and the install script links it back into the local config dir.

## 0.1.0 - 2026-11-04

- Initial public release: FirstPrinciples, RedTeam, SystemsThinking, RootCauseAnalysis,
  BitterPillEngineering, LearningConditions. Port, check and install scripts; leak guard with
  built-in patterns plus an out-of-repo personal denylist; pre-commit hook.
