/*

# 12_Async_Await_Examples.js

TOPIC:
Understanding async and await

In Playwright, almost every action uses:

async
await

Examples:

await page.goto()
await page.click()
await page.fill()
await page.textContent()

So understanding async/await is critical.

====================================================
EXAMPLE 1
ASYNC FUNCTION RETURNS A PROMISE
================================

*/

async function sayHello() {

```
return "Hello, QA!";
```

}

/*
Explanation:

Even though we return a string,

async automatically wraps it inside
a Promise.

JavaScript treats it as:

return Promise.resolve("Hello, QA!");

Equivalent:

function sayHello() {
return Promise.resolve("Hello, QA!");
}

====================================================
*/

sayHello().then(function (msg) {

```
console.log(msg);
```

});

/*

OUTPUT

Hello, QA!

====================================================
STEP-BY-STEP
============

1. sayHello() is called

2. async function returns:

   Promise {
   "Hello, QA!"
   }

3. .then() waits for resolution

4. msg receives:

   "Hello, QA!"

5. console.log(msg)

====================================================
*/

/*

EXAMPLE 2
AWAITING A PROMISE
==================

*/

async function getStatus() {

```
let status = await Promise.resolve(200);

console.log("Status code:", status);
```

}

getStatus();

/*

OUTPUT

Status code: 200

====================================================
EXPLANATION
===========

Promise.resolve(200)

returns:

Promise {
200
}

await waits for Promise completion.

Resolved value:

200

is assigned to:

status

====================================================
FLOW
====

Promise.resolve(200)
|
v
Promise Fulfilled
|
v
await
|
v
200
|
v
status variable
|
v
console.log()

====================================================
*/

/*

EXAMPLE 3
MULTIPLE AWAIT STATEMENTS
=========================

*/

async function testFlow() {

```
let step1 = await Promise.resolve("Opened browser");

console.log(step1);

let step2 = await Promise.resolve("Clicked login");

console.log(step2);

let step3 = await Promise.resolve("Verified dashboard");

console.log(step3);
```

}

testFlow();

/*

OUTPUT

Opened browser

Clicked login

Verified dashboard

====================================================
EXPLANATION
===========

Each await waits for completion before
moving to the next line.

Execution order:

Step 1
↓
Step 2
↓
Step 3

This makes asynchronous code look
like synchronous code.

====================================================
FLOW DIAGRAM
============

await Step 1
|
v
Opened browser
|
v
await Step 2
|
v
Clicked login
|
v
await Step 3
|
v
Verified dashboard

====================================================
PLAYWRIGHT RELATION
===================

The above example is very similar to:

async function login(page) {

```
await page.goto("https://example.com");

await page.fill("#username", "admin");

await page.fill("#password", "admin123");

await page.click("#login");
```

}

Execution:

Open Page
↓
Enter Username
↓
Enter Password
↓
Click Login

Each step waits for the previous one.

====================================================
WHY USE AWAIT?
==============

Without await:

let status = Promise.resolve(200);

console.log(status);

OUTPUT

Promise { 200 }

You get the Promise object.

With await:

let status = await Promise.resolve(200);

console.log(status);

OUTPUT

200

You get the actual value.

====================================================
INTERVIEW NOTES
===============

async

✓ Makes function asynchronous

✓ Automatically returns a Promise

✓ Allows use of await

await

✓ Waits for Promise completion

✓ Extracts resolved value

✓ Makes async code easier to read

Promise.resolve(value)

✓ Creates a resolved Promise

✓ Often used for learning/testing

====================================================
MEMORY TRICK
============

async
↓
Returns Promise

await
↓
Wait for Promise

Promise
↓
Resolved Value

Example:

Promise { 200 }
↓
await
↓
200

====================================================
KEY TAKEAWAY
============

async = Promise creator

await = Promise resolver

Playwright uses async/await extensively.

Almost every Playwright test follows:

async function test() {

```
await action1();

await action2();

await action3();
```

}

====================================================
END OF FILE
===========

*/
