const { test, expect } = require('@playwright/test');

test.describe('Mobile Search Layout', () => {
  test('320px viewport', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto('http://127.0.0.1:5500/Project/Grandpa-Ron-Mockup-/index.html');

    const navbar = page.locator('.navbar');
    const logo = page.locator('.logo');
    const searchButton = page.locator('.search-button');
    const hamburger = page.locator('.menu-button');
    const searchInput = page.locator('.search-input');
    const searchContainer = page.locator('.search-container');

    // Initial state
    await expect(logo).toBeVisible();
    await expect(searchButton).toBeVisible();
    await expect(hamburger).toBeVisible();

    const initialLogoBounds = await logo.boundingBox();
    const initialHamburgerBounds = await hamburger.boundingBox();
    const navbarBounds = await navbar.boundingBox();

    // Open search
    await searchButton.click();
    await expect(searchInput).toBeFocused();

    // Verify navbar controls remain visible
    await expect(logo).toBeVisible();
    await expect(searchButton).toBeVisible();
    await expect(hamburger).toBeVisible();

    const activeLogoBounds = await logo.boundingBox();
    const activeHamburgerBounds = await hamburger.boundingBox();

    // Logo and hamburger should not move
    expect(Math.abs(activeLogoBounds.x - initialLogoBounds.x)).toBeLessThan(2);
    expect(Math.abs(activeHamburgerBounds.x - initialHamburgerBounds.x)).toBeLessThan(2);

    // Search container should be below navbar
    const searchBounds = await searchContainer.boundingBox();
    expect(searchBounds.y).toBeGreaterThanOrEqual(navbarBounds.height);

    // Type query
    await searchInput.fill('fire');
    await page.waitForTimeout(500);

    const resultsPanel = page.locator('.search-results-panel');
    await expect(resultsPanel).toBeVisible();

    const filters = page.locator('.search-filters');
    await expect(filters).toBeVisible();

    // Verify filters don't overlap results
    const filtersBounds = await filters.boundingBox();
    const resultsPanelBounds = await resultsPanel.boundingBox();

    expect(filtersBounds.y + filtersBounds.height).toBeLessThanOrEqual(resultsPanelBounds.y);

    // Click filter
    const skillsFilter = page.locator('.search-filter-btn[data-filter="skills"]');
    await skillsFilter.click();

    // Verify still works
    const firstResult = page.locator('.search-result').first();
    await expect(firstResult).toBeVisible();

    // Close with Escape
    await searchInput.press('Escape');
    await expect(searchButton).toBeFocused();

    // Reopen and close with button
    await searchButton.click();
    await expect(searchInput).toBeFocused();
    await searchButton.click();

    // Verify hamburger still works
    await hamburger.click();
    const mobileMenu = page.locator('.mobile-menu');
    await expect(mobileMenu).toHaveClass(/active/);
  });

  test('375px viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://127.0.0.1:5500/Project/Grandpa-Ron-Mockup-/index.html');

    const searchButton = page.locator('.search-button');
    const searchInput = page.locator('.search-input');
    const searchContainer = page.locator('.search-container');

    await searchButton.click();
    await searchInput.fill('fire');
    await page.waitForTimeout(300);

    // Verify no overflow
    const containerBounds = await searchContainer.boundingBox();
    expect(containerBounds.x).toBeGreaterThanOrEqual(0);
    expect(containerBounds.x + containerBounds.width).toBeLessThanOrEqual(375);

    const resultsPanel = page.locator('.search-results-panel');
    await expect(resultsPanel).toBeVisible();
  });

  test('425px viewport', async ({ page }) => {
    await page.setViewportSize({ width: 425, height: 844 });
    await page.goto('http://127.0.0.1:5500/Project/Grandpa-Ron-Mockup-/index.html');

    const searchButton = page.locator('.search-button');
    const searchInput = page.locator('.search-input');

    await searchButton.click();
    await searchInput.fill('fire');
    await page.waitForTimeout(300);

    const resultsPanel = page.locator('.search-results-panel');
    await expect(resultsPanel).toBeVisible();
  });

  test('518px viewport', async ({ page }) => {
    await page.setViewportSize({ width: 518, height: 800 });
    await page.goto('http://127.0.0.1:5500/Project/Grandpa-Ron-Mockup-/index.html');

    const searchButton = page.locator('.search-button');
    const searchInput = page.locator('.search-input');

    await searchButton.click();
    await searchInput.fill('fire');
    await page.waitForTimeout(300);

    const resultsPanel = page.locator('.search-results-panel');
    await expect(resultsPanel).toBeVisible();
  });

  test('Desktop 1440px preserved', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('http://127.0.0.1:5500/Project/Grandpa-Ron-Mockup-/index.html');

    const navbar = page.locator('.navbar');
    const logo = page.locator('.logo');
    const searchButton = page.locator('.search-button');
    const searchInput = page.locator('.search-input');
    const searchContainer = page.locator('.search-container');

    await searchButton.click();
    await searchInput.fill('fire');
    await page.waitForTimeout(300);

    // Desktop should hide navbar elements
    await expect(logo).not.toBeVisible();

    // Search should overlay
    await expect(navbar).toHaveClass(/search-active/);
    const containerBounds = await searchContainer.boundingBox();
    const navbarBounds = await navbar.boundingBox();

    // Container should be within navbar height
    expect(containerBounds.y).toBeLessThan(navbarBounds.height);

    const resultsPanel = page.locator('.search-results-panel');
    await expect(resultsPanel).toBeVisible();

    // Close
    const closeBtn = page.locator('.search-close');
    await closeBtn.click();
    await expect(logo).toBeVisible();
  });
});
