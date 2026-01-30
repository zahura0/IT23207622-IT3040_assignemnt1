import { test, expect } from '@playwright/test';

test('Neg_Fun_0004 - Typographical error handling', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('mata bath oonnee');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('මට බත් ඕනේ');

  await expect(sinhalaOutput).toBeVisible();
});
