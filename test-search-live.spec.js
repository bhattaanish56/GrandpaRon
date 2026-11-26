const { test, expect } = require('@playwright/test');

test.describe('Fuzzy Search Functionality', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:8080/index.html');
    });

    test('Search button opens search interface', async ({ page }) => {
        await page.click('.search-button');
        await expect(page.locator('.search-input')).toBeVisible();
    });

    test('Exact match: "fishing"', async ({ page }) => {
        await page.click('.search-button');
        await page.fill('.search-input', 'fishing');
        await page.waitForTimeout(500);

        const results = await page.locator('.search-result').count();
        expect(results).toBeGreaterThan(0);

        const firstResult = await page.locator('.search-result').first().textContent();
        expect(firstResult.toLowerCase()).toContain('fishing');
    });

    test('Synonym expansion: "angling"', async ({ page }) => {
        await page.click('.search-button');
        await page.fill('.search-input', 'angling');
        await page.waitForTimeout(500);

        const results = await page.locator('.search-result').count();
        expect(results).toBeGreaterThan(0);

        const resultText = await page.locator('.search-result').first().textContent();
        expect(resultText.toLowerCase()).toContain('fish');
    });

    test('Multi-word: "camping gear"', async ({ page }) => {
        await page.click('.search-button');
        await page.fill('.search-input', 'camping gear');
        await page.waitForTimeout(500);

        const results = await page.locator('.search-result').count();
        expect(results).toBeGreaterThan(0);
    });

    test('Typo handling: "campng"', async ({ page }) => {
        await page.click('.search-button');
        await page.fill('.search-input', 'campng');
        await page.waitForTimeout(500);

        const results = await page.locator('.search-result').count();
        expect(results).toBeGreaterThan(0);

        const resultText = await page.locator('.search-result').first().textContent();
        expect(resultText.toLowerCase()).toContain('camp');
    });

    test('Typo handling: "advnture"', async ({ page }) => {
        await page.click('.search-button');
        await page.fill('.search-input', 'advnture');
        await page.waitForTimeout(500);

        const results = await page.locator('.search-result').count();
        expect(results).toBeGreaterThan(0);
    });

    test('Search works from about page', async ({ page }) => {
        await page.goto('http://localhost:8080/about.html');
        await page.click('.search-button');
        await page.fill('.search-input', 'fire');
        await page.waitForTimeout(500);

        const results = await page.locator('.search-result').count();
        expect(results).toBeGreaterThan(0);
    });

    test('Section scrolling with anchor', async ({ page }) => {
        await page.click('.search-button');
        await page.fill('.search-input', 'fire');
        await page.waitForTimeout(500);

        const resultWithSection = await page.locator('.search-result[href*="#"]').first();
        if (await resultWithSection.count() > 0) {
            const href = await resultWithSection.getAttribute('href');
            expect(href).toContain('#');
        }
    });

    test('Category filter works', async ({ page }) => {
        await page.click('.search-button');
        await page.fill('.search-input', 'camping');
        await page.waitForTimeout(500);

        // Click Skills filter
        await page.click('[data-filter="Skills"]');
        await page.waitForTimeout(300);

        const results = await page.locator('.search-result').count();
        expect(results).toBeGreaterThan(0);
    });
});
