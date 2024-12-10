import { expect, test } from '@playwright/test';

test.describe('[Part1] Mastering variables and data types', () => {
  test('[YAJSC-1] should login successfully using let & const variables and primitive data types', async ({ page }) => {

    /**
     * Task 1.1:
     * Create let variable userName with value 'standard_user'
     */
    // write your code below this line

    /**
     * Task 1.2:
     * Create const variable password with value 'secret_sauce'
     */
    // write your code below this line

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill(/* remove this comment - enter username here */);
    await page.locator('#password').fill(/* remove this comment - enter password here */);
    await page.locator('#login-button').click();

    await expect(page.locator('.title'), 'Inventory Page Title is not visible')
        .toBeVisible();

    expect(await page.locator('.inventory_item').count(), 'Number of items on the page is not correct')
        .toBeGreaterThanOrEqual(1);  });

  test('[YAJSC-2] should login successfully using let & const variables and complex data type (object)', async ({ page }) => {

    /**
     * Task 2:
     * Create const variable userCredentials object with:
     * property userName with value 'standard_user'
     * and
     * property password with value 'secret_sauce'
     */
    // write your code below this line

    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(/* remove this comment - enter userName here (use userCredentials object) */);
    await page.locator('#password').fill(/* remove this comment - enter password here (use userCredentials object) */);
    await page.locator('#login-button').click();

    await expect(page.locator('.title'), 'Inventory Page Title is not visible')
        .toBeVisible();

    expect(await page.locator('.inventory_item').count(), 'Number of items on the page is not correct')
        .toBeGreaterThanOrEqual(1);
  });
});
