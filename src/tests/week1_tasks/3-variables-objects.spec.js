import { expect, test } from '@playwright/test';

test('[YAJSC-3] should login successfully using let & const variables and complex data type (object)', async ({ page }) => {

  /**
   * Task 2:
   * Create `const` variable `userCredentials` object with:
   * property `userName` with value `"standard_user"`
   * and
   * property `password` with value `"secret_sauce"`
   */
  // write your code below this line

  const expectedItemsQuantity = 6;

  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill(/* remove this comment - put `userName` here (get it from `userCredentials` object) */);
  await page.locator('#password').fill(/* remove this comment - put `password` here (get it from `userCredentials` object) */);
  await page.locator('#login-button').click();

  await expect(page.locator('.title'), 'Inventory Page Title is not visible')
      .toBeVisible();

  expect(await page.locator('.inventory_item').count(), 'Number of items on the page is not correct')
      .toBeGreaterThanOrEqual(1);
  await expect(page.locator('.inventory_item'), 'Number of items on the page is not correct')
      .toHaveCount(expectedItemsQuantity);
});
