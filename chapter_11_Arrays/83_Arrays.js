let fruits = []; // Empty  []
let fruits_fresh = ["apple", "banana", "cheery"];
// length = 3, Index - 0,1,2


let arr = [10, 20, 30, 40]; // 0-3: 4

console.log(arr[0]);
console.log(arr[3])
console.log(arr[4]); // undefined //JavaScript does not throw an error for invalid array indexes.

let testResults = ["pass", "fail", "pass", "skip"];
let mixed = [1, "hello", true, null]; // JS arrays can hold any type.

let mixed = [
  1,
  "hello",
  true,
  null,
  { name: "John" },
  [1, 2]
];

console.log(mixed);  // [1, "hello", true, null, { name: "John" }, [1, 2] ]

//=======
// we can modify the elements of the array,
// but we cannot reassign the array itself, because it is declared as a constant. 
// We can change the contents of the array, but we cannot change the reference to the array.
const arr = [1, 2, 3];
arr[0] = 100;
console.log(arr); // [100, 2, 3]  
//arr = [4, 5, 6]; // TypeError: Assignment to constant variable.

//=========== Arrays Are Assigned by Reference
let a = [1, 2];

let b = a;
b[0] = 999;
console.log(a);  // [999, 2]  // it modifies the original array because both a and b are referencing the same array in memory. 
// They are not two different arrays, they are just two different references to the same array. 
// So when we modify the array through one reference, it affects the other reference as well.

//=======Proper Array Copy
let a = [1, 2];

let b = [...a];  //Spread operator creates a new array.

b[0] = 999;

console.log(a);  // [1, 2]  // it does not modify the original array because b is a new array that is created by copying the elements of a using the spread operator.
console.log(b);  // [999, 2]  // it modifies the new array b, but it does not affect the original array a.
