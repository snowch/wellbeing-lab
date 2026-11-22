import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import {sugarExamples,makeSugarExperiment,emptySugarDraft} from '../cravings/sugar-plan.js';
const pages=['reducing-sugar','choosing-a-sugar-approach','putting-a-sugar-plan-into-practice'];
const go=(page,id)=>page.goto('/cravings/#lesson/'+id);

test('three sugar pages compare, guide a choice and provide an accessible planner',async({page})=>{
 test.setTimeout(60000);
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/cravings/#learn');await expect(page.getByRole('link',{name:'Read lesson'})).toHaveCount(9);
 await page.getByRole('link',{name:'cutting down, swapping and cold turkey',exact:true}).click();
 await expect(page.getByRole('heading',{level:1})).toHaveText('Cutting down, swapping or cold turkey?');
 for(const name of ['Cutting down','Swapping','Cold turkey for a specific item'])await expect(page.getByRole('heading',{name,exact:true})).toBeVisible();
 await expect(page.locator('main')).toContainText('The approaches can overlap');
 await expect(page.locator('main')).toContainText('what arrangement serves your goal');
 for(const id of pages){
  await go(page,id);await expect(page.locator('.sugar-path a[aria-current=page]')).toHaveCount(1);
  await expect(page.locator('.lesson-evidence')).not.toHaveAttribute('open');
  for(const width of [320,390,768,1440]){await page.setViewportSize({width,height:900});expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),id+' '+width).toBe(true);}
  await page.locator('.lesson-evidence summary').click();
  const r=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();expect(r.violations,id).toEqual([]);
 }
 await go(page,'reducing-sugar');await page.locator('.lesson-evidence summary').click();await expect(page.locator('.lesson-evidence')).toContainText('funded by PepsiCo');await expect(page.locator('.lesson-evidence a')).toHaveCount(5);
 await page.getByRole('link',{name:'Choose an approach',exact:true}).last().click();await expect(page.getByRole('heading',{level:1})).toHaveText('Which approach fits my situation?');
 await page.getByRole('link',{name:'Build my own plan',exact:true}).click();await expect(page.locator('#sugar-plan-form')).toBeVisible();
 expect(errors).toEqual([]);expect(await page.evaluate(()=>localStorage.length)).toBe(0);
});

test('all three examples hand off editable drafts and cannot replace an active experiment',async({page})=>{
 expect(()=>makeSugarExperiment(emptySugarDraft())).toThrow();expect(()=>makeSugarExperiment({...sugarExamples.swap,approach:'constructor'})).toThrow();expect(()=>makeSugarExperiment({...sugarExamples.swap,change:'x'.repeat(1500)})).toThrow(/Shorten/);
 for(const [strategy,example]of Object.entries(sugarExamples)){
  const expected=makeSugarExperiment(example);
  await go(page,'choosing-a-sugar-approach');await page.locator('[data-action=sugar-example][data-strategy="'+strategy+'"]').click();
  await expect(page.getByRole('heading',{level:1})).toHaveText('Turn the choice into a workable plan');
  await expect(page.locator('#sugar-approach')).toHaveValue(strategy);await expect(page.locator('#sugar-change')).toHaveValue(example.change);
  await page.getByRole('button',{name:'Review draft in Experiments',exact:true}).click();
  await expect(page.locator('#exp-plan')).toHaveValue(expected.plan);await expect(page.locator('#exp-notice')).toHaveValue(expected.notice);
  await expect(page.locator('#active-plan')).toHaveCount(0);
  expect(await page.evaluate(()=>localStorage.length)).toBe(0);
 }
 await page.locator('#exp-name').fill('My chosen tea plan');await page.locator('#exp-plan').fill('My edited action, fallback and review.');
 await page.getByRole('button',{name:'Start this experiment'}).click();await expect(page.getByRole('heading',{name:'My chosen tea plan',exact:true})).toBeVisible();
 await go(page,'putting-a-sugar-plan-into-practice');await page.locator('[data-action=sugar-example][data-strategy=swap]').click();await expect(page.getByRole('button',{name:'Review draft in Experiments',exact:true})).toBeDisabled();
 await page.getByRole('link',{name:'Review or finish your current experiment',exact:true}).click();await expect(page.locator('#active-plan')).toHaveText('My edited action, fallback and review.');
 await page.getByRole('link',{name:'Your data',exact:true}).click();await page.getByRole('button',{name:'Save on this device',exact:true}).click();await page.getByRole('link',{name:'Experiments',exact:true}).click();await page.reload();await expect(page.locator('#active-plan')).toHaveText('My edited action, fallback and review.');
 const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('cravings-lab-v1')));expect(saved.experiments).toHaveLength(1);expect(saved.experiments[0].name).toBe('My chosen tea plan');
});

test('personal drafts survive page navigation, stay private until started and escape notes',async({page})=>{
 await go(page,'putting-a-sugar-plan-into-practice');await page.locator('[data-action=sugar-example][data-strategy=cut-down]').click();
 const literal='<img src=x onerror=alert(1)> & my own words';await page.locator('#sugar-target').fill(literal);await page.locator('#sugar-change').fill('My chosen first step');
 await page.locator('.sugar-path').getByRole('link',{name:'Compare options',exact:true}).click();await page.locator('.sugar-path').getByRole('link',{name:'Build a plan',exact:true}).click();
 await expect(page.locator('#sugar-target')).toHaveValue(literal);await expect(page.locator('#sugar-change')).toHaveValue('My chosen first step');await expect(page.locator('main img')).toHaveCount(0);
 await page.getByRole('link',{name:'Skip to content',exact:true}).press('Enter');await expect(page.locator('#sugar-change')).toHaveValue('My chosen first step');
 expect(await page.evaluate(()=>localStorage.length)).toBe(0);
 await page.getByRole('button',{name:'Review draft in Experiments',exact:true}).click();await expect(page.locator('#exp-plan')).toContainText(literal);await expect(page.locator('main img')).toHaveCount(0);
 // The handoff remains a draft until Start is selected, including across the app's hash pages.
 await page.getByRole('link',{name:'Home',exact:true}).click();await page.getByRole('link',{name:'Experiments',exact:true}).click();await expect(page.locator('#exp-plan')).toContainText('My chosen first step');
 await page.getByRole('link',{name:'Your data',exact:true}).click();
 const downloading=page.waitForEvent('download');await page.getByRole('button',{name:'Export my data'}).click();const file=await downloading;const stream=await file.createReadStream();const chunks=[];for await(const c of stream)chunks.push(c);const exported=JSON.parse(Buffer.concat(chunks).toString());expect(exported.experiments).toHaveLength(0);expect(JSON.stringify(exported)).not.toContain(literal);
 await page.getByRole('button',{name:'Delete all my data',exact:true}).click();await page.locator('dialog').getByRole('button',{name:'Delete everything',exact:true}).click();
 await expect(page.locator('dialog')).not.toBeVisible();await expect(page.locator('#announcement')).toContainText('deleted');await go(page,'putting-a-sugar-plan-into-practice');await expect(page.locator('#sugar-target')).toHaveValue('');await expect(page.locator('#sugar-change')).toHaveValue('');
});
