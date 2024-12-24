class CartPage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getQuantityField: () => this.page.locator(".cart_quantity button"),
	};

	async getQuantity() {
		const fieldValue = await this.locators.getQuantityField().innerText();
		return fieldValue;
	}
}

export default CartPage;
