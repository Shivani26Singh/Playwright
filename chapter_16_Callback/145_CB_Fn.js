// =========================================
// CALLBACK EXAMPLE - CAFE
// =========================================

// Main Function
// item = food ordered
// callWhenTableisReady = callback function

function cafe(item, callWhenTableisReady) {

    console.log("Finding...1");
    console.log("Finding...2");
    console.log("Finding...3");

    console.log(`Order: ${item}`);

    // Execute callback
    callWhenTableisReady();
}


// =========================================
// NORMAL FUNCTION CALLBACK
// =========================================

function callWhenTableisReady() {
    console.log("calling 9876543210");
}

cafe("Burger", callWhenTableisReady);

/*

Flow:

item = Burger

callback = callWhenTableisReady

Inside cafe():

callWhenTableisReady();

Output:

Finding...1
Finding...2
Finding...3
Order: Burger
calling 9876543210

*/


// =========================================
// ANONYMOUS FUNCTION CALLBACK
// =========================================

cafe("Pizza", function () {
    console.log("calling 8765432123");
});

/*

Flow:

item = Pizza

callback = function () {
    console.log("calling 8765432123");
}

Inside cafe():

callback();

Output:

Finding...1
Finding...2
Finding...3
Order: Pizza
calling 8765432123

*/


// =========================================
// ARROW FUNCTION CALLBACK
// =========================================

cafe("Momos", () => {
    console.log("calling 3543543");
});

/*

Flow:

item = Momos

callback = () => {
    console.log("calling 3543543");
}

Inside cafe():

callback();

Output:

Finding...1
Finding...2
Finding...3
Order: Momos
calling 3543543

*/


// =========================================
// CALLBACK RULE
// =========================================

/*

If a function is:

1. Passed into another function
2. Stored in a parameter
3. Executed later

Then it is called a CALLBACK.

Example:

cafe("Burger", callWhenTableisReady);

Here:

callWhenTableisReady

is a callback because cafe()
executes it later using:

callWhenTableisReady();

*/


// =========================================
// CAVEMAN VERSION
// =========================================

/*

Me order Burger

↓

Cafe find table

↓

Cafe find table

↓

Cafe find table

↓

Cafe ready

↓

Cafe call customer

↓

Callback executed

*/