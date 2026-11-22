# Clear wording and uncluttered UI audit

Reviewed Cravings Lab at `6883884` on 17 November 2026. The intended readers are adults using a self-reflection app. The review assumes no clinical, research or web-storage vocabulary. It includes learner-facing copy in `lessons.js`, the rendered states and feedback in `app.js`, and navigation, metadata, footer copy and the deletion dialog in `index.html`.

## Opening pass

| Surface | Copy and states checked | Findings |
| --- | --- | --- |
| Home and site shell | First visit, saved-data mode, active experiment, navigation, footer and page metadata | The first action and destination used different names. Numbered cards and slogans repeated the available actions. The page and metadata implied a stronger privacy promise than local browser storage supports. |
| Check in | Empty form, optional ratings, situation, mood, eating experience, food and notes. Blank submission, ordinary result, hunger or a missed meal, feeling unable to stop, failed save | The details disclosure repeated the vague context label. The rating directions needed to spell out the no-rating route. The result button led to Reflect but did not name the recorded check-ins. |
| Practise | Practice list, all three steps and optional reflection for each of Notice, Noticing a thought, Checking needs and Pause. Timer before start, running, stopped, expired and skipped. Empty reflection selection and saved or discarded reflection | Decorative badges competed with the activity. Some practice labels assumed familiarity with cognitive defusion. The timer directions needed to name Continue as an immediate option. |
| Experiments | Each preset, custom form, validation, active plan, edit, cancel, save review, stop, completed and stopped history | The heading did not name the destination. A cue experiment suggested changing the cue while the actual plan changed the decision before watching TV. When a plan is active the chooser is unavailable. |
| Reflect | No data, entries with and without situations, recorded values and blanks, helpfulness choices, loss-of-control prompt, added reflection, item removal and failed writes | A repeated highlight and chart described the same observations. The denominator and interpretation belong beside the actual counts. Recorded check-ins can lack the situation field. |
| Support and evidence | Main and expanded research text, GP and urgent-care directions, links and care limits | Practical support belongs before optional source detail. Labels can name what readers will find without relying on evidence grades or clinical shorthand. NICE advice about regular meals and avoiding weight-loss dieting applies to binge-eating disorder treatment. [NICE NG69](https://www.nice.org.uk/guidance/ng69/chapter/Recommendations) |
| Your data | First use, tab memory, older version-1 entries, device saving, unavailable storage, retry, disabling, export, item removal and all-entry deletion with cancel | On the published app a blocked write could still say “Reflection saved”, keep the older localStorage copy, and hide the switch that removes it. The success or failure message did not identify which copy changed. The delete dialog heading referred only to saved entries. A later walk with access blocked entirely found that tab deletion could claim to remove an inaccessible browser copy. |
| Learn | Lesson selector, all lesson links, previous and next navigation, optional question and outcome for each answer, references | The optional check is an action about an example. The three options and their responses should remain distinct and the follow-up link should give an available next action. |

The opening pass used the source for the conditional branches and a published Chromium walk at 390 px. The walk visited 18 routes, tried all 18 answer options and used all 12 practice steps. A seeded version-1 record with blocked writes reproduced the misleading save message and unavailable mode switch. The original desktop and phone test suite passed 20 scenarios. It did not cover that blocked-write state.

### Six lesson walkthroughs

| Lesson | Wording and action checked |
| --- | --- |
| Craving, habit or loss of control | Defined each experience by how it feels and what happens. The examples distinguish a desired food from feeling unable to stop. All three answer responses describe what evidence the example does or does not give. The link names Check in and its optional details. |
| How cues become habits | Defines a cue before asking learners to apply the term. The example identifies a situation, response and immediate outcome. The feedback names the evenings to compare and the question to ask. Follow-up directions name the suggested plan and explain when the chooser is available. |
| Start with enough food | Makes eating straight away available in the story and feedback. Keeps clinical guidance in its treatment context. The link names the actual needs practice. |
| A thought is not an instruction | Shows the words of the exercise before naming cognitive defusion. The question asks what the person noticed even while the urge stayed. The study summary distinguishes short laboratory results from sustained everyday benefit. |
| Patterns are clues, not proof | Explains recording choices and what the counts describe. The worked example proposes a question without claiming causation. The link tells readers where the situation counts appear and how to record a situation. |
| Make change an experiment | Defines one small change and a question. The example and feedback identify what a useful review records. The next action covers both the chooser and an already active plan. Professional support remains available throughout. |

## Closing pass against the review criteria

| Criterion | Revision and check |
| --- | --- |
| Clear purpose and actor | Use task names in the shell and page headings. Keep action text next to each form. Presets open a suggested plan. Readers choose fields and start the experiment. The timer visibly starts after Start timer. |
| Concrete and possible actions | Followed the controls named by all six lesson links. A recorded situation is required for the Reflect comparison. An existing active plan hides the new-plan chooser. Ran the television example with its suggested plan and with edited wording. |
| Explain comparisons and quantities | Verified blank and zero ratings show as “Not recorded” and “0/10”. The situation count describes entries mentioning that situation. Practice counts identify which answer options are included. Personal observations and clinical evidence retain their stated limits. |
| Terms, claims and examples | Reviewed each title, opening, paragraph, example, question, option, response, reference label and next action. Define cue and cognitive defusion where used. The optional practices can be helpful while an urge stays. Clinical support and urgent-care routes remain directly visible. |
| One clear progression and useful controls | Check in leads into the saved or tab-only result and Reflect. Each practice shows a step and one main action. Open a suggested plan before editing, then start or review it. Drop home slogans, duplicated destinations, practice badges and the repeated top-context card. |
| Essential content visible | Instructions, outcomes, counts, next actions and necessary storage notices remain visible. Optional mood/eating/notes, reflection questions, plan editing, additional research use descriptive disclosures. Feedback clears when readers leave its page, so an experiment message cannot cover support instructions. |
| Feedback and recovery | A concept answer describes the example. A blocked write identifies the tab-only change and the older browser copy. Retry or switch to tab-only remains available, as do export and deletion. Seeded version-1 data retains its shape and labels. With browser storage access blocked, the privacy page and confirmation describe tab-only deletion. The result reports that the tab was cleared and names the browser settings needed to remove any inaccessible copy. |
| Readable across sizes and keyboards | Walked the original and edited plans, all six activity destinations, all four practices, answer feedback, timer focus and support order in Chromium at 390 px and 1440 px. The Support link stays visible in the narrow navigation. The existing design has one theme. Code editors and coding-example checks are inapplicable to this app. |

## Functional verification

- `npm run check` verifies the JavaScript syntax. `npm test` passed 22 desktop and mobile Chromium scenarios, including axe checks and the seeded version-1 retry and removal case. The app uses one theme and has no theme control.
- The closing manual Chromium walk checks the 18 routes at both viewport widths. It follows all six lesson links, chooses all 18 answers with the keyboard, starts and stops the optional timer with visible focus, completes and discards each practice, records a zero rating, and starts and stops an edited plan. The support and evidence order remains available in the reading sequence.
- Browser coverage uses Chromium and test data. The functional checks establish observable navigation, rendering and storage behavior. Learning effectiveness and clinical outcomes remain unmeasured.

## Sugar-reduction addition — 22 November 2026

The seventh lesson, `reducing-sugar`, addresses a specific gap: readers can distinguish gradual reductions from a direct change, identify free sugars rather than banning all carbohydrates, and choose a bounded plan with a review condition. Its case asks readers to compare feasible approaches rather than identify a universally superior strategy. Two comparison panels stack on a phone; research remains collapsed until requested. The activity uses the existing custom-experiment flow and preserves an active plan.

Source boundaries:

- [NHS Sugar: the facts](https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/): free-sugar definitions, whole fruit/plain milk and total-sugar labels. The lesson does not turn a reduction goal into a requirement to remove all sugars.
- [NHS How to cut down on sugar](https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/how-to-cut-down-on-sugar-in-your-diet/): examples of gradual hot-drink reductions and direct swaps. Guidance examples are not a head-to-head ranking of strategies.
- [Mah et al. (2024)](https://doi.org/10.1038/s41598-024-77529-w): gradual/direct reduced-sweetness beverages over six months, with different cohort results. Liking in a beverage study does not establish abstinence, a universal strategy or long-term health effects. The evidence note discloses PepsiCo funding and employee authorship.
- [NICE NG69, 1.4.7](https://www.nice.org.uk/guidance/ng69/chapter/Recommendations#treating-binge-eating-disorder): weight-loss dieting advice during binge-eating disorder treatment. This is not generalized into a claim that every voluntary sugary-drink reduction causes binge eating.

No detox, guaranteed preference reset, abstinence streak, dietary prescription or new storage model is introduced. Review includes feasibility, satisfaction, hunger/cravings and guilt; an unplanned choice does not trigger stricter compensation rules. Individual treatment plans remain relevant where the reader already receives care.
