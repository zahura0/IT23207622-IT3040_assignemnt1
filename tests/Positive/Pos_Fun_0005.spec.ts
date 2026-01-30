import { test, expect } from '@playwright/test';

test('Pos_Fun_0005 - Imperative instruction', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('issarahata poddak yanna.');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('ඉස්සරහට පොඩ්ඩක් යන්න.');

  await expect(sinhalaOutput).toBeVisible();
});
