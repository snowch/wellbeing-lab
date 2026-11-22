// Editable examples and planning structure, not a test of dietary suitability.
export const sugarApproaches = {
  'cut-down': {label:'Cutting down', hint:'Keep some of the same item, with a smaller amount or fewer occasions.'},
  swap: {label:'Swapping', hint:'Replace the target with an acceptable alternative at the same moment.'},
  stop: {label:'Cold turkey for one item', hint:'Stop the named item from a chosen point; keep meals and other needs covered.'}
};
export const sugarFields = ['approach','goal','target','change','cue','setup','alternative','fallback','review','notice'];
export const sugarExamples = {
  'cut-down': {
    approach:'cut-down',goal:'Less added sugar in evening tea while keeping a drink I enjoy.',target:'Sugar added to evening tea',
    change:'use one-and-a-half teaspoons instead of my usual two, and hold that step until review',
    cue:'I make my evening tea at home',setup:'Put the teaspoon beside the tea so I can use the amount I chose.',
    alternative:'Keep the tea break and my usual meals; choose a satisfying snack if hungry.',
    fallback:'If I use my usual amount, return at the next opportunity without skipping a meal.',
    review:'After five feasible evening-tea opportunities, or sooner if the plan feels unhelpful.',
    notice:'Did I try the chosen amount? Was the tea satisfying? How much effort, craving or guilt was involved?'
  },
  swap: {
    approach:'swap',goal:'Replace my usual sugary lunch drink with something I enjoy.',target:'My usual regular cola with lunch',
    change:'choose chilled sparkling water instead of that cola',cue:'I prepare or buy lunch',
    setup:'Chill the water before lunch and check what is available when eating out.',
    alternative:'Still water if sparkling water is unavailable; keep lunch as usual.',
    fallback:'If neither option is available, choose what is practical and review the access problem.',
    review:'After five feasible lunches; check sooner if the alternative is unsatisfying.',
    notice:'Did the alternative replace the cola, rather than simply being an extra drink? Was it affordable and satisfying?'
  },
  stop: {
    approach:'stop',goal:'Try one clear boundary rather than deciding how much sugar to add each evening.',target:'Sugar I add to evening tea',
    change:'have that tea without adding sugar, starting at the next planned opportunity',cue:'I make my evening tea at home',
    setup:'Leave the tea ready and decide on an unsweetened option I find acceptable.',
    alternative:'Try a different unsweetened tea, keep the break and respond to hunger with food.',
    fallback:'If I add sugar, use the next feasible opportunity; no restarted clock or compensatory restriction.',
    review:'After five feasible tea opportunities, or sooner if the rule makes eating more stressful.',
    notice:'Did the boundary simplify the decision? Was the drink satisfying? Did preoccupation, cravings or guilt increase?'
  }
};
export const emptySugarDraft = ()=>Object.fromEntries(sugarFields.map(k=>[k,'']));
export function makeSugarExperiment(input){
  const d=Object.fromEntries(sugarFields.map(k=>[k,String(input[k]||'').trim()]));
  if(!Object.hasOwn(sugarApproaches,d.approach)||!d.target||!d.change||!d.cue||!d.setup||!d.alternative||!d.fallback||!d.review||!d.notice)
    throw Error('Choose an approach and complete the routine, action, cue, preparation, alternative, fallback and review fields.');
  const plan=[`Approach: ${sugarApproaches[d.approach].label}`,`Routine: ${d.target}`,`When: ${d.cue}`,`Action: ${d.change}`,`Prepare: ${d.setup}`,`Alternative / need: ${d.alternative}`,`If things differ: ${d.fallback}`,`Review: ${d.review}`].join('\n');
  const notice=[d.goal?`What matters to me: ${d.goal}`:'',`Notice: ${d.notice}`,`Review at: ${d.review}`].filter(Boolean).join('\n');
  if(plan.length>1000||notice.length>1000)throw Error('Shorten a few fields so the plan and review each fit within 1,000 characters. Your draft remains here.');
  return {name:(sugarApproaches[d.approach].label+': '+d.target).slice(0,120),plan,notice};
}
