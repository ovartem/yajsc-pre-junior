import { expect, test } from '@playwright/test';

test.describe('Mastering variables and data types', () => {
  test('should login successfully using let & const variables and primitive data types', async ({ page }) => {

    /**
     * Task 1:
     * Create let variable userName with value 'standard_user'
     */
    // write your code below this line

    /**
     * Task 2:
     * Create const variable password with value 'secret_sauce'
     */
    // write your code below this line
    
    await page.goto('https://www.saucedemo.com/');
    
    await page.locator('#user-name').fill(/* remove this comment - enter username here */);
    await page.locator('#password').fill(/* remove this comment - enter password here */);
    await page.locator('#login-button').click();

    await expect(page.locator('.title')).toBeVisible();

    expect(await page.locator('.inventory_item').count()).toBeGreaterThanOrEqual(1);
  });

  test('should login successfully using let & const variables and complex data type (object)', async ({ page }) => {

    /**
     * Task 3:
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

    await expect(page.locator('.title')).toBeVisible();

    expect(await page.locator('.inventory_item').count()).toBeGreaterThanOrEqual(1);
  });
});
