import { test, expect } from '@playwright/test';

test('Pos_Fun_0022 - Complex instructions with reminder and mixed English', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('adoo adha havasata varen ape geval paeththee. adha havasata api campus eka sudhdha karanna yanne. passee raeeta adiyak gahanavaa , puLuvan nam varen dhaen methana 10 ta vaediya senagak innavaa');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('අඩෝ අද හවසට වරෙන් ape ගෙවල් පැත්තේ. අද හවසට අපි campus එක සුද්ද කරන්න යන්නෙ. පස්සේ රෑට අඩියක් ගහනවා , පුළුවන් නම් වරෙන් දැන් මෙතන 10 ට වැඩිය සෙනගක් ඉන්නවා');

  await expect(sinhalaOutput).toBeVisible();
});
