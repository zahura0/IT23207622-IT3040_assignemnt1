import { test, expect } from '@playwright/test';

test('Pos_Fun_0012 - Plural pronoun usage', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('oyaalaa enavaa.');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('ඔයාලා එනවා.');

  await expect(sinhalaOutput).toBeVisible();
});
