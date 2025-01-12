import { expect, test } from '@playwright/test';
import { LoginPage } from './Login.page';

test('[YAJSC-11] login page test', async ({ page }) => {
  /**
   * Task
   * Fix below code by adding `page` as an argument of LoginPage constructor
   */
  const loginPage = new LoginPage(page/* remove this comment - put `page` here */);

  const userCredentials = {
    userName: 'standard_user',
    password: 'secret_sauce',
  };
  const expectedItemsQuantity = 6;

  await page.goto('https://www.saucedemo.com/');

  /**
   * Task :
   * Part 1:
   * Open Login.page.js file and fix code there
   *
   * Part 2:
   * Fix below code by providing userName and password as an arguments of `loginPage.performLogin` method
   * Use `userCredentials` object to get `userName` and `password` properties
   */
  await loginPage.performLogin(userCredentials.userName, userCredentials.password/* remove this comment - and provide userName and password */);

  await expect(page.locator('.title'), 'Inventory Page Title is not visible')
      .toBeVisible();

  expect(await page.locator('.inventory_item').count(), 'Number of items on the page is not correct')
      .toBeGreaterThanOrEqual(1);
  await expect(page.locator('.inventory_item'), 'Number of items on the page is not correct')
      .toHaveCount(expectedItemsQuantity);
});
