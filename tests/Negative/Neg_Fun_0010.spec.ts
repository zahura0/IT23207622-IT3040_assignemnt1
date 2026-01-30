import { test, expect } from '@playwright/test';

test('Neg_Fun_0010 - Incorrect handling of mixed language with abbreviation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('magee ID eka denna');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('මගේ ID එක දෙන්න');

  await expect(sinhalaOutput).toBeVisible();
});
