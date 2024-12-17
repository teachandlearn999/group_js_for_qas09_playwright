import { test, expect } from "@playwright/test";

test.describe("first test suite", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("verify home page", async ({ page }) => {
		//const locator = page.locator(".navbar-nav a[href='/']");
		const locator = page.getByText("Home");

		await expect(locator).toHaveCSS("color", "rgb(255, 165, 0)");
	});

	test("verify contacting website", async ({ page }) => {
		await page.getByText("Contact us").click();

		await page.locator("input[data-qa='name']").fill("my name");
		await page.locator("input[data-qa='email']").fill("myemail@email.com");
		await page.locator("#message").fill("here is my message");

		page.on("dialog", (dialog) => dialog.accept());
		await page.locator("input[data-qa='submit-button']").click();

		const expectedElement = page.locator(".contact-form .status");
		await expect(expectedElement).toBeVisible();
		await expect(expectedElement).toHaveText(
			"Success! Your details have been submitted successfully."
		);
	});

	test("verify product categories", async ({ page }) => {
		const result = ["WOMEN", "MEN", "KIDS"];

		await page.getByText("Products").click();

		const data = await page
			.locator("[data-parent='#accordian']")
			.allInnerTexts();
		expect(data).toEqual(result);
	});
});
