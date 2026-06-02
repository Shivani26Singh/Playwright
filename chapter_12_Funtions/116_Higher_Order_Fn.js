// Higher-Order Functions
// A function that takes a function as argument or returns a function.

function runWithLoggin(testFn, testName) {
    let result = testFn();
    console.log(`Running ${testName}: ${result}`);
    return result;
}

function loginTest() {
    return "pass";
}

function loginTestFAILED() {
    return "fail";
}

runWithLoggin(loginTest, "Login Test");  // Output: pass - because loginTest returns "pass" and runWithLoggin returns that result
runWithLoggin(loginTestFAILED, "Dashboard Failed Test");  // Output: fail - because loginTestFAILED returns "fail" and runWithLoggin returns that result