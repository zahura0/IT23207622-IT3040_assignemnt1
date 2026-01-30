import { test, expect } from '@playwright/test';

test('Neg_Fun_0007 - [Add your test description here]', async ({ page }) => {
	await page.goto('https://www.swifttranslator.com/');

	// Input
	const singlishInput = page.getByRole('textbox', {
		name: 'Input Your Singlish Text Here.'
	});

	// Enter Singlish
	await singlishInput.fill('[Enter your Singlish test input here]');

	// Wait until Sinhala text appears
	const sinhalaOutput = page.getByText('[Expected Sinhala output here]');

	await expect(sinhalaOutput).toBeVisible();
});
