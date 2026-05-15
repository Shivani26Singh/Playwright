//Post-increment

let a = 5;

console.log(a++); // 5 // first print a, then increment a
console.log(a);   // 6  // a is now 6

// /Pre-increment

let a = 5;

console.log(++a); // 6  // first increment a, then print a
console.log(a);   // 6  //  a is still 6

//Post-decrement
let b = 5;

console.log(b--); // 5  // first print b, then decrement b
console.log(b);   // 4  // b is now 4

//Pre-decrement
let b = 5;

console.log(--b); // 4  // first decrement b, then print b
console.log(b);   // 4  // b is still 4

let x = 10;
console.log(x++ + ++x);  // 10 + 12 = 22