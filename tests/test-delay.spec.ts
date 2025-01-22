import { test, expect } from '@playwright/test';

test('waits for page to load', async ({ page }) => {
  await page.goto('http://www.uitestingplayground.com/');
  await page.getByRole('link', { name: 'Load Delay' }).click();
  await page.goto('http://www.uitestingplayground.com/loaddelay');
  await page.getByRole('button', { name: 'Button Appearing After Delay' }).click();
});