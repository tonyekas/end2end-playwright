import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('test');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').fill('1234');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('tony@incep.com');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').fill('1234788hjakk@aas');
  await page.getByRole('button', { name: 'Login' }).click();
});