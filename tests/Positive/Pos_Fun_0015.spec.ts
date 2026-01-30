import { test, expect } from '@playwright/test';

test('Pos_Fun_0015 - Convert with line break multi-line', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('mama dhaen kanavaa. heta api ekata kamu\noyaa kaemathi nam apith ekka ekathu venna puLuvan.');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('මම දැන් කනවා. හෙට අපි එකට කමු\nඔයා කැමති නම් අපිත් එක්ක එකතු වෙන්න පුළුවන්.');

  await expect(sinhalaOutput).toBeVisible();
});
