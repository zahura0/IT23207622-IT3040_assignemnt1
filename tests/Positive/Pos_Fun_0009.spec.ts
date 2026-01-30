import { test, expect } from '@playwright/test';

test('Pos_Fun_0009 - Informal slang phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('ela machan vaede hari');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('එල මචන් වැඩෙ හරි');

  await expect(sinhalaOutput).toBeVisible();
});
