import { test, expect } from '@playwright/test';

test('test Alert', async ({ page }) => {
  await page.goto('http://www.uitestingplayground.com/');
  await page.getByRole('link', { name: 'Alerts' }).click();
  await page.getByRole('button', { name: 'Alert' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Prompt' }).click();
});