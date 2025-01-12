const { test, expect } = require('@playwright/test');

const performLogin = async (page, username, password) => {
  const userNameFieldLocator = page.locator('#user-name');
  const passwordFieldLocator = page.locator('#password');
  const loginButtonLocator = page.locator('#login-button');

  await userNameFieldLocator.fill(username);
  await passwordFieldLocator.fill(password);
  await loginButtonLocator.click();
};

test('Перевірка відображення товарів', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await performLogin(page, 'standard_user', 'secret_sauce');

  // 3. Створіть масив очікуваних товарів
  const expectedProducts = [ /* Вкажіть очікувані назви товарів */ ];

  // get all item names elements (note: below line gets only elements containing items names, not the names itself)
  const productElements = await page.locator('[data-test="inventory-item-name"]');
  const numberOfProductElements = await productElements.count();

  /**
   * Task
   * Fix below `for` loop
   * it should iterate over array of productElements using `i` variable starting from 0 to the numberOfProductElements
   */
  for (let i; i;i) {
    actualProducts.push(await productElements.nth(i).textContent());
  }
});
