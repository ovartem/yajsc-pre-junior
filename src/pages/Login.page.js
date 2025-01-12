export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  userNameInput = this.page.locator('#user-name');

  passwordInput = this.page.locator('#password');

  loginButton = this.page.locator('#login-button');

  async performLogin(userName, password) {
    await this.userNameInput.fill(userName);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
