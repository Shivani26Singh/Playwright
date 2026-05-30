// Checking Arrays

// Check if something IS an array
let result = Array.isArray([1, 2, 3]);
console.log(result);   // Output: true - [1, 2, 3] is an array

result = Array.isArray("a");
console.log(result);   // Output: false - "a" is a string, not an array


// every & some

// every — ALL must pass
[80, 90, 85].every(s => s >= 70); // true
[80, 60, 85].every(s => s >= 70); // false

// Playwright API 
[200, 201, 203].every(statuscode => statuscode > 200);

// some — AT LEAST ONE must pass
[80, 60, 85].some(s => s < 70); // true
[80, 90, 85].some(s => s < 70); // false

//arrow : s => s >= 70