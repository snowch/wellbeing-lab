// Authored educational content. Understanding checks are not stored or scored.
export const lessons = [
  {
    id: 'craving-habit-control', title: 'Craving, habit or loss of control?',
    summary: 'Tell a strong desire, an automatic response and feeling unable to stop apart.',
    idea: 'Wanting a food strongly and feeling able to choose can happen together.',
    paragraphs: [
      'A craving is a strong desire for a particular food. A habit is something you start to do automatically in a familiar situation, such as reaching for chocolate when a television programme starts. Either can happen without an eating disorder.',
      'Loss of control means feeling unable to stop or to control what or how much you eat. A person who deliberately eats more than planned may still feel able to choose. Ask how eating felt to them. A food photo, portion size or glucose reading cannot tell you that.',
      'The Diagnostic and Statistical Manual of Mental Disorders (DSM-5-TR) lists binge-eating disorder and bulimia nervosa. Its diagnoses do not include “sugar addiction” or “chocolate addiction”. If you often feel unable to stop eating or feel distressed about eating, a health professional can help you understand what is happening.'
    ],
    example: 'Sam really wants chocolate after dinner, chooses to have some, and enjoys it. Alex describes feeling unable to stop eating and feels distressed afterwards. Notice how each describes their ability to choose.',
    question: 'Someone says, “I really wanted chocolate tonight.” What can we conclude?',
    answers: [
      {
        text: 'They have an addiction.',
        feedback: 'A craving describes what someone wants. To understand their experience, ask whether they felt able to choose and whether they felt distressed.'
      },
      {
        text: 'They felt a strong desire. We need more context to understand what happened.',
        feedback: 'A strong desire can accompany an intentional choice or a feeling of being unable to stop. Ask what happened and how it felt.'
      },
      {
        text: 'They should stop eating chocolate completely.',
        feedback: 'The statement describes a desire. It gives no reason to recommend a food ban.'
      },
    ], correct: 1,
    activity: 'In Check in, record a hunger or urge rating, add a detail about the situation, or do both. Under Mood, eating and notes, describe how eating felt if you want to.',
    action: 'Start a check-in', href: '#check-in',
    source: 'NICE: assessment and treatment guidance', url: 'https://www.nice.org.uk/guidance/ng69/chapter/Recommendations'
  },
  {
    id: 'cues-and-learning', title: 'How cues become habits',
    summary: 'Notice what happens just before a familiar habit and what you get from it.',
    idea: 'A cue is something that prompts a familiar response. The start of a television programme might remind you of a snack you have often eaten while watching.',
    paragraphs: [
      'Eating can become associated with a time, place, activity, feeling or social situation. Repeating a response in that setting can make it feel automatic. You might enjoy chocolate for its flavour, texture, smell or what you associate with it.',
      'Try noticing three parts of a habit. The cue could be finishing work, the response could be having chocolate, and the immediate outcome could be pleasure or a chance to unwind. This gives you a possible explanation to explore.',
      'Try changing just one part of the routine, such as when you decide what to eat. Notice whether you feel more able to choose, while continuing to eat enough and enjoy food.'
    ],
    example: 'Rae notices chocolate often appears with evening television. They try deciding what they want before starting the programme. Some evenings they choose chocolate; other evenings they want a meal or a rest.',
    question: 'Which experiment best explores a television-related habit?',
    answers: [
      {
        text: 'Ban chocolate and treat any eating as failure.',
        feedback: 'A ban removes one choice. This experiment asks whether a change in timing helps the person choose more deliberately.'
      },
      {
        text: 'Try choosing what to eat before the programme and notice whether it feels more deliberate.',
        feedback: 'Compare evenings when you decide before the programme with evenings when you decide as usual. Do you feel more able to choose?'
      },
      {
        text: 'Assume television caused every craving.',
        feedback: 'Television is a possible cue. Other factors, such as hunger or tiredness, can also change from evening to evening.'
      },
    ], correct: 1,
    activity: 'If you have no active experiment, choose Decide before watching TV in Experiments. Edit the suggested plan if you want to, then select Start this experiment. If you already have a plan, you can review it or come back later.',
    action: 'Open Experiments', href: '#experiments',
    source: 'Sugar addiction: the state of the science', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5174153/'
  },
  {
    id: 'hunger-and-restriction', title: 'Start with enough food',
    summary: 'Notice when a meal or snack could help, even if you also crave a specific food.',
    idea: 'You do not need to delay eating, reduce a craving or complete a practice to deserve food.',
    paragraphs: [
      'Hunger and a desire for a particular food can coexist. If you have missed meals or have not eaten enough, a satisfying meal or snack may be more useful than a distraction exercise. You can use the check-in to record how hungry you feel in the moment.',
      'The National Institute for Health and Care Excellence (NICE) recommends regular meals and snacks as part of cognitive behavioural therapy (CBT) for binge-eating disorder. Its guidance advises against weight-loss dieting during treatment because restriction can trigger binge eating. This is guidance for clinical care.',
      'Keep eating regularly after an episode of eating that worried you. If you often feel that you need to make up for eating, or you are unsure whether you are eating enough, a qualified professional can help. Discuss changes with your clinician if you have diabetes or are following an individual treatment plan.'
    ],
    example: 'Jo has skipped lunch and feels very hungry after work. An urge to eat chocolate is present too. Jo can eat something satisfying straight away.',
    question: 'After a missed meal, which response fits this lab’s approach?',
    answers: [
      {
        text: 'Use the pause timer to prove you can resist hunger.',
        feedback: 'A pause is optional. If you are hungry after missing a meal, you can eat without using a timer.'
      },
      {
        text: 'Skip dinner if you have already eaten chocolate.',
        feedback: 'You can still have dinner after eating chocolate. Skipping the next meal can leave hunger unaddressed.'
      },
      {
        text: 'Respond to hunger with food. Use an optional practice only if it is useful.',
        feedback: 'Food can address hunger after a missed meal. A craving practice is available whenever it feels useful.'
      },
    ], correct: 2,
    action: 'Try Check what you need', href: '#tool/needs',
    source: 'NICE: CBT for binge-eating disorder', url: 'https://www.nice.org.uk/guidance/ng69/chapter/Recommendations'
  },
  {
    "id": "reducing-sugar",
    "title": "Cutting down, swapping or cold turkey?",
    "summary": "Compare what each approach changes, where it may fit and what can make it difficult.",
    "minutes": 4,
    "idea": "Amount, replacement and timing are different choices. You can combine them without making a rule about every food.",
    "paragraphs": [
      "There are three useful questions: how much or how often will I have the item; what could take its place; and will I stop it from a particular point? Cutting down, swapping and cold turkey address different parts of the plan. They are not three fixed personality types.",
      "“Refined sugar” describes processing. For nutrition guidance, the more useful category is free sugars: sugars added to food or drinks, plus those in honey, syrups, juices and smoothies. Swapping table sugar for honey still supplies free sugars.",
      "Sugars naturally present in whole fruit and plain milk are not free sugars. Reducing free sugars does not require removing those foods or all carbohydrates. The “of which sugars” figure on UK labels includes total sugars; it does not separately measure free sugars."
    ],
    "comparison": [
      {
        "title": "Cutting down",
        "paragraphs": [
          "What changes: the amount or frequency of the same item. For example, use a little less sugar in tea and stay at that step until your review, or choose fewer of your usual sugary-drink occasions.",
          "May fit when: keeping some of the item matters, smaller changes feel acceptable, and deciding on an amount is manageable.",
          "Trade-off: measuring or renegotiating amounts can become a burden. A vague promise to “have less” is hard to follow; choose one concrete step and a review point rather than an endless taper."
        ]
      },
      {
        "title": "Swapping",
        "paragraphs": [
          "What changes: something else takes the place of the target. For example, replace the usual regular cola at lunch with a chilled drink you actually like that contains less free sugar.",
          "May fit when: the drink, snack, break or convenience is important, and an affordable, satisfying alternative is available.",
          "Trade-off: a substitute that is unpleasant or hard to obtain may not last. Check that it serves the intended goal: replacing sugar with honey does not remove free sugar, and adding water without replacing the usual drink is a different change."
        ]
      },
      {
        "title": "Cold turkey for a specific item",
        "paragraphs": [
          "What changes: stop the named item or added ingredient from a chosen point rather than reducing it in stages. For example, stop adding sugar to evening tea from Monday.",
          "May fit when: one clear boundary seems easier than repeatedly deciding an amount, you want to try it, and you have a workable way to meet the underlying need.",
          "Trade-off: an all-or-nothing rule can increase preoccupation or guilt for some people. Name the item and setting carefully; this is not a requirement to cut out fruit, milk, all carbohydrates or all enjoyment. A later unplanned choice is a reason to review, not to compensate or restart a streak."
        ]
      }
    ],
    "review": {
      "title": "The approaches can overlap",
      "steps": [
        "You can swap one usual drink at a time, combining substitution with gradual change.",
        "You can stop buying one particular drink immediately and use an alternative, combining a direct stop with a swap.",
        "The useful question is what arrangement serves your goal and is workable in your life. The next page helps you choose a first trial."
      ]
    },
    "example": "Ari wants less added sugar in evening tea. They could use a smaller amount, choose another drink, or stop adding sugar from a chosen day. Unsweetened tea could be both a swap and a direct stop of the added sugar.",
    "question": "Ari stops their usual sugary lunch drink immediately and replaces it with water. How would you describe the plan?",
    "answers": [
      {
        "text": "It combines a swap with stopping the chosen drink directly.",
        "feedback": "Swapping describes the replacement; a direct stop describes the timing. These can be part of the same plan."
      },
      {
        "text": "It must be classified as only one approach.",
        "feedback": "The approaches are not mutually exclusive. A plan can specify the replacement and whether the change happens immediately or in stages."
      },
      {
        "text": "It proves cold turkey is the best approach for Ari in every situation.",
        "feedback": "Describing a plan does not show how well it will work. Ari still needs to notice feasibility, satisfaction and whether it serves the intended goal."
      }
    ],
    "correct": 0,
    "activity": "Next, work through the decision guide. Choose a first approach using your goal, past experience and practical constraints; you can change your mind after a trial.",
    "action": "Use the decision guide",
    "href": "#lesson/choosing-a-sugar-approach",
    "research": {
      "paragraphs": [
        "NHS public-health guidance recommends reducing free sugars and describes both gradual reductions and direct swaps. These practical suggestions do not establish one approach as the best for every person.",
        "A Cochrane review found moderate-certainty evidence that making low-calorie drinks more available at home was associated with lower sugary-drink intake. That supports considering access and preparation; it does not show that any particular swap will suit every person.",
        "A 2024 paper reported two six-month randomized trials of gradual versus immediate reductions in soft-drink sweetness. Both approaches helped maintain liking for less-sweet drinks in the US full-sugar-drink cohort; findings differed in other cohorts. The trials did not compare quitting all sugar or establish a winner for long-term health outcomes.",
        "The trials were funded by PepsiCo, and several authors were company employees. Consider that commercial involvement alongside the limited outcomes and populations studied.",
        "NICE advice against weight-loss dieting during binge-eating disorder treatment applies to that clinical setting. It does not establish that every voluntary reduction in a sugary drink causes binge eating. If you receive individual dietary or eating-disorder care, keep changes consistent with that plan.",
        "The fit questions and examples in these pages are practical planning aids. They are not a validated test that assigns people to a diet or predicts which approach will work."
      ],
      "sources": [
        {
          "title": "NHS: Sugar—the facts (definitions and food labels)",
          "url": "https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/"
        },
        {
          "title": "NHS: How to cut down on sugar (gradual changes and swaps)",
          "url": "https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/how-to-cut-down-on-sugar-in-your-diet/"
        },
        {
          "title": "Mah et al. (2024): Change in liking following reduction in sweetness level of carbonated beverages",
          "url": "https://doi.org/10.1038/s41598-024-77529-w"
        },
        {
          "title": "NICE NG69: Binge-eating disorder treatment, recommendation 1.4.7",
          "url": "https://www.nice.org.uk/guidance/ng69/chapter/Recommendations#treating-binge-eating-disorder"
        },
        {
          "title": "Cochrane: Environmental interventions to reduce sugary-drink consumption",
          "url": "https://www.cochrane.org/evidence/CD012292_cutting-back-sugar-sweetened-beverages-what-works"
        }
      ]
    },
    "sugar": true
  },
  {
    "id": "choosing-a-sugar-approach",
    "title": "Which approach fits my situation?",
    "summary": "Use your goal, past experience and practical constraints to choose a first trial.",
    "minutes": 4,
    "sugar": true,
    "sugarChoices": true,
    "idea": "Choose a feasible first trial using your goal, past experience and current conditions. Review it before committing longer term.",
    "paragraphs": [
      "Start with the goal: a less-sweet drink, less automatic snacking, fewer repeated decisions, or something else you value. An approach is useful only if it serves that goal without creating costs you do not want.",
      "Then consider four things: what the routine gives you; which decisions are difficult; what happened with similar changes before; and what is affordable and available now. Wanting a particular approach is relevant, but enthusiasm alone does not supply time, food or an acceptable alternative.",
      "If missed meals or hunger are the main issue, start by meeting that need rather than tightening a sugar rule. If strict rules have brought distress, preoccupation or feeling unable to stop eating, a stricter boundary may be a poor first experiment; the existing Support page can help you find appropriate advice."
    ],
    "guidance": [
      {
        "title": "Use your constraints to narrow the choice",
        "items": [
          "If keeping some of the same item matters and a chosen amount feels manageable, consider cutting down.",
          "If the routine or convenience matters more than the exact item, and an acceptable alternative is accessible, consider a swap.",
          "If repeated amount decisions are the main burden and a chosen, specific boundary feels workable, consider stopping that one item directly.",
          "If none fits the conditions this week, change the setup or wait for a feasible opportunity. You do not have to force a choice."
        ]
      },
      {
        "title": "How will I know whether it helps?",
        "items": [
          "Choose one routine and one approach or explicit combination. State what you want to happen at that routine.",
          "At a few comparable, feasible opportunities, notice what you actually tried and whether the intended change happened. Include satisfaction, effort, hunger/cravings and any increased guilt. Use the optional notes in Check in, or a short note elsewhere, if recording helps.",
          "At your chosen review point, keep what is workable, adapt one part or try another approach. If it increases distress or food preoccupation, review sooner rather than making the rule stricter.",
          "If you try a second approach later, keep the routine similar and note what else changed. You do not owe the lab repeated trials, and a short comparison is not proof of causation."
        ]
      }
    ],
    "example": "Jo dislikes measuring smaller amounts but likes an affordable alternative that is already available at lunch. A swap is a reasonable first trial. If the alternative turns out unsatisfying, Jo can adapt it or try a chosen amount of the original item.",
    "question": "Jo found that a swap was difficult because the alternative was unavailable at work. What is a useful response?",
    "answers": [
      {
        "text": "Review access or choose another feasible approach; this does not show a lack of willpower.",
        "feedback": "Availability was a practical condition of the plan. Jo can arrange an alternative or change the approach, then review the next feasible opportunities."
      },
      {
        "text": "Conclude that all swaps are ineffective.",
        "feedback": "This attempt tells us something about access in this setting, not whether every substitution works."
      },
      {
        "text": "Impose a stricter ban to make up for it.",
        "feedback": "A stricter rule does not supply the missing alternative. Change the arrangement rather than treating an unavailable option as a personal failure."
      }
    ],
    "correct": 0,
    "activity": "Choose a starting example on this page to open an editable draft, or start with your own details on the next page. The examples are starting points, not prescriptions.",
    "action": "Build my own plan",
    "href": "#lesson/putting-a-sugar-plan-into-practice",
    "research": {
      "paragraphs": [
        "The decision prompts and editable plans organise a personally chosen trial. They do not diagnose a problem or establish which strategy will work best. Research on drink availability informs the design, but does not validate this particular guide. A meta-analysis of implementation intentions examined specific situation–action plans across 642 tests; it does not establish that these sugar plans will work for you.",
        "A short personal trial can help you judge feasibility and usefulness. Task differences, expectations, sleep, workload and changing circumstances remain alternative explanations for what you observe."
      ],
      "sources": [
        {
          "title": "NHS: How to cut down on sugar (gradual changes and swaps)",
          "url": "https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/how-to-cut-down-on-sugar-in-your-diet/"
        },
        {
          "title": "Cochrane: Environmental interventions to reduce sugary-drink consumption",
          "url": "https://www.cochrane.org/evidence/CD012292_cutting-back-sugar-sweetened-beverages-what-works"
        },
        {
          "title": "Sheeran et al.: The when and how of planning—meta-analysis of implementation intentions",
          "url": "https://doi.org/10.1080/10463283.2024.2334563"
        }
      ]
    }
  },
  {
    "id": "putting-a-sugar-plan-into-practice",
    "title": "Turn the choice into a workable plan",
    "summary": "Prepare the cue, action, alternative, fallback and review, then make the draft your own.",
    "minutes": 5,
    "sugar": true,
    "sugarPlanner": true,
    "idea": "Prepare the action before the cue arrives, and decide how to resume when the day differs from your plan.",
    "paragraphs": [
      "Choose one routine and write what will change there. For cutting down, specify the first smaller amount or fewer occasions and hold that step until review. For swapping, name the replacement and make it available. For cold turkey, name exactly what stops, when it starts and what will meet the need instead.",
      "Prepare the setting: what needs to be bought, chilled, placed within reach or discussed with someone? Link a recognisable cue to a concrete action. Write a fallback for an unavailable alternative or an unplanned choice, rather than relying on perfect days.",
      "The editable examples below show those decisions. Adjust the item, amount and timing to your own circumstances. During the trial, Check in → Mood, eating and notes can hold a brief record of what you tried and how it felt; a hunger or urge score is optional. The suggested five opportunities are a practical review point, not a scientifically optimal schedule. Your draft becomes part of your lab record only when you start the experiment."
    ],
    "guidance": [
      {
        "title": "At review: keep, adapt or stop",
        "items": [
          "Ask whether the intended change actually happened in the named routine and whether it was satisfying and manageable.",
          "If it helped but preparation was difficult, simplify the setup. If the substitute was disappointing, change it. If amount decisions were burdensome, reconsider the boundary rather than assuming stricter is always better.",
          "If hunger, guilt, preoccupation or distress increased, pause and reconsider the plan; use Support if wanted. A missed opportunity does not create debt or require skipping food.",
          "Keep a useful approach, change one part, try another at a later feasible point, or stop. Record what else changed before attributing the result to the approach."
        ]
      }
    ],
    "example": "Rae chooses a lower-sugar tea step, leaves the spoon beside the tea, and plans to review after five feasible evenings. After an unexpectedly busy evening, Rae uses the next opportunity without skipping dinner or restarting a countdown.",
    "question": "Rae reaches the review point. The change is manageable, but the drink is unsatisfying. What could Rae do?",
    "answers": [
      {
        "text": "Adapt the amount or drink, or try another approach, while keeping the goal and costs in view.",
        "feedback": "Manageability is only one part of fit. Satisfaction matters too; the review is a chance to improve or stop the arrangement."
      },
      {
        "text": "Continue indefinitely because finishing the trial commits Rae forever.",
        "feedback": "A trial is not a permanent obligation. The review point exists so Rae can choose what to keep, change or stop."
      },
      {
        "text": "Treat an unplanned evening as a reason to skip the next meal.",
        "feedback": "Compensating by skipping food is not a restart plan. Rae can meet hunger and choose the next feasible opportunity."
      }
    ],
    "correct": 0,
    "activity": "Use Review draft in Experiments to check and edit the generated plan before starting it. If you already have an active experiment, review or finish it first; this draft does not replace it.",
    "action": "Open Experiments",
    "href": "#experiments",
    "research": {
      "paragraphs": [
        "The decision prompts and editable plans organise a personally chosen trial. They do not diagnose a problem or establish which strategy will work best. Research on drink availability informs the design, but does not validate this particular guide. A meta-analysis of implementation intentions examined specific situation–action plans across 642 tests; it does not establish that these sugar plans will work for you.",
        "A short personal trial can help you judge feasibility and usefulness. Task differences, expectations, sleep, workload and changing circumstances remain alternative explanations for what you observe."
      ],
      "sources": [
        {
          "title": "NHS: How to cut down on sugar (gradual changes and swaps)",
          "url": "https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/how-to-cut-down-on-sugar-in-your-diet/"
        },
        {
          "title": "Cochrane: Environmental interventions to reduce sugary-drink consumption",
          "url": "https://www.cochrane.org/evidence/CD012292_cutting-back-sugar-sweetened-beverages-what-works"
        },
        {
          "title": "Sheeran et al.: The when and how of planning—meta-analysis of implementation intentions",
          "url": "https://doi.org/10.1080/10463283.2024.2334563"
        }
      ]
    }
  },
  {
    id: 'thoughts-and-choice', title: 'A thought is not an instruction',
    summary: 'Practise noticing a craving thought and choosing how to respond.',
    idea: 'You can notice a thought without having to fight it or automatically obey it.',
    paragraphs: [
      'Try saying “I’m having the thought that I need chocolate now.” This way of noticing a thought is called cognitive defusion. It can make the thought feel less like an instruction, even if the craving stays.',
      'You can choose to eat or do something else. Ask whether noticing the thought helps you see what you need and decide what to do next.',
      'Studies of brief craving exercises have found small, mixed effects. Most measure what happens over a short time in a laboratory. We know less about whether the exercises help over time in everyday life.'
    ],
    example: '“I need chocolate now” becomes “I’m having the thought that I need chocolate now.” Morgan still feels the urge and chooses to enjoy some chocolate. The exercise helped them notice they could choose.',
    question: 'Someone still feels an urge after practising noticing a thought. How could the practice have helped?',
    answers: [
      {
        text: 'The exercise can still be useful if it helped someone choose more deliberately.',
        feedback: 'The exercise can help someone notice a choice while the thought is still present. That choice can include eating.'
      },
      {
        text: 'They did the exercise incorrectly.',
        feedback: 'The urge can remain after the person notices their options. Its intensity alone tells you little about how they used the exercise.'
      },
      {
        text: 'They must repeat it until the urge disappears.',
        feedback: 'The person can finish the practice with the urge still there. They can decide what to do next whenever they are ready.'
      },
    ], correct: 0,
    action: 'Try Notice a craving thought', href: '#tool/defusion',
    source: 'Review of laboratory-based craving interventions', url: 'https://pubmed.ncbi.nlm.nih.gov/31944559/'
  },
  {
    id: 'patterns-not-proof', title: 'Patterns are clues, not proof',
    summary: 'Use recorded observations to decide what to explore next.',
    idea: 'Check-ins can tell you what happened in the moments you recorded.',
    paragraphs: [
      'A check-in can capture hunger, an urge and what was happening at the time. You might record difficult moments more often than ordinary ones. In Reflect, each count describes the check-ins you chose to record.',
      'If stress and cravings appear together, several explanations are possible. Missed meals, tiredness or the situation itself may also matter. A watch can provide sleep data. To learn whether someone felt unable to stop eating, ask them about the experience. A continuous glucose monitor measures glucose levels. Its readings cannot tell you whether someone has a craving or an addiction.',
      'Track only what helps you understand. Exact calories, weighing food and daily targets are not needed here. If tracking brings guilt, compulsive checking or increased restriction, pause or stop. Less tracking can be the more helpful choice.'
    ],
    example: 'Four check-ins mention stress. Try asking “Would taking a break at work help?” To explore it, notice how you feel on days with and without a break. Hunger, sleep or other parts of the day might also differ.',
    question: 'Most recorded urges happened after short sleep. What is a fair interpretation?',
    answers: [
      {
        text: 'Short sleep definitely caused the urges.',
        feedback: 'The entries show that the two experiences occurred together. Other factors, such as missed meals or stress, could also matter.'
      },
      {
        text: 'The entries show a possible pattern worth exploring.',
        feedback: 'You can use the pattern to ask a question about sleep, while remembering that you chose which moments to record.'
      },
      {
        text: 'A smartwatch has diagnosed compulsive eating.',
        feedback: 'A watch can provide sleep data. Feeling unable to stop eating is an experience a watch cannot assess.'
      },
    ], correct: 1,
    activity: 'If you recorded a situation in a check-in, open Reflect and look under Situations you recorded. You can add a situation in Check in under What’s happening around you?',
    action: 'Open Reflect', href: '#reflect',
    source: 'NICE: assessment should consider the wider picture', url: 'https://www.nice.org.uk/guidance/ng69/chapter/Recommendations'
  },
  {
    id: 'kind-experiments', title: 'Make change an experiment',
    summary: 'Choose one manageable change and review how it feels.',
    idea: 'An experiment is a small change you try to see whether it helps.',
    paragraphs: [
      'Start with a question, such as “Would making time for lunch help me feel more settled in the evening?” Choose one change you can try. Decide what to notice, such as evening hunger, how distressing the urge feels or how easy it is to choose what to eat.',
      'Try the change for a few days or about a week if it feels useful. Review sooner if it makes things harder. At review, describe what helped, what got in the way and what else changed. Consider sleep or workload before attributing a change to the experiment. Finding little difference can also help you decide what to do next.',
      'Ask a health professional for support if eating often feels out of control, causes distress or disrupts daily life. Seek support if you try to make up for eating by skipping meals, making yourself sick or over-exercising. You can ask for help at any point.'
    ],
    example: 'Lee plans a regular lunch on workdays and notices whether evenings feel less frantic. On a busy day, Lee tries an easier lunch plan and notices how the evening feels.',
    question: 'An experiment increases guilt and restriction. What is a useful next step?',
    answers: [
      {
        text: 'Make the rules stricter so the experiment succeeds.',
        feedback: 'More restriction could make the experiment harder. Feeling worse is a reason to reconsider the plan.'
      },
      {
        text: 'Collect more entries before you are allowed to stop.',
        feedback: 'You can stop whenever you choose. No minimum number of entries is required to finish an experiment.'
      },
      {
        text: 'Pause or stop, reflect on what happened, and seek support if eating is distressing.',
        feedback: 'Increased guilt or restriction is useful information about the plan. You can pause and ask for support whenever you need it.'
      },
    ], correct: 2,
    activity: 'If you have no active experiment, choose a suggested plan or Design my own experiment. Enter what you’ll try and what you’d like to notice, then select Start this experiment. If you already have a plan, you can review it or come back later.',
    action: 'Open Experiments', href: '#experiments',
    source: 'NHS: treatment and support for binge-eating disorder', url: 'https://www.nhs.uk/mental-health/conditions/binge-eating/treatment/'
  }
];
