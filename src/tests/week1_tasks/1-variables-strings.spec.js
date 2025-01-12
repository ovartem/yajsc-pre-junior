import { expect, test } from '@playwright/test';

/**
 * The `test()` function accepts two arguments:
 * 1. Test title.
 * 2. Test function with the `page` fixture. We can use `page` fixture to interact with the browser. Doc - https://playwright.dev/docs/test-fixtures#built-in-fixtures
 * We can write tests without fixtures as well. Doc - https://playwright.dev/docs/test-fixtures#without-fixtures.
 * However, using fixtures is recommended and more efficient. Doc - https://playwright.dev/docs/test-fixtures#with-fixtures
 */
test('[YAJSC-1] should login successfully using let & const variables and primitive data types', async ({ page }) => {

  /**
   * Task 1.1:
   * Create `let` variable `userName` with value `"standard_user"`
   */
  // write your code below this line

  /**
   * Task 1.2:
   * Create `const` variable `password` with value `"secret_sauce"`
   */
  // write your code below this line

  // Next Line (NL): Opens `"https://www.saucedemo.com/"` page in browser using method `goto` and provided url
  await page.goto('https://www.saucedemo.com/');

  // Next Line (NL): On the `page` finds text field element with selector `"#user-name"` using `locator` method
  // and enters data provided to the method `fill`
  await page.locator('#user-name').fill(/* remove this comment - put `username` variable here */);

  // (NL): On the `page` finds text field element with selector `"#password"` using `locator` method
  // and enters data provided to the method `fill`
  await page.locator('#password').fill(/* remove this comment - put `password` variable here */);

  // (NL): On the `page` finds button element with selector `"#login-button"` using `locator` method
  // and performs a click using `click` method
  await page.locator('#login-button').click();

  // (NL): Verify using `expect` method that:
  // title element (on the `page` finds element with selector `".title"`) should be visible (using `toBeVisible` method)
  // expect(actualResult, errorMessage).[method to perform verification - could contain expected result]
  await expect(page.locator('.title'), 'Inventory Page Title is not visible').toBeVisible();

  // (NL): Verify (`expect` method) that:
  // number of items on the page (on the `page` finds elementS with selector `".inventory_item"` and get their quantity using `count` method)
  // should be greater than or equal to `1` (actual result)
  expect(await page.locator('.inventory_item').count(), 'Number of items on the page is not correct')
      .toBeGreaterThanOrEqual(1);
});
