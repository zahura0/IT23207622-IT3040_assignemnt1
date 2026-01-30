import { test, expect } from '@playwright/test';

test('Pos_Fun_0024 - Polite apology with conditional late excuse', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('samaavenna, mama dhaen office yanna oni, namuth traffic eka unoth late venna puluvan. oyaata mata excuse karanna puluvandha?');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('සමාවෙන්න, මම දැන් office යන්න ඔනි, නමුත් traffic එක උනොත් late වෙන්න පුලුවන්. ඔයාට මට excuse කරන්න පුලුවන්ද?');

  await expect(sinhalaOutput).toBeVisible();
});
