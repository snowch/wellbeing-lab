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
    "title": "Cutting down or stopping completely?",
    "summary": "Compare gradual reduction with a direct change, and choose what to review.",
    "minutes": 5,
    "idea": "Choose a specific change you can sustain. A clear rule and a gradual approach are options to review, not tests of willpower.",
    "paragraphs": [
      "Cutting down can mean reducing an amount or frequency in stages. “Cold turkey” usually means stopping a chosen food or drink all at once. Start by naming the routine you want to change, such as sugar added to tea, rather than making a vague rule about all sugar.",
      "“Refined sugar” describes processing. For nutrition guidance, the more useful category is free sugars: sugars added to food or drinks, plus those in honey, syrups, juices and smoothies. Swapping table sugar for honey still supplies free sugars.",
      "Sugars naturally present in whole fruit and plain milk are not free sugars. Reducing free sugars does not require removing those foods or all carbohydrates. The “of which sugars” figure on UK labels includes total sugars; it does not separately measure free sugars."
    ],
    "comparison": [
      {
        "title": "Reduce gradually",
        "paragraphs": [
          "Try smaller amounts of sugar in tea in stages, or replace one usual sugary drink at a time. The NHS suggests gradual reductions for sugar added to hot drinks.",
          "Smaller steps may feel more acceptable, while repeated decisions may be inconvenient. Choose a feasible pace; there is no required taper timetable in this lab."
        ]
      },
      {
        "title": "Make a direct change",
        "paragraphs": [
          "Try replacing a particular usual sugary drink with water, or choosing unsweetened tea from a chosen day. This changes one routine without requiring a ban on all sweet foods.",
          "A simple rule may be easier to remember, while the adjustment may feel abrupt. Having the original drink on another occasion is information for your review, not a verdict about your character."
        ]
      }
    ],
    "review": {
      "title": "Review the approach, not your willpower",
      "steps": [
        "Choose one food or drink routine, the change you want and a replacement you actually find acceptable.",
        "Write down the plan and a feasible review point, such as after a few days. That is a practical choice, not a research-established optimum.",
        "Notice whether you can follow the plan, how satisfying it feels, and what happens to cravings, hunger or guilt. Keep eating enough; skipping meals to compensate is a different pattern from choosing a drink swap.",
        "Keep, adjust or stop the plan. An unplanned choice does not create a failed streak or a need to start again. If eating feels increasingly distressing or hard to control, use Support rather than making the rules stricter."
      ]
    },
    "example": "Ari wants less added sugar in evening tea. They consider reducing it in stages or switching to unsweetened tea. Either plan keeps their usual meals and gives them a concrete change to review.",
    "question": "How could Ari choose between these approaches?",
    "answers": [
      {
        "text": "Choose a feasible approach and review satisfaction, cravings and how manageable it feels.",
        "feedback": "A specific plan gives Ari something to try and review. Either a gradual reduction or a direct change might fit; a few personal observations cannot establish a universal winner."
      },
      {
        "text": "Remove whole fruit and milk too, because their labels show sugar.",
        "feedback": "Total sugars and free sugars are different categories. Naturally occurring sugars in whole fruit and plain milk do not need to be removed to make this change."
      },
      {
        "text": "Assume stopping completely must work better because its rule sounds clearer.",
        "feedback": "A clear rule may be useful, but that does not establish that it will suit Ari or work better for everyone. Consider feasibility and experience, as well as how the rule sounds."
      }
    ],
    "correct": 0,
    "activity": "In Experiments, choose Design my own experiment. Under What small change will you try?, name the routine, your gradual or direct approach, an alternative and a review point. Under What would you like to notice?, include manageability, satisfaction and any change in cravings or guilt. If you already have an active experiment, edit or review it before starting another.",
    "action": "Plan a small change",
    "href": "#experiments",
    "research": {
      "paragraphs": [
        "NHS public-health guidance recommends reducing free sugars and describes both gradual reductions and direct swaps. These practical suggestions do not establish one approach as the best for every person.",
        "A 2024 paper reported two six-month randomized trials of gradual versus immediate reductions in soft-drink sweetness. Both approaches helped maintain liking for less-sweet drinks in the US full-sugar-drink cohort; findings differed in other cohorts. The trials did not compare quitting all sugar or establish a winner for long-term health outcomes.",
        "The trials were funded by PepsiCo, and several authors were company employees. Consider that commercial involvement alongside the limited outcomes and populations studied.",
        "NICE advice against weight-loss dieting during binge-eating disorder treatment applies to that clinical setting. It does not establish that every voluntary reduction in a sugary drink causes binge eating. If you receive individual dietary or eating-disorder care, keep changes consistent with that plan."
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
