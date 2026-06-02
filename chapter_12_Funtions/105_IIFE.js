// IIFE - Immediately Invoked Function Expression

// An IIFE is a function that is defined and immediately executed. 
// It is often used to create a new scope and avoid polluting the global namespace.

(function () {
    console.log("Hi");
})();


(function () {
    // playwright to run the test
})();

(function () {
    console.log("Staging")
})();


(() => {
    console.log("Setup complete");
})();