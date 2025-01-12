import { expect, test } from '@playwright/test';

test.describe('Logical Operators', () => {
  // NOTE: below block will be launched before every test in the describe (see line above) section
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  /**
   * Task 6.1:
   * Update below 2 objects in array so that
   * every object contains property `isUserValid`.
   * For case with `"standard_user"`   - `isUserValid` should be `true`
   * For case with `"locked_out_user"` - `isUserValid` should be `false`
   */
  [
    {
      // write your code here
      userName: 'standard_user',
      password: 'secret_sauce',
    },
    {
      // write your code here
      userName: 'locked_out_user',
      password: 'secret_sauce',
    }
  ].forEach(userData => {
    test(`[YAJSC-6] boolean ${userData.userName}`, async ({ page }) => {
      await page.locator('#user-name').fill(userData.userName);
      await page.locator('#password').fill(userData.password);
      await page.locator('#login-button').click();

      const errorLocator = page.locator('[data-test="error"]');

      /**
       * Task 6.2:
       * Update below `if-else` statement so that it performs verification whether `isUserValid` equals `false`
       * in case user is not valid - test will verify error message text (line 41)
       * in case of valid user     - test will verify error message text is not visible (line 43)
       */
      if (/* remove this comment - add check whether isUserValid equals false */) {
        await expect(errorLocator).toContainText('Epic sadface: Sorry, this user has been locked out.\n');
      } else {
        await expect(errorLocator).toBeVisible({ visible: false });
      }
    });
  });
});
