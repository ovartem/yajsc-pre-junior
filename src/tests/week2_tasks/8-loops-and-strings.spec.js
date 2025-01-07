const { test, expect } = require('@playwright/test');

const performLogin = async (page, userName, password) => {
    const usernameElement = page.locator('#user-name');
    const passwordElement = page.locator('#password');
    const loginButtonElement = page.locator('#login-button');

    await usernameElement.fill(userName);
    await passwordElement.fill(password);
    await loginButtonElement.click();
};

test('should contain all items names on the page', async ({ page }) => {
    const userCredentials = {
        userName: 'standard_user',
        password: 'secret_sauce',
    };

    /**
     * Task 5:
     * Create `const` variable `expectedItemsNames` with value as array of strings.
     * This array should contain all items names displayed on the page
     * e.g. `"Sauce Labs Backpack"`, `"Sauce Labs Fleece Jacket"`, and all others
     */
    // write your code below this line

    await page.goto('https://www.saucedemo.com/');
    await performLogin(page, userCredentials.userName, userCredentials.password)

    // get all item names elements (note: below line gets only elements containing items names, not the actual names/text itself)
    const productNameElements = page.locator('[data-test="inventory-item-name"]');
    const numberOfProductElements = await productNameElements.count();

    /**
     * Task
     * Fix below `for` loop
     * it should iterate over array of `productElements` using `i` variable starting from 0 to the `numberOfProductElements`
     */
    for (let i/* enter necessary code here */; i/* enter necessary code here */; i/* enter necessary code here */) {
        // (NL): Gets text for i-th element with selector `'[data-test="inventory-item-name"]'`
        const actualProduct = await productNameElements.nth(i).textContent();
        expect(actualProduct, `Displayed item [${i}] name is not correct`).toEqual(expectedItemsNames[i])
    }
});
