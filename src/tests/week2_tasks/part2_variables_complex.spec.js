import { expect, test } from '@playwright/test';

test.describe('[Part2] Complex - Mastering variables and data types', () => {
  // NOTE: below block will be launched before every test in the describe (see line above) section
  test.beforeEach(async ({page}) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
  })

  test('[YAJSC-5] should contain item [1] info (name and description)', async ({ page }) => {
    /**
     * Task 5.1:
     * Create const variable itemIndex with number that represents item index
     * e.g. 0 / 1 / 2 / ...
     */
    // write your code below this line

    /**
     * Task 5.2:
     * Create 2 variables: itemName and itemDescription with correspondent values
     * taken from the page https://www.saucedemo.com/inventory.html
     * note: itemName and itemDescription values should be set based on the itemIndex
     */
    // write your code below this line

    const itemInfo = await page
            .locator('.inventory_item_label')
            .nth(/* remove this comment - enter item index variable here */)
            .textContent();
    expect(itemInfo, 'Item info is not correct').toEqual(/* remove this comment - enter code that concatenates variables (itemName and itemDescription) containing strings */);
  });

});
