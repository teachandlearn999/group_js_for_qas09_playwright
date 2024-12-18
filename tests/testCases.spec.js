import { test, expect } from "@playwright/test";

test.describe("Test cases from list", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

    test("TC-1 | Register User", async ({ page }) => {
		//const locator = page.locator(".navbar-nav a[href='/']");
		const locator = page.getByText("Home");
        const loggedInSign = page.locator('text=/Logged in as/i')
        function generateRandomEmail() {
            const randomString = Math.random().toString(25).substring(2, 10);
            return randomString + '@gmail.com'; 
        }
        
        console.log(generateRandomEmail());
        
        await expect(locator).toHaveCSS("color", "rgb(255, 165, 0)");
        await page.locator('.nav a[href="/login"]').click();
        expect(page.getByText('New User Signup!')).toBeVisible();
        await page.locator('[data-qa=signup-name]').fill('Tester');
        await page.locator('[data-qa=signup-email]').fill(generateRandomEmail());
        await page.locator('[data-qa=signup-button]').click();
        expect(page.getByText('Enter Account Information')).toBeVisible();
        await page.locator('#id_gender2').click();
        await page.locator('#password').fill('Tester');
        await page.locator('#days').selectOption({ value: '1' });
        await page.locator('#months').selectOption({ value: '1' });
        await page.locator('#years').selectOption({ value: '2000' });
        await page.locator('#newsletter').check();
        await page.locator('#optin').check();
        await page.locator('#first_name').fill('Tester');
        await page.locator('#last_name').fill('01');
        await page.locator('#company').fill('QA');
        await page.locator('#address1').fill('Address1');
        await page.locator('#address2').fill('Address2');
        await page.locator('#state').fill('IL');
        await page.locator('#city').fill('Chicago');
        await page.locator('#zipcode').fill('12345');
        await page.locator('#mobile_number').fill('7735055533');
        await page.locator('button[data-qa="create-account"]').click();
        expect(page.getByText('Account Created!')).toBeVisible();
        await page.locator('a[data-qa="continue-button"]').click();
        await expect(loggedInSign).toBeVisible();
        await page.locator('.navbar-nav a[href="/delete_account"]').click();
        expect(page.getByText('Account Deleted!')).toBeVisible();
        await page.locator('a[data-qa="continue-button"]').click();






        

	});
});