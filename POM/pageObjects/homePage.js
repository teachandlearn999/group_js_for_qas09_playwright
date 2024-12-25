class HomePage {
	constructor(page) {
		this.page = page;
	}

	async loadHomePage() {
		await this.page.goto("/");
	}
}

export default HomePage;
