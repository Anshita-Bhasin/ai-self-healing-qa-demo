const { test, expect } = require("@playwright/test");

test("user can sign in to the QA portal", async ({ page }) => {
  await page.goto("/");

  await page.locator("[data-testid='email-input']").fill("anshita@example.com");
  await page.locator("[data-testid='password-input']").fill("demo1234");

  // Broken on purpose for the demo: the app used to have id="login-button".
  await page.locator("[data-testid='sign-in-button']").click();

  await expect(page.locator("[data-testid='login-message']")).toContainText("Login successful");
});
