import { test, expect } from '@playwright/test';

test('Neg_Fun_0009 - Incorrect handling of long input', async ({ page }) => {
	await page.goto('https://www.swifttranslator.com/');

	// Input
	const singlishInput = page.getByRole('textbox', {
		name: 'Input Your Singlish Text Here.'
	});

	// Enter a long input (≥ 300 characters)
	const longInput = 'dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa vana bava pravaahana,mahaamaarga saha naagarika sQQvarDhana amaathYA bimal rathnaayaka saDHahan kaLeeya.';
	await singlishInput.fill(longInput);

	// Wait for incorrect Sinhala output (simulate a failure: expect wrong or missing translation)
	const incorrectOutput = page.getByText('ධිත්වා සුළි කුණාටුව සමඟ ඇති වූ ග්‍රාත් වතුර සහ නායයෑම් හේතුවෙන් මාර්ග සංවර්ධන අධිකාරිය සතු මාර්ග කොටස් 430k විනාශයට පත්ව ඇති අතර, එහි සමස්ත දිග ප්‍රමාණය කිලෝමීටර් 300k පමණ වන බව ප්‍රවාහන, මහමාර්ග සහ නාගරික සංවර්ධන අමාත්‍ය බිමල් රත්නායක සඳහන් කළේය.', { exact: true });
	await expect(incorrectOutput).not.toBeVisible();
});
