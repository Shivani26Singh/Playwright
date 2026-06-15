// // Basic Async and Await
// async in function is used to return promise and await is used to get the resolved value of promise

async function getTestResult() {
    return "Pass";
}

getTestResult.then(function (res) {  // getTestResult() is a promise and we can use .then() to get the resolved value of promise
    console.log(res);
});


import { test, expect } from '@playwright/test';


test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);  // await is used here because toHaveTitle() is a promise and we need to wait for it to resolve before moving to the next line of code

    let r = page.locator();  // no await is used here because locator() is not a promise and it will return the locator object immediately

});