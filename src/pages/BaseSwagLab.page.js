export class BaseSwagLabPage {
  constructor(page) {
    this.page = page;
  }

  // header
  mainMenuBtn = this.page.locator('TBD');

  shoppingCart = this.page.locator('.shopping_cart_link');

  shoppingCartBadge = this.page.locator('.shopping_cart_badge');

  async getNumberOfItemsInCart() {
    return this.shoppingCartBadge.textContent();
  }
}
