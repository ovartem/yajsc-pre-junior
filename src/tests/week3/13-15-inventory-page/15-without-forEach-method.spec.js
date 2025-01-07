const { test, expect } = require('@playwright/test');
const {LoginPage} = require("./Login.page");
const {InventoryPage} = require("./Inventory.page");

test('44Перевірка відображення товарів', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    const userCredentials = {
        userName: 'standard_user',
        password: 'secret_sauce',
    };

    await page.goto('https://www.saucedemo.com/');

    await loginPage.performLogin(userCredentials.userName, userCredentials.password);

    const expectedItemsNames = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt',
        'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)'];

    const actualProductsNames = await inventoryPage.getProductsNames();

    /**
     * Task :
     * Fix below code by using `toEqual` method to compare 2 arrays: `actualProductsNames` and `expectedItemsNames`
     * https://playwright.dev/docs/api/class-genericassertions#generic-assertions-to-equal
     */
    expect(actualProductsNames, 'Items names are not correct').toEqual(expectedItemsNames);
});
