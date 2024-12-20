import { test, expect } from "@playwright/test";
import Header from "../pageObjects/header";
import HomePage from "../pageObjects/homePage";
import ContactUsPage from "../pageObjects/contactUsPage";
import { arrCategories, contactUsData } from "../helpers/testData";
import ProductsPage from "../pageObjects/productsPage";

test.describe("homepage.spec", () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.loadHomePage();
	});

	test("verify home page", async ({ page }) => {
		const header = new Header(page);

		const locator = header.locators.getHomePageLink();
		await expect(locator).toHaveCSS("color", "rgb(255, 165, 0)");
	});

	test("verify contacting website", async ({ page }) => {
		const header = new Header(page);
		const contactUsPage = new ContactUsPage(page);

		await header.clickContactUsLink();

		await contactUsPage.fillNameField(contactUsData.name);
		await contactUsPage.fillEmailField(contactUsData.email);
		await contactUsPage.fillMessageField(contactUsData.message);

		await contactUsPage.acceptConfirmationPopup();
		await contactUsPage.clickSubmitButton();

		const expectedElement =
			contactUsPage.locators.getSuccessSubmissionMessage();
		await expect(expectedElement).toBeVisible();
		await expect(expectedElement).toHaveText(
			contactUsData.successSubmissionMessage
		);
	});

	test("verify product categories", async ({ page }) => {
		const header = new Header(page);
		const productsPage = new ProductsPage(page);

		await header.clickProductsLink();
		const data = await productsPage.getCategoriesText();

		expect(data).toEqual(arrCategories);
	});
});
