import { test, expect } from '@playwright/test';

test('Pos_Fun_0014 - Convert very polite request form', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('karuNaakaralaa oyaata puLuvannam mata eeka poddak explain karannako');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('කරුණාකරලා ඔයාට පුළුවන්නම් මට ඒක පොඩ්ඩක් explain කරන්නකො');

  await expect(sinhalaOutput).toBeVisible();
});
