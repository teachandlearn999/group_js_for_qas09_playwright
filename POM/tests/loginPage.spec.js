import { test, expect } from "@playwright/test";
import Header from "../pageObjects/header";
import HomePage from "../pageObjects/homePage";
import LoginPage from "../pageObjects/loginPage";
import { loginData } from "../helpers/testData";

test.describe("login page tests", () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.loadHomePage();
	});

	test("TC2: Login User with correct email and password", async ({ page }) => {
		const header = new Header(page);
		const loginPage = new LoginPage(page);

		await header.clickSignupLogin();

        await loginPage.fillEmailField(loginData.loginEmail);
        await loginPage.fillPasswordField(loginData.loginPassword);
        await loginPage.clickLoginButton();
        await expect(header.locators.getLoggedInName()).toHaveText(loginData.loggedInAsName);
	});
});