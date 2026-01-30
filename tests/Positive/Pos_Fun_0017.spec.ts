import { test, expect } from '@playwright/test';

test('Pos_Fun_0017 - Informal slang request with negation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('machan, mata samaavenna, mata velaavata enna baeri veyi. oyaata athsan karanna puLuvandha?');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('මචන්, මට සමාවෙන්න, මට වෙලාවට එන්න බැරි වෙයි. ඔයාට අත්සන් කරන්න පුළුවන්ද?');

  await expect(sinhalaOutput).toBeVisible();
});
