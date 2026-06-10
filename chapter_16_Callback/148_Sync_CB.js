// ====================================================
// CALLBACK EXAMPLE - forEach()
// ====================================================

let testResults = ["Pass", "Fail", "Pass", "Skip"];


// forEach() is an Array method.
//
// It loops through each item in the array.
//
// forEach() expects a callback function.
//
// Syntax:
//
// array.forEach(callback);
//
// Here, we are passing an anonymous function as the callback.

testResults.forEach(function (result, index) {

    // result = current item
    // index  = current position

    console.log("Test " + index + " => " + result);

});


/*

Execution Flow:

Iteration 1

result = "Pass"
index = 0

Output:
Test 0 => Pass


Iteration 2

result = "Fail"
index = 1

Output:
Test 1 => Fail


Iteration 3

result = "Pass"
index = 2

Output:
Test 2 => Pass


Iteration 4

result = "Skip"
index = 3

Output:
Test 3 => Skip


Final Output:

Test 0 => Pass
Test 1 => Fail
Test 2 => Pass
Test 3 => Skip

*/


// ====================================================
// WHY IS THIS A CALLBACK?
// ====================================================

/*

We are NOT calling this function ourselves.

function (result, index) {

    console.log("Test " + index + " => " + result);

}

Instead, we give it to forEach().

forEach() decides:

1. When to execute it
2. How many times to execute it
3. What values to pass

Therefore this function is called a CALLBACK.

*/


// ====================================================
// WHAT DOES JAVASCRIPT DO INTERNALLY?
// ====================================================

/*

JavaScript internally behaves roughly like:

callback("Pass", 0);

callback("Fail", 1);

callback("Pass", 2);

callback("Skip", 3);

*/




// ====================================================
// SAME EXAMPLE USING A NAMED FUNCTION
// ====================================================

function printResult(result, index) {

    console.log("Test " + index + " => " + result);

}

testResults.forEach(printResult);

/*

forEach() will execute:

printResult("Pass", 0);

printResult("Fail", 1);

printResult("Pass", 2);

printResult("Skip", 3);

*/


// ====================================================
// WHY IS THIS SYNCHRONOUS?
// ====================================================

/*

forEach() does NOT wait.

forEach() does NOT use timers.

forEach() does NOT call APIs.

forEach() executes one item after another
immediately.

Flow:

Pass
↓
Fail
↓
Pass
↓
Skip

Everything happens in sequence.

*/


// ====================================================
// COMPARE WITH ASYNCHRONOUS CALLBACK
// ====================================================

setTimeout(function () {

    console.log("API Response Received");

}, 2000);

/*

Here the callback is:

function () {

    console.log("API Response Received");

}

Difference:

forEach()
---------
Executes callback immediately.

setTimeout()
------------
Stores callback.
Executes callback later.

*/


// ====================================================
// PLAYWRIGHT CONNECTION
// ====================================================

/*

You will commonly see:

const users = ["Admin", "Manager", "Guest"];

users.forEach(user => {

    test(`Login as ${user}`, async ({ page }) => {

        // Test Steps

    });

});


What happens?

Iteration 1:

user = "Admin"

test("Login as Admin", callback);


Iteration 2:

user = "Manager"

test("Login as Manager", callback);


Iteration 3:

user = "Guest"

test("Login as Guest", callback);


Result:

Playwright creates 3 tests.


Important:

forEach() callback:

user => { }

is executed immediately.


Playwright test callback:

async ({ page }) => { }

is executed later when Playwright runs the test.

*/


// ====================================================
// INTERVIEW NOTE
// ====================================================

/*

Callback:

A function passed as an argument
to another function and executed
by that function.

Examples:

1. forEach()      -> Synchronous Callback

2. setTimeout()   -> Asynchronous Callback

3. test()         -> Playwright Callback

*/