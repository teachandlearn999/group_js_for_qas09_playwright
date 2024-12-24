import CartPage from "./cartPage";

class ProductDetailsPage {
	constructor(page) {
		this.page = page;
	}

	locators = {
        getQuantityInputField: () => this.page.locator("#quantity"),
        getAddToCartButton: () => this.page.locator("button.cart"),
        getCartModal: () => this.page.locator("#cartModal"),
        getModalViewCartLink: () => this.page.locator("#cartModal a[href='/view_cart']"),
	};

	async fillQuantityField(quantity) {
		await this.locators.getQuantityInputField().fill(quantity);
		return this;
	}

    async clickAddToCartButton() {
		await this.locators.getAddToCartButton().click();
		return this;
	}

    async isCartModalVisible() {
        await this.locators.getCartModal().isVisible();
        return this;
    }

    async clickModalViewCartLink() {
        await this.locators.getModalViewCartLink().click();
        return new CartPage(this.page);
    }
}

export default ProductDetailsPage;