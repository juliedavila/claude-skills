# Changelog

Versions follow [Semantic Versioning](https://semver.org). A new skill or a new workflow in an
existing skill is a minor bump; a fix to an existing skill's text or tooling is a patch.

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
