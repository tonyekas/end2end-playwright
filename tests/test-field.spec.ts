import { test, expect } from '@playwright/test';

test('Field and button test', async ({ page }) => {
  await page.goto('http://www.uitestingplayground.com/');
  await page.getByRole('link', { name: 'Text Input' }).click();
  await page.getByPlaceholder('MyButton').click();
  await page.getByPlaceholder('MyButton').fill('magic button!');
  await page.getByRole('button', { name: 'Button That Should Change it\'' }).click();
  await page.getByRole('button', { name: 'magic button!' }).click();
});