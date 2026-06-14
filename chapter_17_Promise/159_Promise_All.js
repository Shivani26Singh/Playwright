/*
====================================================
Promise_All.js
====================================================

Definition:

Promise.all() executes multiple Promises
in parallel and waits for ALL of them
to complete successfully.

If any one Promise fails (rejects),
Promise.all() immediately fails and
moves to .catch().

Syntax:

Promise.all([promise1, promise2, promise3])
    .then()
    .catch()

====================================================
EXAMPLE 1 - ALL PROMISES SUCCESS
====================================================
*/

let checkAuth = Promise.resolve("Auth OK");

let checkDB = Promise.resolve("DB OK");

let checkCache = Promise.resolve("Cache OK");

Promise.all([checkAuth, checkDB, checkCache])

    .then(function (results) {

        console.log("All the checks are fine!");

        console.log(results);

    })

    .catch(function (error) {

        console.log(error);

    });

/*

OUTPUT:

All the checks are fine!

[
  'Auth OK',
  'DB OK',
  'Cache OK'
]

====================================================
EXPLANATION
====================================================

checkAuth  ---> SUCCESS
checkDB    ---> SUCCESS
checkCache ---> SUCCESS

Since ALL Promises succeeded,
.then() executes.

results is returned as an array.

results[0] -> Auth OK
results[1] -> DB OK
results[2] -> Cache OK

====================================================
EXAMPLE 2 - ONE PROMISE FAILS
====================================================
*/

Promise.all([

    Promise.resolve("OK"),

    Promise.reject("DB DOWN"),

    Promise.resolve("OK")

])

    .then(function (result) {

        console.log(result);

    })

    .catch(function (error) {

        console.log("Failed:", error);

    });

/*

OUTPUT:

Failed: DB DOWN

====================================================
EXPLANATION
====================================================

Promise 1 ---> SUCCESS

Promise 2 ---> FAILED

Promise 3 ---> SUCCESS

Since one Promise failed,

Promise.all() rejects immediately.

.then() is skipped.

.catch() executes.

====================================================
FLOW DIAGRAM
====================================================

SUCCESS CASE

Auth -----> OK
DB -------> OK
Cache ----> OK
                |
                v
        Promise.all()
                |
                v
             .then()


FAILURE CASE

Auth -----> OK
DB -------> FAIL
Cache ----> OK
                |
                v
        Promise.all()
                |
                v
            .catch()

====================================================
ACCESS INDIVIDUAL RESULTS
====================================================
*/

Promise.all([

    Promise.resolve("Auth OK"),

    Promise.resolve("DB OK"),

    Promise.resolve("Cache OK")

])

.then(function (results) {

    console.log(results[0]);

    console.log(results[1]);

    console.log(results[2]);

});

/*

OUTPUT:

Auth OK

DB OK

Cache OK

====================================================
PLAYWRIGHT EXAMPLE
====================================================

Run multiple requests in parallel.

*/

async function playwrightExample() {

    const [userResponse, productResponse] =
        await Promise.all([

            page.request.get("/users"),

            page.request.get("/products")

        ]);

    console.log(userResponse.status());

    console.log(productResponse.status());

}

/*

WITHOUT Promise.all()

await page.request.get("/users");

await page.request.get("/products");

Runs one after another.


WITH Promise.all()

await Promise.all([
    page.request.get("/users"),
    page.request.get("/products")
]);

Runs both at the same time.

====================================================
COMMON PLAYWRIGHT USAGE
====================================================

await Promise.all([
    page.waitForNavigation(),
    page.click("#login")
]);

Explanation:

1. Click Login button.
2. Navigation starts.
3. Wait for navigation.
4. Continue only when both are completed.

====================================================
INTERVIEW NOTES
====================================================

Promise.all()

✓ Runs multiple Promises in parallel

✓ Waits for ALL Promises to finish

✓ Returns results as an array

✓ If one Promise fails,
  Promise.all() fails

✓ Faster than running tasks one by one

✓ Frequently used in API Testing
  and Playwright Automation

====================================================
MEMORY TRICK
====================================================

Promise.all()

ALL PASS
    ↓
  .then()

ONE FAIL
    ↓
  .catch()

Result
    ↓
Array of Values

====================================================
COMPARISON
====================================================

Promise
    → One async task

Promise Chaining
    → Multiple tasks in sequence

Promise.all()
    → Multiple tasks in parallel

====================================================
END OF FILE
====================================================
*/