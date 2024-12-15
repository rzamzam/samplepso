const { test, expect } = require('@playwright/test');

test('Homepage loads correctly', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500'); // Replace with your local server URL
  const title = await page.title();
  expect(title).not.toBeNull(); // Ensure the title exists
  expect(await page.locator('h1').textContent()).toBe('Expected Heading'); // Replace with your actual heading
});