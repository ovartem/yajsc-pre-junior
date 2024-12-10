import { expect, test } from '@playwright/test';

test.describe('[Part2] Mastering variables and data types', () => {
  // NOTE: below block will be launched before every test in the describe (see line above) section
  test.beforeEach(async ({page}) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
  })

  test('[YAJSC-3] should verify displayed amount of items on the page', async ({ page }) => {

    /**
     * Task 3:
     * Create const variable expectedItemsQuantity
     */
    // write your code below this line

    await expect(page.locator('.inventory_item'), 'Number of items on the page is not correct')
        .toHaveCount(/* remove this comment - enter expected items quantity variable here */);
  });

  test('[YAJSC-4] should contain some items names on the page', async ({ page }) => {
    /**
     * Task 4:
     * Create const variable itemNames as array of strings:
     * array should contain at least one or all items names
     * e.g. 'Sauce Labs Backpack', 'Sauce Labs Fleece Jacket'
     * [play with different combinations and orders of item names in array]
     */
    // write your code below this line

    const displayedItemsName = await page.locator('[data-test="inventory-item-name"]').allTextContents();
    expect(displayedItemsName, 'Displayed item names does not contain expected values')
        .toEqual(expect.arrayContaining(/* remove this comment - enter expected itemNames variable here */));
  });
});
