import { test, expect } from '@playwright/test';

test('Neg_Fun_0002 - Polite question with offer and date instruction', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('oyaata puluvandha heta idhan vaeda patan ganna ? oyaa mee offer ekata kaemathi nam magee email eka kompaeni database ekee aethi oyaa ekata thamangee CV eka 12 of januay valata kalin evalaa thiyanna.');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('ඔයාට පුලුවන්ද හෙට ඉදන් වැඩ පටන් ගන්න ? ඔයා මේ offer එකට කැමති නම් මගේ email එක කොම්පැනි database එකේ ඇති ඔයා එකට තමන්ගේ CV එක 12 of januay වලට කලින් එවලා තියන්න.');

  await expect(sinhalaOutput).toBeVisible();
});
