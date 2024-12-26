export class LoginPage{

    constructor(page) {
        this.emailInput = page.getByRole('textbox', {name: "Add your email address here"})
        this.passwordInput = page.getByRole('textbox', {name: "Add your password here"})
        this.loginButton = page.getByText('Log In').last();
    }

    async login(testUser) {
        await this.emailInput.fill(testUser.email);
        await this.passwordInput.fill(testUser.password);
        await this.loginButton.click();
    }
}