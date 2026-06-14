/*
=========================================
JAVASCRIPT PROMISE - BASIC EXAMPLE
=========================================

A Promise represents the eventual result of an asynchronous operation.

Promise States:
1. Pending   -> Initial state
2. Fulfilled -> resolve() called
3. Rejected  -> reject() called

Syntax:
new Promise((resolve, reject) => {
    // success -> resolve()
    // failure -> reject()
});
*/

let order = new Promise((resolve, reject) => {

    let foodReady = true;

    if (foodReady) {
        resolve("Pizza is delivered. Food is ready.");
    } else {
        reject("Order cancelled because of rain.");
    }

});

// Displays the Promise object
console.log(order);

/*
OUTPUT:

Promise { 'Pizza is delivered. Food is ready.' }

Because foodReady = true
*/