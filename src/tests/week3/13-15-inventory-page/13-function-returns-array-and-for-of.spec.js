const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./Login.page');
const { InventoryPage } = require('./Inventory.page');

test('[YAJSC-13] should display all products', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  const userCredentials = {
    userName: 'standard_user',
    password: 'secret_sauce',
  };

  await page.goto('https://www.saucedemo.com/');

  await loginPage.performLogin(userCredentials.userName, userCredentials.password);

  const expectedItemsNames = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt',
      'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)'];

  /**
   * Task :
   * Open Inventory.page.js file and fix code there so that below code works
   */
  const actualProductsNames = await inventoryPage.getProductsNames();

  for (let expectedProduct of expectedItemsNames) {
    expect(actualProductsNames, 'Item info is not correct').toContain(expectedProduct);
  }
});
