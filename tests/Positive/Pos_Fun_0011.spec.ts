import { test, expect } from '@playwright/test';

test('Pos_Fun_0011 - Currency amount', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('bill eka Rs. 3200.');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('bill එක Rs. 3200.');

  await expect(sinhalaOutput).toBeVisible();
});
