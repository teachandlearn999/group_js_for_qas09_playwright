class CartPage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getQuantityFie: () => this.page.locator(".cart_quantity button"),
	};

    async getQuantity(Volue) {
		await this.locators.getInputFieldName().fill(name);
		return this;
	}

	

	
}

export default CartPage;
