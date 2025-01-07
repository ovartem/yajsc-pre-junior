import { expect, test } from '@playwright/test';

/**
 * Task
 * Implement function `performLogin`
 * it's arguments should be `page`, `userName` and `password`
 * and it's body should contain code that:
 * 1. fills username text field with `userName`
 * 2. fills user password text field with `password`
 * 3. clicks login button
 * hint: you can copy the code from any previous test
 */
const performLogin = async (page, username, password) => {
  // enter your code here
};

test.describe('Functions', () => {
  [
    {
      isUserValid: true,
      userName: 'standard_user',
      password: 'secret_sauce',
    },
    {
      isUserValid: false,
      userName: 'locked_out_user',
      password: 'secret_sauce',
    }
  ].forEach(userData => {
    test(`boolean ${userData.userName}`, async ({ page }) => {
      await page.goto('https://www.saucedemo.com/');

      // implemented function is invoked (called) here
      await performLogin(page, userData.userName, userData.password);

      const errorLocator = page.locator('[data-test="error"]');

      if (userData.isUserValid !== true) {
        await expect(errorLocator).toContainText('Epic sadface: Sorry, this user has been locked out.\n');
      } else {
        await expect(errorLocator).toBeVisible({ visible: false });
      }
    });
  });
});
