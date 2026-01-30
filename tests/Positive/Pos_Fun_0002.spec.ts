import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 - Simple greeting conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('mata kaema oonee.');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('මට කැම ඕනේ.');

  await expect(sinhalaOutput).toBeVisible();
});
