/*
====================================================
PROMISE CHAIN - REJECTION SCENARIO
====================================================

Scenario:

Step 1 -> Open Browser
Step 2 -> Go To Login Page
Step 3 -> Enter Credentials (FAILS)
Step 4 -> Click Login (SKIPPED)

When a Promise is rejected:

1. Remaining .then() blocks are skipped.
2. Control moves directly to .catch().
3. .finally() executes always.

====================================================
*/


/*
====================================================
STEP 1 - OPEN BROWSER
====================================================
*/

function openBrowser() {

    return new Promise(function (resolve) {

        resolve("Chrome Browser Opened");

    });

}


/*
====================================================
STEP 2 - GO TO LOGIN PAGE
====================================================
*/

function goToLogin() {

    return new Promise(function (resolve) {

        resolve("Login page loaded");

    });

}


/*
====================================================
STEP 3 - ENTER CREDENTIALS
====================================================

This Promise FAILS.

====================================================
*/

function enterCredentials() {

    return new Promise(function (resolve, reject) {

        reject("Credentials entered failed");

    });

}


/*
====================================================
STEP 4 - CLICK LOGIN
====================================================
*/

function clickLogin() {

    return new Promise(function (resolve) {

        resolve("Logged in successfully");

    });

}


/*
====================================================
PROMISE CHAIN
====================================================
*/

openBrowser()

    .then(function (msg) {

        console.log("Step 1 :", msg);

        return goToLogin();

    })

    .then(function (msg) {

        console.log("Step 2 :", msg);

        return enterCredentials();

    })

    .then(function (msg) {

        console.log("Step 3 :", msg);

        return clickLogin();

    })

    .then(function (msg) {

        console.log("Step 4 :", msg);

    })

    .catch(function (error) {

        console.log("Error:", error);

    })

    .finally(function () {

        console.log("Done execution!");

    });


/*
====================================================
OUTPUT
====================================================

Step 1 : Chrome Browser Opened

Step 2 : Login page loaded

Error: Credentials entered failed

Done execution!

====================================================
WHAT HAPPENED?
====================================================

1. openBrowser() resolved successfully.

2. goToLogin() resolved successfully.

3. enterCredentials() rejected.

4. Promise chain immediately jumped
   to .catch().

5. clickLogin() never executed.

6. Final .then() never executed.

7. .finally() executed.

====================================================
FLOW DIAGRAM
====================================================

openBrowser()
      |
      v
SUCCESS
      |
      v
goToLogin()
      |
      v
SUCCESS
      |
      v
enterCredentials()
      |
      v
REJECT
      |
      v
.catch()
      |
      v
.finally()

====================================================
IMPORTANT RULE
====================================================

Once a Promise is rejected:

✓ Current chain stops
✓ Remaining .then() blocks are skipped
✓ .catch() executes
✓ .finally() executes

====================================================
PLAYWRIGHT RELATION
====================================================

try {

    await page.goto(url);

    await page.fill("#user", "admin");

    // Failure here
    await page.click("#missingElement");

}
catch(error) {

    console.log(error);

}
finally {

    console.log("Test Finished");

}

If any await fails:

✓ Execution jumps to catch
✓ Remaining statements are skipped
✓ finally always runs

====================================================
MEMORY TRICK
====================================================

SUCCESS
resolve()
    ↓
.then()
    ↓
.then()
    ↓
.then()

FAILURE
reject()
    ↓
.catch()

ALWAYS
.finally()

====================================================
*/