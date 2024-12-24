import { test, expect } from "@playwright/test";
import Header from "../pageObjects/header";
import HomePage from "../pageObjects/homePage";
import ProductsPage from "../pageObjects/productsPage";
import { arrCategories } from "../helpers/testData";
import ProductDetailsPage from "../pageObjects/productDetailsPage";
import CartPage from "../pageObjects/cartPage";

test.describe("products page tests", () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.loadHomePage();
	});

	test("verify product categories", async ({ page }) => {
		const header = new Header(page);
		const productsPage = new ProductsPage(page);

		await header.clickProductsLink();
		const data = await productsPage.getCategoriesText();

		expect(data).toEqual(arrCategories);
	});
	test("TC13 verify product quantity in Cart", async ({ page }) => {
		const homePage = new HomePage(page);
		const productDetailsPage = new ProductDetailsPage(page);
		const cartPage = new CartPage(page);

		await homePage.clickViewProductLink(3); 
		await productDetailsPage.fillQuantityField("4");
		await productDetailsPage.clickAddToCartButton();
		await productDetailsPage.isCartModalVisible();
		await productDetailsPage.clickModalViewCartLink();

		const data = await cartPage.locators.getQuantity()
		expect(data.innerText()).toEqual("4")
	});
});
