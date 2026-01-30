import { test, expect } from '@playwright/test';

test('Pos_Fun_0006 - Negative ability statement', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('mata eeka karanna baee.');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('මට ඒක කරන්න බෑ.');

  await expect(sinhalaOutput).toBeVisible();
});
