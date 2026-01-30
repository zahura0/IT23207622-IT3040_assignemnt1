import { test, expect } from '@playwright/test';

test('Neg_Fun_0001 - Joined word handling', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('matahariyatathiyenavaa');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('මට හරියට තියෙනවා');

  await expect(sinhalaOutput).toBeVisible();
});
