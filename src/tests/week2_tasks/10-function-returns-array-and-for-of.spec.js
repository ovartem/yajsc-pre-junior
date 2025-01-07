const { test, expect } = require('@playwright/test');

const performLogin = async (page, userName, password) => {
    const usernameElement = page.locator('#user-name');
    const passwordElement = page.locator('#password');
    const loginButtonElement = page.locator('#login-button');

    await usernameElement.fill(userName);
    await passwordElement.fill(password);
    await loginButtonElement.click();
};

const getNumberOfProductNameElements = async (page) => {
    const productNameElements = page.locator('[data-test="inventory-item-name"]');

    const numberOfProductElements = await productNameElements.count();
    return numberOfProductElements;
}

/**
 * Task
 * Implement function `getProductsNames`
 * it should have one argument - `page`
 * and it's body should contain code that:
 * 1. const variable `productNameElements` and it's value should be result of `page.locator` method with a proper string as in the previous task
 * 2. const variable `numberOfProductElements` and it's value should be result of the `getNumberOfProductNameElements` function with `await` keyword
 * 3. const variable `actualProductsNames` and it's value should be an empty array
 * 4. `for` loop that iterates over indexes starting from 0 till `numberOfProductElements`
 *  4.1. add elements to `actualProductsNames` by using `push` method (NOTE: already implemented)
 * 5. return `actualProductsNames`
 * hint: you can copy the code from any previous test
 */
const getProductsNames = async (page) => {
    // enter you code here

    for (let i/* enter necessary code here */; i/* enter necessary code here */; i/* enter necessary code here */) {
        actualProductsNames.push(await productNameElements.nth(i).textContent());
    }

    // enter you code here
}

test('Перевірка відображення товарів', async ({ page }) => {
    const userCredentials = {
        userName: 'standard_user',
        password: 'secret_sauce',
    };

    await page.goto('https://www.saucedemo.com/');

    await performLogin(page, userCredentials.userName, userCredentials.password);

    const expectedItemsNames = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt',
        'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)'];

    // implemented function is invoked (called) here
    const actualProductsNames = await getProductsNames(page);

    /**
     * Task
     * Fix below `for-of` loop
     * it should iterate over array of `expectedItemsNames` getting `expectedProduct` element
     */
    for (let expectedProduct /* enter necessary code here */) {
        expect(actualProductsNames, 'Item info is not correct').toContain(/* remove this comment - put variable `expectedProduct` here */);
    }
});
