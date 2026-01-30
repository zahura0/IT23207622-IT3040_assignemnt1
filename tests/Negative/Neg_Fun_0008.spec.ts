import { test, expect } from '@playwright/test';

test('Neg_Fun_0008 - Converts mixed Singlish and English words without losing semantic meaning', async ({ page }) => {
	await page.goto('https://www.swifttranslator.com/');

	// Input
	const singlishInput = page.getByRole('textbox', {
		name: 'Input Your Singlish Text Here.'
	});

	// Enter Singlish
	await singlishInput.fill('karunaakaralaa podi help ekak karannako');

	// Wait until Sinhala text appears
	const sinhalaOutput = page.getByText('කරුණාකරලා පොඩි help එකක් කරන්නකො');

	await expect(sinhalaOutput).toBeVisible();
});
