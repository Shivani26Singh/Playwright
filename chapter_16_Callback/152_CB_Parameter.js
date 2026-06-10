// ============================================================================
// CALLBACK BASICS
// ============================================================================

/*

Callback Definition:

A callback is a function passed as an argument
to another function and executed by that function.

General Syntax:

someFunction(callback);

The callback can be:

1. Normal Function
2. Anonymous Function
3. Arrow Function

*/


// ============================================================================
// EXAMPLE 1 - SIMPLE CALLBACK
// ============================================================================

function greetTester(name, callback) {

    console.log("Welcome, " + name);

    // Execute callback
    callback();
}


// Passing Anonymous Function

greetTester("Shivani", function () {

    console.log("Let's start testing!");

});


/*

Execution:

name = "Shivani"

callback = function () {

    console.log("Let's start testing!");

}

Output:

Welcome, Shivani
Let's start testing!

*/


// Passing Arrow Function

greetTester("Shivani", () => {

    console.log("Let's start testing!");

});


/*

Execution:

name = "Shivani"

callback = () => {

    console.log("Let's start testing!");

}

Output:

Welcome, Shivani
Let's start testing!

*/


// ============================================================================
// WHY IS IT A CALLBACK?
// ============================================================================

/*

This function:

function () {

    console.log("Let's start testing!");

}

is passed into greetTester().

greetTester() decides when to execute it.

Inside greetTester():

callback();

Therefore it is called a CALLBACK.

*/


// ============================================================================
// CALLBACK WITH PARAMETERS
// ============================================================================

function runTest(testName, callback) {

    let status = "PASS";

    callback(testName, status);

}


runTest("Login Test", function (name, result) {

    console.log(name + " → " + result);

});


/*

Execution:

testName = "Login Test"

status = "PASS"

callback("Login Test", "PASS");



Inside callback:

name = "Login Test"

result = "PASS"


Output:

Login Test → PASS

*/


// ============================================================================
// CALLBACK WITH PARAMETERS - INTERNAL VIEW
// ============================================================================

/*

JavaScript roughly behaves like:

function callback(name, result) {

    console.log(name + " → " + result);

}

callback("Login Test", "PASS");

*/


// ============================================================================
// PLAYWRIGHT CONNECTION
// ============================================================================

/*

Similar concept:

test('Login Test', async ({ page }) => {

});

Playwright passes page object
into your callback.

Your callback receives:

{ page }

just like:

callback(testName, status);

receives:

name, result

*/


// ============================================================================
// SYNCHRONOUS CALLBACK - forEach()
// ============================================================================

let bugs = [

    "UI glitch",
    "API timeout",
    "Wrong redirect"

];


// forEach() loops through every item.
//
// It executes the callback once for each item.

bugs.forEach(function (bug, i) {

    console.log("Bug #" + (i + 1) + ": " + bug);

});


console.log("Total bugs: " + bugs.length);


/*

Output:

Bug #1: UI glitch
Bug #2: API timeout
Bug #3: Wrong redirect
Total bugs: 3

*/


// ============================================================================
// HOW forEach() WORKS
// ============================================================================

/*

Iteration 1

bug = "UI glitch"
i = 0

Output:

Bug #1: UI glitch


Iteration 2

bug = "API timeout"
i = 1

Output:

Bug #2: API timeout


Iteration 3

bug = "Wrong redirect"
i = 2

Output:

Bug #3: Wrong redirect

*/


// ============================================================================
// WHY IS forEach() CALLBACK SYNCHRONOUS?
// ============================================================================

/*

forEach() executes immediately.

No waiting.

No API calls.

No timers.

Execution order:

Bug #1
↓
Bug #2
↓
Bug #3
↓
Total bugs

Everything happens in sequence.

*/


// ============================================================================
// PLAYWRIGHT CONNECTION
// ============================================================================

/*

Data Driven Testing Example:

const users = [

    "Admin",
    "Manager",
    "Guest"

];

users.forEach(user => {

    test(`Login as ${user}`, async ({ page }) => {

        // Test Steps

    });

});


Execution:

user = "Admin"
↓
Create Test

user = "Manager"
↓
Create Test

user = "Guest"
↓
Create Test


Result:

3 Playwright Tests Created

*/


// ============================================================================
// INTERVIEW NOTES
// ============================================================================

/*

Callback:

A function passed as an argument
to another function and executed
by that function.

Examples:

greetTester(callback)

runTest(callback)

forEach(callback)

setTimeout(callback)


Types:

1. Synchronous Callback

forEach()


2. Asynchronous Callback

setTimeout()


3. Playwright Callback

test('Login Test', async ({ page }) => {

});

*/