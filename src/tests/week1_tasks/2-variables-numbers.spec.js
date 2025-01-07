import { expect, test } from '@playwright/test';

test('[YAJSC-3] should verify displayed amount of items on the page', async ({ page }) => {
  const userName = 'standard_user';
  const password = 'secret_sauce';

  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill(userName);
  await page.locator('#password').fill(password);
  await page.locator('#login-button').click();
  /**
   * Task 3:
   * Create `const` variable `expectedItemsQuantity` and assign a number value that represents number of items displayed on the page
   */
  // write your code below this line

  await expect(page.locator('.inventory_item'), 'Number of items on the page is not correct')
      .toHaveCount(/* remove this comment - put `expectedItemsQuantity` variable here */);
});
