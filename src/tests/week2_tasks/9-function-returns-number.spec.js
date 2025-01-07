const { test, expect } = require('@playwright/test');

const performLogin = async (page, userName, password) => {
    const usernameElement = page.locator('#user-name');
    const passwordElement = page.locator('#password');
    const loginButtonElement = page.locator('#login-button');

    await usernameElement.fill(userName);
    await passwordElement.fill(password);
    await loginButtonElement.click();
};

/**
 * Task
 * Implement function `getNumberOfProductNameElements`
 * it should have one argument - `page`
 * and it's body should contain code that:
 * 1. const variable `productNameElements` and it's value should be result of `page.locator` method with a proper string as in the previous task
 * 2. const variable `numberOfProductElements` and it's value should be result of the `count` method called at `productNameElements` with `await` keyword
 * 3. return `numberOfProductElements`
 * hint: you can copy the code from any previous test
 */
const getNumberOfProductNameElements = async (page) => {
    // enter your code here
}

test('[functions] should contain all items names on the page', async ({ page }) => {
    const userCredentials = {
        userName: 'standard_user',
        password: 'secret_sauce',
    };

    const expectedItemsNames = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt',
            'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)'];

    await page.goto('https://www.saucedemo.com/');
    await performLogin(page, userCredentials.userName, userCredentials.password)

    // implemented function is invoked (called) here
    const numberOfProductElements = await getNumberOfProductNameElements(page);

    const productNameElements = page.locator('[data-test="inventory-item-name"]');
    for (let i = 0; i < numberOfProductElements; i++) {
        // (NL): Gets text for i-th element with selector `'[data-test="inventory-item-name"]'`
        const actualProduct = await productNameElements.nth(i).textContent();
        expect(actualProduct, `Displayed item [${i}] name is not correct`).toEqual(expectedItemsNames[i])
    }
});
