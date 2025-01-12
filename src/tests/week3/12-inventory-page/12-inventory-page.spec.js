import { expect, test } from '@playwright/test';
import { LoginPage } from './Login.page';
import { InventoryPage } from './Inventory.page';

test('[YAJSC-12] inventory page test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  /**
   * Task :
   * Create a `const` variable `inventoryPage` and assign a `new` instance of `InventoryPage` class with provided `page` argument
   */
  const inventoryPage = new InventoryPage(page);

  const userCredentials = {
    userName: 'standard_user',
    password: 'secret_sauce',
  };
  const expectedItemsQuantity = 6;

  await page.goto('https://www.saucedemo.com/');

  await loginPage.performLogin(userCredentials.userName, userCredentials.password);

  await expect(inventoryPage.titleElement, 'Inventory Page Title is not visible')
      .toBeVisible();

  /**
   * Task :
   * Part 1:
   * Open Inventory.page.js file and fix code there
   *
   * Part 2:
   * Fix below code by
   * calling `inventoryPage` and it's method `getNumberOfItemsOnPage` with `await` keyword
   */
  expect(await inventoryPage.getNumberOfItemsOnPage()/* remove this comment - put `inventoryPage.getNumberOfItemsOnPage()` with `await` here */, 'Number of items on the page is not correct')
      .toBeGreaterThanOrEqual(1);

  /**
   * Part 3:
   * Fix below code by
   * using `inventoryPage` and it's property `itemsElements`
   */
  await expect(inventoryPage.itemsElements/* remove this comment - put `inventoryPage.itemsElements` here */, 'Number of items on the page is not correct')
      .toHaveCount(expectedItemsQuantity);
});
