import { test, expect } from '@playwright/test';
import { lessons } from '../cravings/lessons.js';
import AxeBuilder from '@axe-core/playwright';

test('learn path explains each concept, gives feedback, and links to practice', async ({page}) => {
  await page.goto('/cravings/');
  await page.getByRole('link',{name:'Explore the lessons'}).click();
  await expect(page.getByRole('link',{name:'Read lesson'})).toHaveCount(lessons.length);
  await page.getByRole('link',{name:'Read lesson'}).first().click();
  for (const [i,lesson] of lessons.entries()) {
    await expect(page.getByRole('heading',{level:1})).toHaveText(lesson.title);
    await expect(page.locator('nav a[aria-current=page]')).toHaveText('Learn');
    await expect(page).toHaveTitle(lesson.title+' · Cravings Lab');
    await expect(page.getByText(lesson.example,{exact:true})).toBeVisible();
    await expect(page.getByRole('heading',{name:lesson.question,exact:true})).toBeHidden();
    await page.getByText('Try the example question',{exact:true}).press('Enter');
    expect(new Set(lesson.answers.map(({feedback})=>feedback)).size).toBe(lesson.answers.length);
    for (const [index, answer] of lesson.answers.entries()) {
      await page.getByRole('button',{name:answer.text,exact:true}).click();
      await expect(page.locator('#lesson-feedback')).toContainText(index===lesson.correct ? 'That fits the example.' : 'Try another answer.');
      await expect(page.locator('#lesson-feedback')).toContainText(answer.feedback);
    }
    await expect(page.getByRole('link',{name:lesson.action,exact:true})).toHaveAttribute('href',lesson.href);
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
    if(i<lessons.length-1) await page.getByRole('link',{name:'Next lesson'}).click();
  }
  const result=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
  expect(result.violations).toEqual([]);
  await page.getByRole('link',{name:'Previous lesson'}).click();
  await expect(page.getByRole('heading',{level:1})).toHaveText(lessons.at(-2).title);
  await page.goto('/cravings/#lesson/thoughts-and-choice');
  await page.getByRole('link',{name:'Try Notice a craving thought',exact:true}).click();
  await expect(page.getByRole('heading',{name:'Notice the words'})).toBeVisible();
});

test('support stays directly accessible and practice links explain the ideas', async ({page}) => {
  await page.goto('/cravings/#tools');
  await page.getByRole('link',{name:'Read the related lesson'}).nth(1).click();
  await expect(page.getByRole('heading',{level:1})).toHaveText('A thought is not an instruction');
  await page.getByRole('link',{name:'Support',exact:true}).click();
  await expect(page.getByRole('heading',{name:'When to speak to someone'})).toBeVisible();
  await expect(page.getByRole('heading',{name:'Sources & scope'})).toBeVisible();
  const urgent=page.getByRole('heading',{name:'If you feel physically unwell'});
  const evidence=page.getByRole('heading',{name:'What the evidence supports'});
  expect(await evidence.evaluate(heading => Boolean(
    document.querySelector('.support-layout aside').compareDocumentPosition(heading)
      & Node.DOCUMENT_POSITION_FOLLOWING
  ))).toBe(true);
  const urgentBox=await urgent.boundingBox();
  const evidenceBox=await evidence.boundingBox();
  if (page.viewportSize().width <= 1100) {
    expect(urgentBox.y).toBeLessThan(evidenceBox.y);
  } else {
    expect(urgentBox.x).toBeLessThan(evidenceBox.x);
  }
});
