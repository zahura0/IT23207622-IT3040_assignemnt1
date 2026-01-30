import { test, expect } from '@playwright/test';

test('Neg_Fun_0005 - [Add your test description here]', async ({ page }) => {
	await page.goto('https://www.swifttranslator.com/');

	// Input
	const singlishInput = page.getByRole('textbox', {
		name: 'Input Your Singlish Text Here.'
	});

	// Enter Singlish
	await singlishInput.fill('ela machan supiri supirii!!');

	// Wait until Sinhala text appears
	const sinhalaOutput = page.getByText('එල මචන් සුපිරි සුපිරි!!');

	await expect(sinhalaOutput).toBeVisible();
});
