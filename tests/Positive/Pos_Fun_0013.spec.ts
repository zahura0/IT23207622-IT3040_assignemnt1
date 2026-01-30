import { test, expect } from '@playwright/test';

test('Pos_Fun_0013 - Convert a short daily greeting phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('gihin balala enna.');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('ගිහින් බලල එන්න.');

  await expect(sinhalaOutput).toBeVisible();
});
