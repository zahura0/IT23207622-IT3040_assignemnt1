import { test, expect } from '@playwright/test';

test('Pos_Fun_0003 - Compound sentence with contrast', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('mama enavaa, namuth eyaa inne naehae.');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('මම එනවා, නමුත් එයා ඉන්නේ නැහැ.');

  await expect(sinhalaOutput).toBeVisible();
});
