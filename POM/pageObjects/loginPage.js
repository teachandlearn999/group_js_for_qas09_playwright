class LoginPage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getInputFieldEmail: () => this.page.locator(".login-form input[data-qa='login-email']"),
        getInputFieldPassword: () => this.page.locator(".login-form input[data-qa='login-password']"),
		getLoginButton: () =>
			this.page.locator("button[data-qa='login-button']"),
	};

    async fillEmailField(loginEmail) {
		await this.locators.getInputFieldEmail().fill(loginEmail);
		return this;
	}

    async fillPasswordField(loginPassword) {
		await this.locators.getInputFieldPassword().fill(loginPassword);
		return this;
	}

	async clickLoginButton() {
		this.locators.getLoginButton().click();
		return this;
	}
}

export default LoginPage;
