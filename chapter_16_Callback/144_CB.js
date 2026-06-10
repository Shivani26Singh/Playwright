// ============================================
// CALLBACK EXPLANATION USING test()
// ============================================

// Imagine the testing framework internally has
// something similar to this:

function test(testName, callback) {
    console.log(`Running Test: ${testName}`);

    // Execute the callback function
    callback();
}


// ============================================
// ACTUAL TEST
// ============================================

test('has title', () => {
    console.log("Hi");
});


/*
What JavaScript sees:

testName = "has title"

callback = () => {
    console.log("Hi");
}
*/


// Internally it behaves roughly like:

function test(testName, callback) {
    console.log(`Running Test: ${testName}`);

    callback(); // Executes the function passed by us
}


/*
Execution Flow

Step 1:
test('has title', callback)

Step 2:
testName = "has title"

Step 3:
callback = () => {
    console.log("Hi");
}

Step 4:
Inside test():
callback();

Step 5:
Arrow function executes

Output:

Running Test: has title
Hi
*/


// ============================================
// SAME EXAMPLE USING NORMAL FUNCTION
// ============================================

function sayHi() {
    console.log("Hi");
}

test('has title', sayHi);

/*
Output:

Running Test: has title
Hi
*/


// ============================================
// SAME EXAMPLE USING ANONYMOUS FUNCTION
// ============================================

test('has title', function () {
    console.log("Hi");
});

/*
Output:

Running Test: has title
Hi
*/


// ============================================
// SAME EXAMPLE USING ARROW FUNCTION
// ============================================

test('has title', () => {
    console.log("Hi");
});

/*
Output:

Running Test: has title
Hi
*/


// ============================================
// REAL PLAYWRIGHT THINKING
// ============================================

/*
When Playwright sees:

test('has title', () => {
    console.log("Hi");
});

It thinks:

1. Create a test named "has title"
2. Store the callback function
3. Later when test execution starts:
       callback()
4. Run the code inside callback

The arrow function is called a CALLBACK
because Playwright receives it and executes
it later.
*/