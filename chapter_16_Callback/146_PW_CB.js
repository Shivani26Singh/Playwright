// ====================================================
// CALLBACK CONCEPT IN PLAYWRIGHT
// ====================================================

// Real Playwright Import
import { test } from '@playwright/test';


// test() is a function provided by Playwright.
//
// Parameter 1:
// "Verify Login page is working"
// -> Test Name
//
// Parameter 2:
// () => {}
// -> Callback Function
//
// Playwright receives this callback and executes it
// later when the test runs.

test('Verify Login page is working', () => {

    console.log("Step 1: Open Browser");

    console.log("Step 2: Navigate to Login Page");

    console.log("Step 3: Verify Login Page");

});


/*

Think of it like:

test(
    testName,
    callback
);

Actual Values:

test(
    "Verify Login page is working",
    () => {
        console.log("Step 1");
        console.log("Step 2");
        console.log("Step 3");
    }
);

*/