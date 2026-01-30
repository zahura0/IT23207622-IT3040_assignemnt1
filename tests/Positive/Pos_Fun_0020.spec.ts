import { test, expect } from '@playwright/test';

test('Pos_Fun_0020 - Request to change practice time with mixed English', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('adha mata practice enna venne nae puluvannam ubata puluvandha coach ta kiyala velaava venas karaganna.mata 12.00 pm thamaa ivaravenne mata practice valata enna puluvan 4.00 pm vagee .');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('අද මට practice එන්න වෙන්නෙ නැ පුලුවන්නම් උබට පුලුවන්ද coach ට කියල වෙලාව වෙනස් කරගන්න.මට 12.00 pm තමා ඉවරවෙන්නෙ මට practice වලට එන්න පුලුවන් 4.00 pm වගේ .');

  await expect(sinhalaOutput).toBeVisible();
});
