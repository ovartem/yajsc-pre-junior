export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameElement = this.page.locator('#user-name');
    this.passwordElement = this.page.locator('#password');
    this.loginButtonElement = this.page.locator('#login-button');
  }

  /**
   * Task
   * Fix below method `performLogin` by adding:
   * 1. add code that fills user password text field with `password`
   * 2. add code that clicks login button
   */
  async performLogin (userName, password)  {
    await this.usernameElement.fill(userName);
    await this.passwordElement.fill(password);
    await this.loginButtonElement.click();
  };
}
