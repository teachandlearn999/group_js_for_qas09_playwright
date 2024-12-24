class HomePage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getHomeHeader: () => this.page.locator(".nav.navbar-nav"),
	};

	async loadHomePage() {
		await this.page.goto("/");
	}
}

export default HomePage;
