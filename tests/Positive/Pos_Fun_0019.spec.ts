import { test, expect } from '@playwright/test';

test('Pos_Fun_0019 - Past tense fun activity with mixed English', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('iiyee mama sentoosaa gihin hoDHAtama themenakam water slide ekee sellam kaLaa.');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('ඊයේ මම සෙන්ටෝසා ගිහින් හොඳටම තෙමෙනකම් water slide එකේ සෙල්ලම් කළා.');

  await expect(sinhalaOutput).toBeVisible();
});
