import { test, expect } from '@playwright/test';

test('Pos_Fun_0010 - Time reference', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('meeting eka 9.15 AM.');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('meeting එක 9.15 AM.');

  await expect(sinhalaOutput).toBeVisible();
});
