import { test, expect } from '@playwright/test';

test('Pos_Fun_0010 - Simple greeting conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('mama vaeda karanavaa.');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('මම වැඩ කරනවා.');

  await expect(sinhalaOutput).toBeVisible();
});
