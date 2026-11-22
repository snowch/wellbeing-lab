# Wellbeing Lab

Eight practical labs for personally chosen changes, with short lessons, case feedback, guided practice, editable plans and private observations.

**Live site:** https://snowch.github.io/wellbeing-lab/

| Lab | Address | Main application |
| --- | --- | --- |
| Cravings | `cravings/` | Nine lessons, check-ins, four practices and optional experiments |
| Starting and Returning | `starting-and-returning/` | Curiosity question, prepared first action, visible result, restart note |
| Focus and Attention | `focus/` | A feasible focus window and returning after interruptions |
| Learning and Practice | `learning/` | Retrieval, feedback and distributed practice |
| Decisions and Commitments | `decisions/` | Alternatives, forecasts and review conditions |
| Emotional Responses | `emotions/` | Ordinary feelings, interpretations and chosen responses |
| Communication and Relationships | `relationships/` | Listening, checking meaning and clear requests |
| Rest, Enjoyment and Balance | `rest-and-balance/` | Recovery and enjoyment without productivity scores |

## Learning design

These are voluntary learning and reflection tools, not a course that must be completed before taking action. Each new lab offers four short lessons (Starting and Returning has six), an everyday case with feedback, a domain-specific four-step practice and a plan that considers feasibility and barriers. Plans cannot remove missing resources, unsafe conditions or excessive demands.

Research is available in collapsed notes alongside the relevant lesson. Each note separates the finding, proposed application and remaining uncertainty, with links to original research. The combined practices and self-reports have not been validated as interventions or diagnostic measures. Outcomes inform a personal choice, rather than an ability score or general causal claim.

Starting and Returning includes a working unsigned 32-bit addition model, the `0xFFFFFFFF + 1` versus `0 + 0` comparison, an adjustable session timer and a printable checklist. Its optional six-pair comparison coin-flips the order of question prompts and plain instructions within each pair. Starting within five minutes is the primary observation; finishing and wanting to return are secondary. Unavailable opportunities are separate from failures. Editing a slot updates its entry; separate comparisons are never pooled. Restart notes and the approximately fifteen-minute boundary are proposed applications, not demonstrated optimal settings.

## Data and migration

Entries remain in page memory by default: reloading, navigating away from a lab or closing the tab clears them. Optional device saving, JSON export and scoped deletion are available within each lab. There are no accounts, analytics or application backend. No external fonts, scripts or embeds are required.

Cravings retains its original **`cravings-lab-v1`** localStorage key and data model. Renaming the repository and moving the page does not change the `snowch.github.io` origin, so existing accessible saved entries remain available. Its original six lessons, support links, practices and experiment history are preserved. Other labs use **`wellbeing-lab-{slug}-v1`** keys; deleting one lab leaves others untouched. The hub does not read entries.

Device storage is browser-specific, not encrypted or isolated from other applications on the same origin. Avoid device saving in a shared browser profile. Browser clearing/private mode may erase entries. Export files contain the entries; this version does not import them. Storage failures leave current data in memory and retain export/deletion controls without falsely claiming to save.

The old `/cravings-lab/` website path is handled by a redirect in the main `snowch.github.io` repository, preserving hash routes. This repository must not recreate an old-named repository that would interfere with GitHub's repository redirect.

## Cravings scope

The original lab is informed by the supplied *Sugar and Chocolate “Addiction”* research synthesis (14 November 2026), with links to NICE NG69, NHS guidance and craving reviews. It remains adult self-reflection, not diagnosis or eating-disorder treatment. No food bans, weight targets, calorie counts or abstinence streaks. Hunger is a reason to eat, not a reason to complete a delay exercise. Clinician-delivered care evidence does not validate this app as an equivalent intervention.

## Develop and verify

Requires Node.js 24 and Python 3 for the local test server.

```sh
npm ci
npm run check
npm run serve
```

Open http://localhost:4173. These are static HTML/CSS/JavaScript pages; each lab has a real directory URL, with hash routes for its screens. `scripts/build.mjs` generates the hub, seven app shells and printable card from `shared/content.js` and `catalogue.json`.

```sh
npx playwright install chromium
npm test
node scripts/build.mjs --dist
```

Tests exercise the original Cravings flows and data compatibility, every new lesson's feedback, layouts from 320 to 1440 pixels, axe checks, tab-only mode, opt-in persistence, export, scoped deletion, escaped notes, comparison balance and summaries, carry results, timer behaviour and unavailable storage. Automated checks do not establish complete accessibility compliance or clinical validation. Outside CI, Playwright uses `/usr/bin/chromium`; adjust `executablePath` for another local installation.

Pushes to `main` run tests then deploy `dist/` through `.github/workflows/pages.yml`; pull requests test without deployment. Pages source is **GitHub Actions**. No runtime server or package dependency is deployed.

## Files

- `cravings/`: migrated original application, content, model and styles.
- `shared/content.js`: seven new labs' teaching content, cases, feedback, research notes and sources.
- `shared/lab.js`, `shared/model.js`, `shared/style.css`: shared interactions, state and visual design.
- `scripts/build.mjs`: deterministic static output generation.
- `catalogue.json`: hub and directory descriptions.
- `starting-and-returning/checklist.html`: generated printable session card.
- `tests/`: desktop and mobile browser and accessibility checks.

## Sugar choice and implementation

Three linked Cravings pages compare [cutting down, swapping and cold turkey](https://snowch.github.io/wellbeing-lab/cravings/#lesson/reducing-sugar), [choose a first approach](https://snowch.github.io/wellbeing-lab/cravings/#lesson/choosing-a-sugar-approach), then [prepare an editable plan](https://snowch.github.io/wellbeing-lab/cravings/#lesson/putting-a-sugar-plan-into-practice). The approaches can overlap; they do not assign a personality type or diagnose dietary suitability.

The decision guide addresses the routine’s purpose, past experience, amount decisions, satisfaction and practical access. Editable examples for each approach cover the target, action, cue, preparation, alternative, fallback and review. Drafts remain in memory and join the existing version-1 experiment record only after review and explicit starting. An active experiment cannot be overwritten. No new storage schema or automatic saving is introduced.

Collapsed notes distinguish NHS guidance, limited beverage-liking trial outcomes (including commercial funding), Cochrane evidence on the home drink environment and the specific scope of NICE binge-eating treatment advice. A personal trial does not establish a universal winner.
