import { test, expect } from "@playwright/test";
import Header from "../pageObjects/header";
import HomePage from "../pageObjects/homePage";
import ProductsPage from "../pageObjects/productsPage";
import ProductDetailsPage from "../pageObjects/productDetailsPage";
import CartPage from "../pageObjects/cartPage";
import {
	arrCategories,
	productItemSequence,
	cartItemQuantity,
} from "../helpers/testData";

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

		await homePage.clickViewProductLink(productItemSequence);
		await productDetailsPage.fillQuantityField(cartItemQuantity);
		await productDetailsPage.clickAddToCartButton();
		await productDetailsPage.isCartModalVisible();
		await productDetailsPage.clickModalViewCartLink();

		expect(await cartPage.getQuantity()).toEqual(cartItemQuantity);
	});
});
