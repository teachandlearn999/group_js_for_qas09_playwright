import ProductDetailsPage from "./productDetailsPage";

class HomePage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getViewProductLink: () => this.page.getByText("View Product"),
	};

	async loadHomePage() {
		await this.page.goto("/");
	}

	async clickViewProductLink(productIndex) {
		await this.locators.getViewProductLink().nth(productIndex).click();
		return new ProductDetailsPage(this.page);
	}

}

export default HomePage;
