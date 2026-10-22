const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: '.',
  testMatch: 'test-mobile-search.spec.js',
  timeout: 60000,
  use: {
    baseURL: 'http://127.0.0.1:5500',
    headless: false,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
