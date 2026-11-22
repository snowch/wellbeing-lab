import { lessons } from './lessons.js';
import { STORAGE_KEY, emptyState, readState, summarize, escapeHTML as esc } from './model.js';

let storage;
try { storage = window.localStorage; } catch { /* Session-only remains available. */ }
const savedState = storage ? readState(storage) : null;
let state = savedState || emptyState();
let persistent = Boolean(savedState);
let storageFailed = false;
let toastTimeout;
let timer;
let toolStep = 0;
let selectedExperiment = '';
const main = document.querySelector('main');
const dateFormat = new Intl.DateTimeFormat(undefined, { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
const date = value => { const d = new Date(value); return Number.isNaN(d.getTime()) ? 'Unknown date' : dateFormat.format(d); };
const uid = () => crypto.randomUUID();
const btn = (text, href, type='primary') => `<a class="button ${type}" href="${href}">${text}</a>`;
const head = (title, text) => `<div class="page-head"><h1>${title}</h1><p>${text}</p></div>`;
function clearAnnouncement() {
  clearTimeout(toastTimeout);
  document.querySelector('#announcement').textContent = '';
}
function announce(message) {
  clearAnnouncement();
  document.querySelector('#announcement').textContent = message;
  toastTimeout = setTimeout(clearAnnouncement, 6000);
}
function save() {
  if (!persistent) return !storageFailed;
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(state));
    storageFailed = false;
    return true;
  } catch {
    storageFailed = true;
    return false;
  }
}
function announceChange(message, saved, tabMessage='This change is in this tab.') {
  if (saved) announce(message);
  else if (persistent) announce(tabMessage + ' The saved copy may still show earlier entries.');
  else announce(tabMessage + ' Export your entries before closing if you want a copy.');
}
function modeNote(showManageLink=true) {
  const manage = showManageLink ? ' <a href="#privacy">Manage your data</a>' : '';
  if (storageFailed && persistent) return `<p class="notice" role="status">This browser could not update the saved copy. Your latest changes are in this tab. Earlier entries may still be saved.${manage}</p>`;
  if (storageFailed) return `<p class="notice" role="status">Device storage is unavailable. Your entries are in this tab. Export a copy before closing if you want to keep them.${manage}</p>`;
  return `<p class="small muted">${persistent ? 'Device saving is on for this browser.' : 'Tab-only mode. Reloading or closing the tab clears your entries.'}${manage}</p>`;
}
function deletionScope() {
  return storage
    ? 'This removes check-ins, experiments and reflections from this tab and this app’s saved browser copy.'
    : 'This removes check-ins, experiments and reflections from this tab. To remove any saved copy, clear this site’s data in your browser settings.';
}
function storageBanner() {
  return `<div class="note storage-note"><div>${modeNote()}</div>${!persistent && !storageFailed ? '<a class="button secondary" href="#privacy">Device saving options</a>' : ''}</div>`;
}
function home() {
  const active = state.experiments.find(e => e.status === 'active');
  return `<section class="hero"><div class="hero-copy"><h1>Explore your cravings</h1><p>For adults who want to understand when cravings arise and try small changes in response.</p><div class="actions">${btn('Start a check-in', '#check-in')}${btn('Choose a practice', '#tools', 'secondary')}</div></div><div class="hero-art" aria-hidden="true"><div class="orbit"><div class="stone"><svg viewBox="0 0 80 80" fill="none"><path d="M22 51c-3-24 13-35 36-34 1 25-11 39-33 34M23 58l29-33M32 45l-2-14M40 37l13-1" stroke="#e1edbd" stroke-width="2.5" stroke-linecap="round"/></svg></div></div><span class="spark">✳</span></div></section>
  ${storageBanner()}
  <div class="grid two home-options">
    <section class="card"><h2>Learn about cravings</h2><p>${lessons.length} short lessons explore hunger, habits, sugar reduction and the situations that affect how you feel.</p><a class="text-link" href="#learn">Explore the lessons</a></section>
    <section class="card"><h2>Try a small change</h2><p>Choose something manageable and review whether it helps.</p><a class="text-link" href="#experiments">${active ? 'Open your experiment' : 'Choose an experiment'}</a></section>
  </div>`;
}
function chips(name, values, checked='') {
  return `<div class="chips">${values.map(v => `<label class="chip"><input type="radio" name="${name}" value="${esc(v)}" ${v === checked ? 'checked' : ''}><span>${esc(v)}</span></label>`).join('')}</div>`;
}

function rating(name, title, zeroLabel, tenLabel) {
  const choices = Array.from({ length: 11 }, (_, value) => {
    const description = value === 0 ? zeroLabel : value === 10 ? tenLabel : '';
    return `<option value="${value}">${value}${description ? ' · ' + description : ''}</option>`;
  }).join('');
  return `<div class="field">
    <label for="${name}">${title}</label>
    <select id="${name}" name="${name}">
      <option value="">Not recorded</option>${choices}
    </select>
  </div>`;
}
function ratingText(value) {
  return Number.isInteger(value) && value >= 0 && value <= 10 ? `${value}/10` : 'Not recorded';
}
function checkIn() {
  return `${head('Check in', 'Record how hungry you feel, how strong an urge feels, or what is happening around you.')}${modeNote()}<div class="split"><form id="check-form" class="card">
    <p class="small muted">Choose a number from 0 to 10 for either rating, or leave both blank and add at least one detail.</p>
    ${rating('hunger', 'How physically hungry do you feel?', 'Not hungry', 'Very hungry')}
    ${rating('craving', 'How strong is the urge?', 'No urge', 'Very strong')}
    <fieldset class="field"><legend>What’s happening around you? <span class="optional">Optional</span></legend>${chips('context', ['Watching TV','Taking a break','After a meal','Missed a meal','Working or studying','Socialising','Something else'])}</fieldset>
    <details><summary>Mood, eating and notes <span class="optional">Optional</span></summary><fieldset class="field"><legend>How are you feeling?</legend>${chips('mood', ['Calm','Stressed','Bored','Tired','Sad','Happy','Mixed'])}</fieldset><fieldset class="field"><legend>How did eating feel?</legend><p>Choose Hard to stop if it felt difficult to stop eating. You can leave this blank.</p>${chips('control', ['I haven’t eaten','An intentional choice','A bit automatic','Hard to stop'])}</fieldset><div class="field"><label for="food">Food, if relevant <span class="optional">Optional</span></label><input id="food" name="food" type="text" maxlength="120" placeholder="e.g. some chocolate"></div><div class="field"><label for="entry-note">Anything else you noticed?</label><textarea id="entry-note" name="note" maxlength="1500" placeholder="What happened just before? What might you need?"></textarea></div></details>
    <p class="small muted" id="check-in-feedback" role="status"></p><div class="actions"><button class="primary" type="submit">Save check-in <span aria-hidden="true">→</span></button><a href="#home" class="text-link">Leave without saving</a></div>
  </form><aside class="stack sidebar"><div class="note green"><h3>If you feel hungry</h3><p>If you’re hungry or have missed a meal, you can eat something satisfying straight away.</p></div><div class="card"><h3>If tracking feels stressful</h3><p>Pause tracking if it makes you feel guilty, eat less than you need, or think about food more than you want to. <a href="#support">Find support</a>.</p></div></aside></div>`;
}
const tools = {
  notice: { title: 'Notice the urge', duration: 'About 1–2 minutes', desc: 'Notice what an urge feels like and decide what you need next.', steps: [
    ['Get comfortable', 'If it helps, feel your feet on the floor and let your shoulders settle. Breathe comfortably.'],
    ['Name what you notice', 'Notice whether the urge is a thought, an imagined taste or a feeling in your body. You can say “There’s a craving here.”'],
    ['Choose your next step', 'Ask yourself “Am I hungry? What would help right now?” You might eat, rest, contact someone or return to what you were doing.'] ] },
  defusion: { title: 'Notice a craving thought', duration: 'About 2 minutes', desc: 'Notice the words of a thought and decide how you want to respond.', steps: [
    ['Notice the words', 'Notice what you are telling yourself, such as “I need chocolate right now.”'],
    ['Describe it as a thought', 'Try saying “I’m having the thought that I need chocolate right now.” Use whatever words fit your thought.'],
    ['Choose what to do next', 'The thought may still be here. Take a moment to decide whether you want to eat or do something else.'] ] },
  needs: { title: 'Check what you need', duration: 'About 1–2 minutes', desc: 'Start with hunger, then consider whether anything else needs attention.', steps: [
    ['Start with physical hunger', 'Have you eaten enough today? Has it been a long time since a meal? If you’re hungry, you can have a meal or snack straight away.'],
    ['Consider other needs', 'Are you tired, stressed, bored or lonely? You may also simply want to enjoy food.'],
    ['Choose one thing that could help', 'You might eat something satisfying, take a break, message someone or rest.'] ] },
  pause: { title: 'An optional pause', duration: 'Optional 1-minute timer', desc: 'If you’ve eaten enough and want a moment to decide, try a short pause.', steps: [
    ['Check whether a pause fits', 'If you’re hungry, have missed a meal or feel pressure to put off eating, go ahead and eat. If a pause feels useful, select Continue.'],
    ['Take a minute, if you wish', 'Look around, stretch, or sit comfortably. You can eat whenever you choose.'],
    ['Choose what you want now', 'You can eat, do something else or attend to another need. You can choose even while you still feel a craving.'] ] }
};
function toolsPage() {
  return `${head('Practise', 'Choose a short exercise to try. You can stop at any point.')}<div class="note green" style="margin-bottom:24px">If you’re hungry or have missed a meal, go ahead and eat. Each practice is optional.</div><div class="grid two">${Object.entries(tools).map(([id,t]) => `<article class="card tool-card"><h2>${t.title}</h2><p class="small muted">${t.duration}</p><p>${t.desc}</p><div class="actions">${btn('Try this practice →', '#tool/'+id, 'secondary')}<a class="text-link" href="#lesson/${({notice:'craving-habit-control',defusion:'thoughts-and-choice',needs:'hunger-and-restriction',pause:'thoughts-and-choice'})[id]}">Read the related lesson</a></div></article>`).join('')}</div><p class="small muted" style="margin-top:24px">Short laboratory studies have found small, mixed effects from craving exercises. <a href="#support">Read about the evidence</a>.</p>`;
}

function toolPage(id) {
  const t = tools[id];
  if (!t) return toolsPage();
  const finished = toolStep >= t.steps.length;
  const pauseStep = id === 'pause' && toolStep === 1;
  return `<div class="exercise">
    <a class="text-link" href="#tools">← All practices</a>
    <p class="exercise-progress">${t.title} · ${finished ? 'Reflection' : `Step ${toolStep+1} of ${t.steps.length}`}</p>
    <section class="card exercise-panel">
      ${finished ? `<h1>Reflect on the practice</h1>
        <p>Choose an answer if you want to save it. You can feel an urge and still find the practice helpful.</p>
        <fieldset class="field"><legend>Did the practice help?</legend>${chips('helpful',['Yes','A little','Not today'])}</fieldset>
        <div class="actions"><button class="primary" data-action="save-practice" data-tool="${id}">Save reflection</button>${btn('Finish without saving', '#tools', 'secondary')}</div>`
      : `<h1>${t.steps[toolStep][0]}</h1><p>${t.steps[toolStep][1]}</p>
        ${pauseStep ? `<div class="timer" id="timer" role="timer" aria-label="Optional pause timer">1:00</div>
          <p class="small muted">Select <strong>Start timer</strong> to count down from one minute. Select <strong>Continue</strong> whenever you’re ready.</p>
          <div class="actions timer-actions">
            <button class="secondary" data-action="start-timer">Start timer</button>
            <button class="secondary" data-action="stop-timer" hidden>Stop timer</button>
          </div>` : ''}
        <div class="actions">${toolStep > 0 ? '<button class="secondary" data-action="tool-back">Back</button>' : ''}<button class="primary" data-action="tool-next">${toolStep === 2 ? 'Reflect on this practice' : 'Continue'}</button></div>`}
    </section>
  </div>`;
}
const experimentOptions = {
  meals: { name: 'Make time for a regular meal', description: 'See whether eating lunch regularly changes how hungry you feel in the evening.', plan: 'On workdays, when I can, I’ll make time for a satisfying lunch.', notice: 'On days when I make time for lunch, how hungry do I feel in the evening? What else differed that day?' },
  cue: { name: 'Decide before watching TV', description: 'Choose whether you want a snack before the programme starts and notice how the decision feels.', plan: 'Before I start the programme, I’ll decide what I want, including whether to have a snack.', notice: 'When I decide before turning on the TV, do I feel more able to choose than I usually do?' },
  space: { name: 'Practise noticing a thought', description: 'Describe a craving as a thought and see if it helps you decide what to do.', plan: 'When I think “I need chocolate right now”, I’ll try saying “I’m having the thought that I need chocolate right now” once, then decide what to do.', notice: 'After saying this, does it feel easier to choose what to do, even if the urge stays?' },
  custom: { name: 'Design my own experiment', description: 'Start with a blank plan. Choose a change that lets you eat enough and enjoy food.', plan: '', notice: '' }
};
function experimentsPage() {
  const active = state.experiments.find(e => e.status === 'active');
  const completed = state.experiments.filter(e => e.status !== 'active');
  return `${head('Experiments', 'Try one small change and review how it feels. You can finish or stop at any time.')}<div id="experiment-storage-mode">${modeNote()}</div>${active ? `<div class="split"><section class="card"><p class="small muted">Current experiment</p><h2>${esc(active.name)}</h2><p class="small muted">Started ${date(active.created)}</p><h3>What I’m trying</h3><p id="active-plan" class="review-text">${esc(active.plan)}</p><h3>What I’ll look for</h3><p id="active-notice" class="review-text">${esc(active.notice)}</p>
    <details id="active-editor"><summary>Edit plan</summary><form id="experiment-edit">
      ${experimentFields(active)}
      <div class="actions"><button class="primary" type="submit">Save plan</button><button class="secondary" type="button" data-action="cancel-plan-edit">Cancel</button></div>
    </form></details>
    <form id="experiment-review"><div class="field"><label for="experiment-result">What did you notice?</label><textarea id="experiment-result" name="result" maxlength="1500" required placeholder="What helped, and what else differed?"></textarea></div><div class="actions"><button class="primary" type="submit">Save review and finish</button><button class="secondary" type="button" data-action="stop-experiment">Stop without a review</button></div></form></section><aside class="note green sidebar"><h3>When to stop</h3><p>Stop if the change makes eating harder or more stressful. You can respond to hunger and <a href="#support">ask for support</a> whenever you need to.</p></aside></div>` : `<p>Select an experiment to open its suggested plan. Choose <strong>Design my own experiment</strong> for a blank plan.</p><div class="grid two">${Object.entries(experimentOptions).map(([id,e]) => `<button class="experiment-option ${selectedExperiment===id?'selected':''}" data-action="choose-experiment" data-id="${id}" aria-pressed="${selectedExperiment===id}"><strong>${e.name}</strong><span>${e.description}</span></button>`).join('')}</div><div id="experiment-editor">${selectedExperiment ? experimentEditor() : ''}</div>`}${completed.length ? `<div class="section-heading"><h2>Past experiments</h2></div><div class="stack">${completed.slice().reverse().map(e => `<article class="card"><span class="badge">${e.status === 'completed' ? 'REVIEWED' : 'STOPPED'}</span><h3>${esc(e.name)}</h3><p class="review-text">${esc(e.result || 'Stopped without a review. You can try a different approach whenever you like.')}</p></article>`).join('')}</div>` : ''}`;
}
function experimentEditor() {
  const e = experimentOptions[selectedExperiment];
  return `<form id="experiment-form" class="card inline-form"><h2>Set your plan</h2><p class="muted">Check the fields before you select <strong>Start this experiment</strong>. Review after a few days, or sooner if the change feels unhelpful.</p>${selectedExperiment==='custom' ? '<div class="field"><label for="exp-name">Experiment name</label><input id="exp-name" name="name" maxlength="120" required></div>' : ''}${experimentFields(e)}<div class="actions"><button class="primary" type="submit">Start this experiment →</button><button type="button" class="secondary" data-action="cancel-experiment">Cancel</button></div></form>`;
}
function experimentFields({plan, notice}) {
  return `<div class="field"><label for="exp-plan">What small change will you try?</label><textarea id="exp-plan" name="plan" maxlength="1000" required>${esc(plan)}</textarea></div>
    <div class="field"><label for="exp-notice">What would you like to notice?</label><textarea id="exp-notice" name="notice" maxlength="1000" required>${esc(notice)}</textarea></div>`;
}
function reflectPage() {
  const s = summarize(state.entries);
  const helpful = state.reviews.filter(r=>r.kind==='practice');
  const contextCounts = {};
  state.entries.forEach(e=>{ if(e.context) contextCounts[e.context]=(contextCounts[e.context]||0)+1; });
  return `${head('Reflect', 'Review the check-ins and practice reflections you chose to record.')}${modeNote()}${!s.count && !state.reviews.length ? `<div class="card empty"><h2>No check-ins or reflections yet</h2><p>Start a check-in whenever you want to record a moment.</p>${btn('Make a check-in', '#check-in')}</div>` : `<div class="grid two"><section class="card"><h2>Check-ins</h2><p>${s.count} recorded</p></section><section class="card"><h2>Practice reflections</h2><p>${helpful.length} recorded. You chose Yes or A little for ${helpful.filter(r=>r.helpful==='Yes'||r.helpful==='A little').length}.</p></section></div>${Object.keys(contextCounts).length ? `<section class="card" style="margin-top:22px"><h2>Situations you recorded</h2><p>Each count shows how many check-ins mention that situation. What else was happening in those moments, such as hunger or tiredness?</p><div class="bars">${Object.entries(contextCounts).sort((a,b)=>b[1]-a[1]).map(([c,n]) => `<div><div class="bar-label"><span>${esc(c)}</span><span>${n}</span></div><div class="bar-track"><div class="bar-fill" style="width:${Math.round(n/s.count*100)}%"></div></div></div>`).join('')}</div></section>` : ''}${s.lossOfControl ? '<div class="note peach support" style="margin-top:22px"><strong>Some eating felt hard to stop.</strong><p>If this repeats or causes distress, <a href="#support">see options for professional help</a>. You can ask at any point.</p></div>' : ''}<div class="split" style="margin-top:25px"><form id="reflection-form" class="card"><h2>Write a reflection</h2><div class="field"><label for="review-note">What did you notice, and what could help next?</label><textarea id="review-note" name="note" maxlength="2000" required placeholder="For example, did anything help?"></textarea></div><button type="submit" class="primary">Save reflection</button></form><aside class="note green"><strong>Is tracking helping?</strong><p>Pause or stop tracking if it makes eating more stressful.</p>${btn('Explore support', '#support', 'secondary')}</aside></div>`}
  ${state.entries.length ? `<div class="section-heading"><h2>Your check-ins</h2></div><div class="card">${state.entries.slice().reverse().map(e=>`<article class="entry"><div class="entry-head"><h3>${date(e.created)}${e.context ? ' · '+esc(e.context) : ''}</h3><button class="delete-entry" data-action="delete-entry" data-id="${esc(e.id)}" aria-label="Delete check-in from ${date(e.created)}">Delete</button></div><p class="small">Hunger: ${ratingText(e.hunger)} · Urge: ${ratingText(e.craving)}${e.mood ? ' · '+esc(e.mood) : ''}${e.control ? ' · '+esc(e.control) : ''}</p>${e.food ? `<p>${esc(e.food)}</p>` : ''}${e.note ? `<p class="review-text">${esc(e.note)}</p>` : ''}</article>`).join('')}</div>` : ''}
  ${state.reviews.length ? `<div class="section-heading"><h2>Your reflections</h2></div><div class="card">${state.reviews.slice().reverse().map(r=>`<article class="entry"><div class="entry-head"><h3>${date(r.created)}${r.kind==='practice' ? ' · '+esc(tools[r.tool]?.title || 'Practice') : ''}</h3><button class="delete-entry" data-action="delete-review" data-id="${esc(r.id)}">Delete</button></div><p class="review-text">${r.kind==='practice' ? 'Felt helpful: '+esc(r.helpful) : esc(r.note)}</p></article>`).join('')}</div>` : ''}`;
}
function learnPage() {
  return `${head('Learn about cravings', `${lessons.length} short lessons for adults. Read in order or start with a question that matters to you.`)}<div class="note green" style="margin-bottom:24px">Each lesson has an optional question about its example. Compare <a href="#lesson/reducing-sugar">cutting down with stopping completely</a>, or explore another question. You can go straight to <a href="#tools">practice</a> or <a href="#support">support</a> at any time.</div><div class="grid two">${lessons.map((lesson,i)=>`<article class="card tool-card"><p class="small muted">Lesson ${i+1} · About ${lesson.minutes || 3} minutes</p><h2>${lesson.title}</h2><p>${lesson.summary}</p><div class="actions">${btn('Read lesson →','#lesson/'+lesson.id,'secondary')}</div></article>`).join('')}</div><div class="note" style="margin-top:24px"><strong>If eating feels out of control or distressing</strong><p><a href="#support">Find professional support</a> whenever you need it.</p></div>`;
}

function lessonPage(id) {
  const index=lessons.findIndex(l=>l.id===id);
  if(index<0) return learnPage();
  const lesson=lessons[index];
  return `<div class="exercise lesson${lesson.comparison ? ' lesson-decision' : ''}">
    <a class="text-link" href="#learn">← All lessons</a>
    <p class="exercise-progress">Lesson ${index+1} of ${lessons.length} · About ${lesson.minutes || 3} minutes</p>
    <h1>${lesson.title}</h1>
    <div class="note green"><p>${lesson.idea}</p></div>
    <div class="card lesson-section">
      ${lesson.paragraphs.map(p=>`<p>${p}</p>`).join('')}
      <div class="note"><strong>Example</strong><p>${lesson.example}</p></div>
      ${lesson.research ? '' : `<p class="small lesson-references">Read more: <a href="${lesson.url}" target="_blank" rel="noopener noreferrer">${lesson.source}</a>. See <a href="#support">evidence limits & support</a>.</p>`}
    </div>
    ${lesson.comparison ? `<section class="lesson-section" aria-label="Two approaches"><div class="grid two">${lesson.comparison.map(approach=>`<article class="card"><h2>${approach.title}</h2>${approach.paragraphs.map(p=>`<p>${p}</p>`).join('')}</article>`).join('')}</div></section>` : ''}
    ${lesson.review ? `<section class="card lesson-section"><h2>${lesson.review.title}</h2><ol class="lesson-review">${lesson.review.steps.map(step=>`<li>${step}</li>`).join('')}</ol></section>` : ''}
    ${lesson.research ? `<details class="card lesson-section lesson-evidence"><summary>Research and guidance</summary>${lesson.research.paragraphs.map(p=>`<p>${p}</p>`).join('')}<ul class="source-list">${lesson.research.sources.map(source=>`<li><a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.title}</a></li>`).join('')}</ul></details>` : ''}
    <details class="card lesson-section lesson-check">
      <summary>Try the example question</summary>
      <h2>${lesson.question}</h2>
      <div class="stack lesson-answers">
        ${lesson.answers.map(({text},i)=>`<button class="experiment-option" data-action="lesson-answer" data-lesson="${lesson.id}" data-answer="${i}" aria-pressed="false">${text}</button>`).join('')}
      </div>
      <div id="lesson-feedback" role="status"></div>
    </details>
    <div class="note green lesson-section">
      ${lesson.activity ? `<p>${lesson.activity}</p>` : ''}
      ${btn(lesson.action,lesson.href,'secondary')}
    </div>
    <div class="actions lesson-navigation">
      ${index>0 ? btn('← Previous lesson','#lesson/'+lessons[index-1].id,'secondary') : ''}
      ${index<lessons.length-1 ? btn('Next lesson →','#lesson/'+lessons[index+1].id) : btn('Back to all lessons','#learn')}
    </div>
  </div>`;
}
function supportPage() {
 return `<div class="page-head"><h1>Support and evidence</h1><p>Find professional help and read the research behind the lessons.</p></div><div class="split support-layout"><aside class="stack sidebar"><section class="card support"><h2>When to speak to someone</h2><p>Speak to your general practitioner (GP) or an eating-disorder service if eating often feels out of control, causes distress or affects daily life. You can also ask for help if you’re eating less than you need or often try to make up for eating.</p><p>You can ask for support at any weight and however often this happens.</p><p><a href="https://www.beateatingdisorders.org.uk/get-information-and-support/" target="_blank" rel="noopener noreferrer">Beat: UK eating-disorder support →</a></p><p><a href="https://www.nhs.uk/mental-health/conditions/eating-disorders/overview/" target="_blank" rel="noopener noreferrer">NHS: getting help for an eating disorder →</a></p></section><div class="note peach"><h3>If you feel physically unwell</h3><p>Seek medical advice if you’re fainting, dehydrated, vomiting repeatedly or getting unwell quickly. In England, contact NHS 111 for urgent advice. In the UK, call 999 or go to A&E for an emergency or if you cannot keep yourself safe. Elsewhere, use local urgent or emergency services.</p></div><div class="note green"><h3>If you already receive care</h3><p>If you have diabetes, take medication that affects your appetite, or are receiving eating-disorder care, discuss significant changes in eating with your clinician. Speak to your prescriber about medication changes.</p></div></aside><div class="stack"><article class="card"><h2>Craving, habit and loss of control</h2><p>You might want chocolate strongly, eat automatically while watching TV, or feel unable to stop. These experiences can happen together. What helps depends on how eating feels to you.</p><p>The Diagnostic and Statistical Manual of Mental Disorders (DSM-5-TR) lists binge-eating disorder and bulimia nervosa. Its diagnoses do not include “sugar addiction” or “chocolate addiction”. A health professional can help if eating feels distressing or hard to control.</p><p>Use Cravings Lab for education and self-reflection. A health professional can assess and treat eating difficulties.</p></article><article class="card"><h2>What the evidence supports</h2><details open><summary>Professional care for binge-eating disorder</summary><p>Eating-disorder-focused cognitive behavioural therapy (CBT) and guided self-help are recommended treatments. The National Institute for Health and Care Excellence (NICE) advises regular meals and snacks and avoiding weight-loss dieting during binge-eating disorder treatment because restriction can trigger binge eating. Cravings Lab offers general information for adults. It has not been clinically tested as a treatment.</p></details><details><summary>What check-ins can show</summary><p>Recording hunger, urges and situations can show what happened together in the moments you chose to record. It cannot establish what caused an urge. You can stop at any time, especially if tracking increases distress.</p></details><details><summary>Research on brief craving exercises</summary><p>Exercises such as noticing a thought can help some people choose how to respond. Short laboratory studies have found small, mixed effects. We know less about how much these exercises help over time in everyday life.</p></details><details><summary>Gradual reduction or a direct change?</summary><p>Both are options for changing a specific food or drink routine. The <a href="#lesson/reducing-sugar">sugar-reduction lesson</a> explains free sugars, practical trade-offs and what the research can tell us.</p></details><details><summary>Research on “sugar addiction”</summary><p>Research in people provides little evidence that sugar itself causes addiction in the same way as drugs. Learned habits, familiar situations, eating less than you need and the pleasure of food may help explain some patterns. Distress about eating deserves attention whatever its cause.</p></details><details><summary>What home technology cannot tell you</summary><p>A glucose monitor measures glucose levels. A watch can record information such as sleep. To understand whether someone felt a craving or was unable to stop eating, ask how the experience felt to them.</p></details></article><article class="card"><h2>Sources & scope</h2><p>The lessons draw on the <em>Sugar and Chocolate “Addiction”</em> research synthesis (14 November 2026) and the guidance and reviews below.</p><ul class="source-list"><li><a href="https://www.nice.org.uk/guidance/ng69/chapter/Recommendations" target="_blank" rel="noopener noreferrer">NICE NG69: eating disorders—recognition and treatment</a><br>Assessment, guided self-help, CBT and regular eating.</li><li><a href="https://www.nhs.uk/mental-health/conditions/binge-eating/treatment/" target="_blank" rel="noopener noreferrer">NHS: treatment for binge-eating disorder</a><br>What professional treatment can involve.</li><li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5174153/" target="_blank" rel="noopener noreferrer">Westwater et al. (2016): Sugar addiction—the state of the science</a><br>Critical review of the sugar-addiction hypothesis.</li><li><a href="https://pubmed.ncbi.nlm.nih.gov/31944559/" target="_blank" rel="noopener noreferrer">Review of laboratory-based food-craving interventions</a><br>Short-term findings should not be treated as proof of lasting benefit.</li></ul><p class="small">This research informs the lessons. The lab focuses on noticing experiences and choosing what may help.</p></article></div></div>`;
}
function privacyPage() {
  return `${head('Your data', 'Choose what this browser keeps and download or delete your entries.')}
    <div class="stack privacy-card">
      <section class="card">
        <h2>Where your entries live</h2>
        ${modeNote(false)}
        <p>With device saving, entries stay in this browser after you close the tab. Someone using the same browser profile or another app at snowch.github.io could read the saved copy.</p>
        ${persistent ? `
          <div class="actions">${storageFailed ? '<button class="primary" data-action="enable-storage">Try saving again</button>' : ''}<button class="secondary" data-action="disable-storage">Switch to tab-only mode</button></div>
          <p class="small muted" style="margin-top:16px;margin-bottom:0">Switching to tab-only removes the saved browser copy and keeps your current entries in this tab until you reload or close it.</p>` : '<button class="primary" data-action="enable-storage">Save on this device</button>'}
        <details>
          <summary>Who can access your entries?</summary>
          <p>The app keeps your entries on this device. It has no account or device sync. Private browsing or clearing site data may remove a saved copy.</p>
        </details>
      </section>
      <section class="card"><h2>Download your entries</h2><p>Export the check-ins, experiments and reflections currently in this tab. Keep the JSON file somewhere private. The lab has no way to import the file.</p><button class="secondary" data-action="export">Export my data</button></section>
      <section class="card"><h2>Delete your entries</h2><p>${deletionScope()} Any downloaded files stay where you saved them.</p><button class="danger" data-action="delete-all">Delete all my data</button></section>
    </div>`;
}
function render({focus=false}={}) {
  clearInterval(timer);
  const route = location.hash.slice(1) || 'home';
  const pages = { home, 'check-in':checkIn, tools:toolsPage, experiments:experimentsPage, reflect:reflectPage, learn:learnPage, support:supportPage, privacy:privacyPage };
  main.innerHTML = route.startsWith('lesson/') ? lessonPage(route.split('/')[1]) : route.startsWith('tool/') ? toolPage(route.split('/')[1]) : (pages[route] || home)();
  document.querySelectorAll('nav a').forEach(a=>{ if(a.hash === '#'+route || (route.startsWith('tool/')&&a.hash==='#tools') || (route.startsWith('lesson/')&&a.hash==='#learn')) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); });
  document.title = `${({home:'Home','check-in':'Check in',tools:'Practise',experiments:'Experiments',reflect:'Reflect',learn:'Learn',support:'Support and evidence',privacy:'Your data'})[route] || (route.startsWith('lesson/') ? lessons.find(l=>route==='lesson/'+l.id)?.title || 'Learn' : 'Practice')} · Cravings Lab`;
  if (focus) { main.focus({preventScroll:true}); window.scrollTo(0,0); }
}
window.addEventListener('hashchange',()=>{
  clearAnnouncement();
  toolStep=0;
  render({focus:true});
});
document.querySelector('.skip').addEventListener('click', e=>{
  e.preventDefault();
  main.focus();
  main.scrollIntoView();
});
document.addEventListener('submit',e=>{
  const form=e.target;
  if(!['check-form','experiment-form','experiment-edit','experiment-review','reflection-form'].includes(form.id)) return;
  e.preventDefault();
  const data=Object.fromEntries(new FormData(form));
  if(form.id==='check-form') {
    const {hunger, craving} = data;
    const details = {
      context: data.context || '',
      mood: data.mood || '',
      control: data.control || '',
      food: data.food.trim(),
      note: data.note.trim()
    };
    if (!hunger && !craving && !Object.values(details).some(Boolean)) {
      form.querySelector('#check-in-feedback').textContent = 'Choose a hunger or urge rating, or add a detail, before saving.';
      return;
    }
    state.entries.push({
      id: uid(),
      created: new Date().toISOString(),
      hunger: hunger === '' ? null : Number(hunger),
      craving: craving === '' ? null : Number(craving),
      ...details
    });
    const saved = save();
    const hard = details.control === 'Hard to stop';
    const hungry = (hunger !== '' && Number(hunger) >= 7) || details.context === 'Missed a meal';
    main.innerHTML = `<div class="exercise"><section class="save-success"><h1>${saved && persistent ? 'Check-in saved on this device' : 'Check-in added in this tab'}</h1>
      ${hard ? '<p>If it often feels hard to stop eating, or it causes distress, you can speak with a general practitioner (GP) or an eating-disorder professional.</p>' : hungry ? '<p>If you feel hungry or missed a meal, you can eat something satisfying straight away.</p>' : ''}
      <div class="actions">${btn(hard ? 'Find support' : 'View your check-ins', hard ? '#support' : '#reflect')}${hard ? btn('View your check-ins', '#reflect', 'secondary') : btn('Back to Home', '#home', 'secondary')}</div>
      </section><div style="margin-top:20px">${modeNote()}</div></div>`;
    main.focus(); window.scrollTo(0,0);
  }
  if(form.id==='experiment-form') {
    if(!data.plan.trim() || !data.notice.trim() || (selectedExperiment==='custom'&&!data.name.trim())) { announce('Add a short plan and something you want to notice.'); return; }
    if(state.experiments.some(x=>x.status==='active')) return;
    state.experiments.push({id:uid(),created:new Date().toISOString(),name:data.name?.trim()||experimentOptions[selectedExperiment].name,plan:data.plan.trim(),notice:data.notice.trim(),status:'active'});
    const saved = save();
    selectedExperiment='';
    render({focus:true});
    announceChange('Experiment started. You can review it on this page.', saved);
  }
  if(form.id==='experiment-edit') {
    const active=state.experiments.find(x=>x.status==='active');
    const plan=data.plan.trim();
    const notice=data.notice.trim();
    if (!plan || !notice) {
      announce('Add a short plan and something you want to notice.');
      return;
    }
    if (!active) return;
    active.plan=plan;
    active.notice=notice;
    const saved = save();
    form.elements.plan.defaultValue=plan;
    form.elements.notice.defaultValue=notice;
    document.querySelector('#active-plan').textContent=plan;
    document.querySelector('#active-notice').textContent=notice;
    closePlanEditor(form);
    document.querySelector('#experiment-storage-mode').innerHTML=modeNote();
    announceChange('Plan updated.', saved);
  }
  if(form.id==='experiment-review') {
    if(!data.result.trim()) {announce('Add a few words about what you noticed.');return;}
    const active=state.experiments.find(x=>x.status==='active');active.status='completed';active.result=data.result.trim();active.finished=new Date().toISOString();
    const saved = save();
    render({focus:true});
    announceChange('Review added under Past experiments.', saved);
  }
  if(form.id==='reflection-form') {
    if(!data.note.trim()) {announce('Add a few words to your reflection.');return;}
    state.reviews.push({id:uid(),kind:'reflection',created:new Date().toISOString(),note:data.note.trim()});
    const saved = save();
    render({focus:true});
    announceChange('Reflection added.', saved);
  }
});
function closePlanEditor(form) {
  form.reset();
  const editor=form.closest('details');
  editor.open=false;
  editor.querySelector('summary').focus();
}
function showTimerStart() {
  const start=main.querySelector('[data-action="start-timer"]');
  const stop=main.querySelector('[data-action="stop-timer"]');
  start.hidden=false;
  if (document.activeElement === stop) start.focus();
  stop.hidden=true;
}
document.addEventListener('click',async e=>{
  const sameLink = e.target.closest('a[href^="#"]');
  if (sameLink && sameLink.hash === location.hash && !e.ctrlKey && !e.metaKey && !e.shiftKey) { e.preventDefault(); clearAnnouncement(); toolStep=0; render({focus:true}); return; }
  const target=e.target.closest('[data-action]'); if(!target) return;
  const action=target.dataset.action;
  if(action==='lesson-answer') {
    const lesson=lessons.find(l=>l.id===target.dataset.lesson);
    if(!lesson)return;
    document.querySelectorAll('[data-action="lesson-answer"]').forEach(b=>{b.setAttribute('aria-pressed',String(b===target));b.classList.toggle('selected',b===target);});
    const index=Number(target.dataset.answer);
    document.querySelector('#lesson-feedback').innerHTML=`<div class="note green"><strong>${index===lesson.correct ? 'That fits the example.' : 'Try another answer.'}</strong><p>${lesson.answers[index].feedback}</p></div>`;
  }
  if(action==='enable-storage') {
    try { if(!storage) throw new Error('Unavailable'); storage.setItem(STORAGE_KEY,JSON.stringify(state));persistent=true;storageFailed=false;render({focus:true});announce('Device saving is on. Your current entries are saved in this browser.'); }
    catch {
      storageFailed=true;
      render({focus:true});
      announce(persistent ? 'This browser could not update the saved copy.' : 'Device storage is unavailable. Your entries stay in this tab.');
    }
  }
  if(action==='disable-storage') {
    try {storage?.removeItem(STORAGE_KEY);persistent=false;storageFailed=false;render({focus:true});announce('Saved browser copy removed. Your current entries stay in this tab.');}
    catch {announce('This browser could not remove the saved copy. You can clear this site’s data in your browser settings.');}
  }
  if(action==='tool-next'||action==='tool-back'){toolStep+=action==='tool-next'?1:-1;render({focus:true});}
  if(action==='save-practice') {
    const helpful=document.querySelector('input[name=helpful]:checked')?.value;
    if(!helpful){announce('Choose how the practice felt, or finish without saving.');return;}
    state.reviews.push({id:uid(),kind:'practice',tool:target.dataset.tool,helpful,created:new Date().toISOString()});
    const saved = save();
    window.addEventListener('hashchange', () => announceChange('Practice reflection added to Reflect.', saved), { once:true });
    location.hash='reflect';
  }
  if(action==='start-timer') {
    const display=main.querySelector('#timer');
    const stop=main.querySelector('[data-action="stop-timer"]');
    const finishAt=Date.now()+60000;
    display.textContent='1:00';
    stop.hidden=false;
    stop.focus();
    target.hidden=true;
    timer=setInterval(()=>{
      const remaining=Math.max(0,Math.ceil((finishAt-Date.now())/1000));
      display.textContent=`${Math.floor(remaining/60)}:${String(remaining%60).padStart(2,'0')}`;
      if (remaining === 0) {
        clearInterval(timer);
        showTimerStart();
        announce('A minute has passed. Select Continue when you’re ready.');
      }
    },250);
  }
  if(action==='stop-timer') {
    clearInterval(timer);
    main.querySelector('#timer').textContent='1:00';
    showTimerStart();
    announce('Timer stopped. You can continue when you’re ready.');
  }
  if(action==='cancel-plan-edit') closePlanEditor(target.closest('form'));
  if(action==='choose-experiment'){selectedExperiment=target.dataset.id;render();document.querySelector('#experiment-editor').scrollIntoView({block:'nearest'});document.querySelector('#exp-name, #exp-plan')?.focus({preventScroll:true});}
  if(action==='cancel-experiment'){selectedExperiment='';render();}
  if(action==='stop-experiment'){
    const active=state.experiments.find(x=>x.status==='active');
    if(active){
      active.status='stopped';
      active.finished=new Date().toISOString();
      const saved=save();
      render({focus:true});
      announceChange('Experiment stopped. You can find it under Past experiments.', saved);
    }
  }
  if(action==='delete-entry'||action==='delete-review'){
    const key=action==='delete-entry'?'entries':'reviews';
    const item=action==='delete-entry'?'Check-in':'Reflection';
    state[key]=state[key].filter(x=>x.id!==target.dataset.id);
    const saved=save();
    render({focus:true});
    announceChange(item+' removed.', saved, item+' removed from this tab.');
  }
  if(action==='export') {
    const blob=new Blob([JSON.stringify({...state,exportedAt:new Date().toISOString()},null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download=`cravings-lab-${new Date().toISOString().slice(0,10)}.json`;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);announce('Export prepared. Keep your downloaded file somewhere private.');
  }
  if(action==='delete-all'){
    const dialog=document.querySelector('#confirm-dialog');
    dialog.querySelector('p').textContent=deletionScope()+' Export a copy first if you want to keep your entries.';
    dialog.showModal();
  }
});
document.querySelector('#confirm-dialog').addEventListener('close',e=>{
  if(e.target.returnValue!=='delete')return;
  try{storage?.removeItem(STORAGE_KEY);}catch{announce('Unable to remove saved data. Clear this site’s data using your browser settings.');return;}
  state=emptyState();
  persistent=false;
  selectedExperiment='';
  storageFailed=!storage;
  render({focus:true});
  announce(storage
    ? 'All app entries and saved browser data deleted.'
    : 'Tab entries deleted. This app could not check for a saved copy. To remove any saved copy, clear this site’s data in your browser settings.');
});
render();
