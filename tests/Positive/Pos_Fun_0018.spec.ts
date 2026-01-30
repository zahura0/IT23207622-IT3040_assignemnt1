import { test, expect } from '@playwright/test';

test('Pos_Fun_0018 - Complex sentence with past effort and ongoing help', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('dhavasa puraama vaeda karalaa mahansi vuNath, mama thaamath magee yaaLuvaata eyaagee parigaNakaya hadhanna udhav karanavaa.');

  // Wait until Sinhala text appears
  const sinhalaOutput = page.getByText('දවස පුරාම වැඩ කරලා මහන්සි වුණත්, මම තාමත් මගේ යාළුවාට එයාගේ පරිගණකය හදන්න උදව් කරනවා.');

  await expect(sinhalaOutput).toBeVisible();
});
