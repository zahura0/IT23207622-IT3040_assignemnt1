import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 - Simple greeting conversion', async ({ page }) => {
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
