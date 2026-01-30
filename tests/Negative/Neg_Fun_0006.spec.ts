import { test, expect } from '@playwright/test';

test('Neg_Fun_0006 - Converts Singlish with comma separation and inconsistent repetition', async ({ page }) => {
	await page.goto('https://www.swifttranslator.com/');

	// Input
	const singlishInput = page.getByRole('textbox', {
		name: 'Input Your Singlish Text Here.'
	});

	// Enter Singlish
	await singlishInput.fill('issarahata poddak yanna, poddi poddak');

	// Wait until Sinhala text appears
	const sinhalaOutput = page.getByText('ඉස්සරහට පොඩ්ඩක් යන්න, පොඩ් පොඩ්ඩක්');

	await expect(sinhalaOutput).toBeVisible();
});
