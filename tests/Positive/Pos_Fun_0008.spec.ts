import { test, expect } from '@playwright/test';

test('Pos_Fun_0008 - Polite request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('karuNaakara magee file eka balanna.');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('කරුණාකර මගේ file එක බලන්න.');

  await expect(sinhalaOutput).toBeVisible();
});
