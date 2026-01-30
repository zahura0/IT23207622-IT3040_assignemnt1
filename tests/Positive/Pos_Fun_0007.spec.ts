import { test, expect } from '@playwright/test';

test('Pos_Fun_0007 - Future plan', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('api heta trip ekak yamu.');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('අපි හෙට trip එකක් යමු.');

  await expect(sinhalaOutput).toBeVisible();
});
