let results = ["pass", "fail", "pass", "error", "fail"];

//// indexOf — returns first index, or -1 if not found
results.indexOf("fail");         //1
results.indexOf("skip");        // -1  //not found

//====indexOf(search, startIndex)
results.indexOf("fail", 2);  // 4  // it starts searching from index 2, so it finds the second "fail" at index 4.

// lastIndexOf — searches from the end
results.lastIndexOf("fail");    // 4


// includes — returns boolean
results.includes("error"); // true
results.includes("skip");       // false

// includes() Also Has Start Position
results.includes("fail", 2);  // true  // it starts searching from index 2, so it finds the second "fail" at index 4, and returns true.


// find — returns first matching element //find() Stops After First Match
//find() Returns ELEMENT, Not Boolean
let nums = [10, 25, 30, 45];
let r = nums.find(x => x > 20);  // checks each element, returns first one that is > 20
console.log(r);  // 25

// findIndex
nums.findIndex(n => n > 20); // 1  // checks each element, returns index of first one that is > 20

//========findLast() and findLastIndex() Search Backward

nums.findLast(n => n > 20); // 45  // it returns the last element that is > 20
nums.findLastIndex(n => n > 20);// 3  // it returns the index of the last element that is > 20

//========find() Returns undefined If Not Found
let arr = [1, 2, 3];
console.log(arr.find(x => x > 100));  // undefined  // it returns undefined because there is no element that is > 100 in the array.

//========findIndex() Returns -1 If Not Found
let arr = [1, 2, 3];
console.log(arr.findIndex(x => x > 100));  // -1  // it returns -1 because there is no element that is > 100 in the array.


//=========Difference Between find() and filter()=======
/*| Method     | Returns                |
| ---------- | ---------------------- |
| `find()`   | first matching element |
| `filter()` | all matching elements  |
*/

let arr = [10, 20, 30, 40];

console.log(arr.find(x => x > 15));  // 20  // it returns the first element that is > 15
console.log(arr.filter(x => x > 15));  // [20, 30, 40]  // it returns all the elements that are > 15 in a new array.

//===find() Works Great with Objects
let users = [
  { id: 1 },
  { id: 2 }
];

let user = users.find(u => u.id === 2);

console.log(user);  // { id: 2 }  // it returns the first object that has id property equal to 2