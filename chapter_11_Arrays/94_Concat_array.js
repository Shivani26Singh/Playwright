//concatenating arrays
//concatenating arrays using + operator does not work as expected.
//It converts arrays to strings and concatenates them.


let a = [1, 2];
let b = [3, 4];
let c = a + b;  
console.log(c);  // Output: "1,23,4" - arrays are converted to strings and concatenated

// to concatenate arrays, we can use the concat() method or the spread operator.

// concat() method - concatenates two or more arrays and returns a new array.   
let f = a.concat(b);
console.log(f);   // Output: [1, 2, 3, 4] - a new array is created with elements of a followed by elements of b

// spread (modern way) - concatenation. (...) 
// It creates a new array by spreading the elements of the existing arrays.
let d = [...a, ...b];
console.log(d);  // Output: [1, 2, 3, 4]

// Join - It concatenates all the elements of an array into a string, 
// separated by a specified separator.

let s = ["pass", "fail", "skip"].join("|");
console.log(s); // Output: "pass|fail|skip" - elements are joined into a string with "|" as a separator