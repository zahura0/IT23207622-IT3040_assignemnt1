import { test, expect } from '@playwright/test';

test('Pos_Fun_0021 - Convert a short daily greeting phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('oyaa heta gedhara yadhdhi anivaaren yathura meesa uda thiyalaa yanna. mathaka aethuva kaeema ekath aragena yanna , pigaanen vahalaa thiyenne. mama yanavaa heta udhenma magee IELTS Exam eka karanna. parissamin yanna ehenam');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('ඔයා හෙට ගෙදර යද්දි අනිවාරෙන් යතුර මේස උඩ තියලා යන්න. මතක ඇතුව කෑම එකත් අරගෙන යන්න , පිගානෙන් වහලා තියෙන්නෙ. මම යනවා හෙට උදෙන්ම මගේ IELTS Exam එක කරන්න. පරිස්සමින් යන්න එහෙනම්');

  await expect(sinhalaOutput).toBeVisible();
});
