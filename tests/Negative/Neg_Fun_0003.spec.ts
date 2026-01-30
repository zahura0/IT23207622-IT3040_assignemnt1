import { test, expect } from '@playwright/test';

test('Neg_Fun_0003 - Slang suggestion with future plan', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('machan, adha evening eke free nam, api coffee ekak bila passe walk ekak yamu dha? mata oya ekka kathaa karanna oni.');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('මචන්, අද evening එකෙ free නම්, අපි coffee එකක් බිල පස්සෙ walk එකක් යමු ද? මට ඔය එක්ක කතා කරන්න ඔනි.');

  await expect(sinhalaOutput).toBeVisible();
});
