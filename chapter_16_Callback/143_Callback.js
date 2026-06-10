// =========================================
// Normal Function
// =========================================

// A regular function with a name: print
function print() {
    console.log("Normal Function is called");
}


// =========================================
// Main Function
// =========================================

// placeOrder accepts 2 parameters:
// 1. item -> what the customer ordered
// 2. Callback -> a function to execute after order placement

function placeOrder(item, Callback) {

    console.log(`Hi, Your ${item} order is placed`);

    // Execute the callback function
    // We don't know which function it is.
    // Whoever calls placeOrder decides that.
    Callback();
}


// =========================================
// First Way - Named Function Callback
// =========================================

// Passing the function 'print' as a callback.
//
// Flow:
// item = "Pizza"
// Callback = print
//
// Inside placeOrder:
// print() gets executed

placeOrder("Pizza", print);

/*
Output:

Hi, Your Pizza order is placed
Normal Function is called
*/


// =========================================
// Second Way - Anonymous Function Callback
// =========================================

// Instead of creating a separate function,
// we create the function directly while calling placeOrder.

placeOrder("Burger", function () {
    console.log("Anonymous Fn, I am also a function without a name!");
});

/*
Output:

Hi, Your Burger order is placed
Anonymous Fn, I am also a function without a name!
*/


// =========================================
// Third Way - Arrow Function Callback
// =========================================

// Arrow functions are a shorter syntax
// for writing functions.

placeOrder("Momos", () => {
    console.log("Arrow Fn, I am also a function without a name!");
});

/*
Output:

Hi, Your Momos order is placed
Arrow Fn, I am also a function without a name!
*/