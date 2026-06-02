
function makeCounter(start = 0) {
    let count = start;
    return {
        increment() { count++ },
        decrement() { count-- },
        get() { return count; }
    }
}
// makeCounter creates a closure that captures the count variable, 
// allowing the returned object to access and modify it even after makeCounter has finished executing.
let counter = makeCounter(0);  // creates a counter object with an initial count of 0
counter.increment(); // increments the count to 1
counter.increment(); // increments the count to 2
counter.increment();  //    increments the count to 3
console.log(counter.get());  // Output: 3 - because the get method returns the current value of count, which is 3 after three increments
counter.decrement();  // decrements the count to 2
console.log(counter.get());  // Output: 2 - because the get method returns the current value of count, which is 2 after one decrement