// ====================================================
// CALLBACK + ASYNC CONCEPT
// ====================================================

console.log("Test 1: started");

// Register callback
setTimeout(function () {

    console.log("Test 2: API response received");

}, 2000);

console.log("Test 3: moving to next test");

/*

Output:

Test 1: started
Test 3: moving to next test
(wait 2 seconds)
Test 2: API response received

Reason:

1. setTimeout does NOT pause JavaScript.
2. It stores the callback function.
3. JavaScript continues executing the next line.
4. After 2 seconds, the callback is executed.

Callback:

function () {
    console.log("Test 2: API response received");
}

Playwright Connection:

Without await:

page.waitForResponse(...)

JS continues immediately.

With await:

await page.waitForResponse(...)

Execution pauses until response arrives.

This is why Playwright heavily uses async/await.

*/