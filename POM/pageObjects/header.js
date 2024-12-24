import ContactUsPage from "./contactUsPage";
import ProductsPage from "./productsPage";
import LoginPage from "./loginPage";

class Header {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getHomePageLink: () => this.page.locator(".navbar-nav a[href='/']"),
		getContactUsLink: () => this.page.getByText("Contact us"),
		getProductsLink: () => this.page.getByText("Products"),
		getSignupLoginLink: () => this.page.locator(".nav a[href='/login']")
	};

	async clickContactUsLink() {
		await this.locators.getContactUsLink().click();
		return new ContactUsPage(this.page);
	}

	async clickProductsLink() {
		await this.locators.getProductsLink().click();
		return new ProductsPage(this.page);
	}

	async clickSignupLogin() {
		await this.locators.getSignupLoginLink().click();
		return new LoginPage(this.page)
	} 
}

export default Header;
