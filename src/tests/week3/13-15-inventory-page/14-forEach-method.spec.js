const { test, expect } = require('@playwright/test');
const { LoginPage } = require("./Login.page");
const { InventoryPage } = require("./Inventory.page");

test('[YAJSC-14] should display all products', async ({ page }) => {
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

  const actualProductsNames = await inventoryPage.getProductsNames();

  /**
   * Task :
   * Fix below code by implementing proper usage of `forEach` method
   * Inside `forEach` method use `expectedProduct` as a name of `expectedItemsNames` array element
   */
  expectedItemsNames.forEach((expectedProduct) => {
    expect(actualProductsNames, 'Item info is not correct').toContain(expectedProduct);
  })
});
