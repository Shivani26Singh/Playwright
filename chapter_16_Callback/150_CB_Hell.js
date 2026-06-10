// ====================================================
// CALLBACK HELL EXAMPLE
// ====================================================

// Real QA Scenario:
//
// Open Browser
// ↓
// Navigate to Login Page
// ↓
// Enter Username/Password
// ↓
// Click Login
// ↓
// Verify Dashboard
//
// Each step depends on the previous step completing.


// ====================================================
// STEP 1 - OPEN BROWSER
// ====================================================

function openBrowser(callback) {

    console.log("Opening Chrome Browser");

    // Simulating browser startup time

    setTimeout(function () {

        callback();

    }, 1000);
}


// ====================================================
// STEP 2 - GO TO LOGIN PAGE
// ====================================================

function goToLoginPage(callback) {

    setTimeout(function () {

        console.log("Login Page Loaded");

        callback();

    }, 2000);
}


// ====================================================
// STEP 3 - ENTER CREDENTIALS
// ====================================================

function enterCredentials(callback) {

    setTimeout(function () {

        console.log("Credentials Entered");

        callback();

    }, 1000);
}


// ====================================================
// STEP 4 - CLICK LOGIN
// ====================================================

function clickLogin(callback) {

    setTimeout(function () {

        console.log("Login Button Clicked");

        callback();

    }, 1000);
}


// ====================================================
// CALLBACK HELL
// ====================================================

openBrowser(function () {

    goToLoginPage(function () {

        enterCredentials(function () {

            clickLogin(function () {

                console.log("Test Complete!");

            });

        });

    });

});


/*

Execution Flow:

openBrowser()

↓

callback()

↓

goToLoginPage()

↓

callback()

↓

enterCredentials()

↓

callback()

↓

clickLogin()

↓

callback()

↓

Test Complete!


Output:

Opening Chrome Browser

(wait 1 sec)

Login Page Loaded

(wait 2 sec)

Credentials Entered

(wait 1 sec)

Login Button Clicked

(wait 1 sec)

Test Complete!

*/


// ====================================================
// WHY IS THIS CALLBACK HELL?
// ====================================================

/*

Each step requires a callback.

Each callback contains another callback.

Example:

callback
 └── callback
      └── callback
           └── callback

This deep nesting makes code:

1. Difficult to read
2. Difficult to maintain
3. Difficult to debug
4. Difficult to handle errors

This pattern is called:

CALLBACK HELL

or

PYRAMID OF DOOM

*/


// ====================================================
// PLAYWRIGHT CONNECTION
// ====================================================

/*

Old JavaScript:

openBrowser(function () {

    goToLoginPage(function () {

        enterCredentials(function () {

            clickLogin(function () {

            });

        });

    });

});


Modern Playwright:

test('Login Test', async ({ page }) => {

    await page.goto('https://app.vwo.com');

    await page.fill('#username', 'admin');

    await page.fill('#password', 'password');

    await page.click('#js-login-btn');

});


Why cleaner?

Because async/await removes callback hell.

Evolution:

Callbacks
↓
Promises
↓
async/await

Playwright heavily uses async/await.

*/


// ====================================================
// INTERVIEW NOTE
// ====================================================

/*

Callback Hell:

A situation where multiple asynchronous
operations are nested inside callbacks,
creating deeply indented code that is
hard to read and maintain.

Solution:

Promises

and

async/await

*/