import { test, expect } from '@playwright/test';

test('Neg_Fun_0009 - Handles Singlish input with embedded English technical terms', async ({ page }) => {
	await page.goto('https://www.swifttranslator.com/');

	// Input
	const singlishInput = page.getByRole('textbox', {
		name: 'Input Your Singlish Text Here.'
	});

	// Enter Singlish
	await singlishInput.fill('eyaata life support eken thamaa inna wenne');

	// Wait until Sinhala text appears
	const sinhalaOutput = page.getByText('එයාට life support එකෙන් තම ඉන්න වෙන්නෙ');

	await expect(sinhalaOutput).toBeVisible();
});
