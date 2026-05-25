let scores = [45, 82, 91, 60, 73];

// map - transform every element, return a new arrays
// A map will always return the same number of elements that you have, 
// but based on the condition, their values will be changed. 
let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);


// filter — keeps elements that pass a test
let passing = scores.filter(s => s > 70);
console.log(passing);   // [82, 91, 73]  // it returns a new array with only the elements that are > 70.

// reduce , // reduce — accumulates to a single value
let total = scores.reduce((a, b) => a + b, 0);
console.log(total);   // 351  // it takes a callback function that takes two arguments, 
// the first one is the accumulator, and the second one is the current value, 
// and it returns the accumulated value after processing all the elements in the array. 
// The second argument of reduce() method is the initial value of the accumulator, which is 0 in this case.

let total = scores.reduce((a, b) => a + b, 2);
console.log(total);   // 353 

// === Empty Array + reduce() Without Initial Value = Error

//[].reduce((a, b) => a + b);  // TypeError: Reduce of empty array with no initial value  
// // it throws an error because there is no initial value for the accumulator, 
// and the array is empty, so it cannot reduce to a single value.

//==== Empty Array + Initial Value Works
[].reduce((a, b) => a + b, 0);  // 0  // it returns the initial value because there are no elements to process,
//  so it just returns the initial value.

// flat — flattens nested arrays
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());   // [1, 2, 3, 4, 5]  // it flattens the nested array into a single array.

// ========================================================
// 7. USE map() FOR TRANSFORMATION
// ========================================================

let nums2 = [1, 2, 3];
let doubled = nums2.map(x => x * 2);
console.log(doubled);  

/*
Output:
[2, 4, 6]

map() returns new array.
*/

//map() Always Returns Same Length
//map() Does NOT Modify Original Array

let arr = [1, 2, 3];
let result = arr.map(x => x * 2);

console.log(arr);  // [1, 2, 3]  // original array is not modified.
console.log(result);  // [2, 4, 6]  // new array with transformed values.


//filter() Can Return Smaller or Empty Array
// Unlike map() where size cant change, output size can change.
let nums = [10, 20, 30];
console.log(nums.filter(x => x > 15));  // [20, 30]  // it returns a new array with only the elements that are > 15 in the original array.
console.log(nums.filter(x => x > 100));  // []  // it returns an empty array because there are no elements that are > 100 in the original array.

//filter() Returns Original Elements
//It keeps/removes elements.It does NOT transform them.
let arr = [1, 2, 3];
let result = arr.filter(x => x > 1);
console.log(result);   // [2, 3]  // it returns a new array with only the elements that are > 1 in the original array, 
// but the values of the elements are not changed, they are the same as in the original array.

// MAP vs FILTER
/*| Method     | Purpose                 |
| ---------- | ----------------------- |
| `map()`    | transform every element |
| `filter()` | keep/remove elements    |
*/

// ========================================================
// 11. reduce() CAN RETURN ANYTHING
// ========================================================

// reduce() is NOT limited to numbers.
// It can return:
// - number
// - string
// - object
// - array
// - anything


// --------------------------------------------------------
// reduce() RETURNING OBJECT
// --------------------------------------------------------

let words = ["a", "b", "c"];

let result1 = words.reduce((acc, val) => {
    acc[val] = true;
    return acc;
}, {});

console.log(result1);

/*
Output:
---------
{ a: true, b: true, c: true }

Explanation:
-------------
Initial accumulator = {}

Iteration 1:
acc = {}
val = "a"

acc["a"] = true

Iteration 2:
acc["b"] = true

Iteration 3:
acc["c"] = true

Final object returned.
*/

console.log("----");

// --------------------------------------------------------
// reduce() RETURNING ARRAY
// --------------------------------------------------------

let nums = [1, 2, 3];

let result2 = nums.reduce((acc, val) => {
    acc.push(val * 2);
    return acc;

}, []);

console.log(result2);

/*
Output:
---------
[2, 4, 6]

Explanation:
-------------
Initial accumulator = []

Each value doubled and pushed.

Final array returned.
*/

console.log("----");

// ========================================================
// 13. flat() DEFAULT DEPTH IS 1
// ========================================================

let arr1 = [1, [2, [3]]];
console.log(arr1.flat());

/*
Output:
---------
[1, 2, [3]]

Explanation:
-------------
flat() by default flattens ONLY ONE LEVEL.

[2, [3]]
becomes:
2, [3]

Inner [3] still remains nested.
*/

console.log("----");

// ========================================================
// 14. flat(depth)
// ========================================================

let arr2 = [1, [2, [3]]];
console.log(arr2.flat(2));

/*
Output:
---------
[1, 2, 3]

Explanation:
-------------
flat(2)

Flatten 2 levels deep.
*/

console.log("----");

// ========================================================
// 15. flat(Infinity)
// ========================================================

let arr3 = [1, [2, [3, [4]]]];
console.log(arr3.flat(Infinity));

/*
Output:
---------
[1, 2, 3, 4]

Explanation:
-------------
Infinity means:
flatten ALL nested levels.
*/

console.log("----");

// ========================================================
// 16. flat() REMOVES EMPTY SLOTS
// ========================================================

let arr4 = [1, , 3];
console.log(arr4.flat());

/*
Output:
---------
[1, 3]

Explanation:
-------------
Empty slots are removed while flattening.
*/

console.log("----");

// ========================================================
// 17. THESE METHODS ARE NON-MUTATING
// ========================================================

// Methods:
// map()
// filter()
// reduce()
// flat()

// do NOT modify original array.

let arr5 = [1, 2, 3];
arr5.map(x => x * 2);
console.log(arr5);

/*
Output:
---------
[1, 2, 3]

Original array unchanged.
*/

console.log("----");

// ========================================================
// 18. CHAINING METHODS
// ========================================================

// Very common real-world usage.

let nums2 = [1, 2, 3, 4];
let result3 = nums2
    .filter(x => x > 2)
    .map(x => x * 10);
console.log(result3);

/*
Output:
---------
[30, 40]

Explanation:
-------------
Step 1:
filter(x > 2)

Result:
[3, 4]

Step 2:
map(x * 10)

Result:
[30, 40]
*/

console.log("----");

// ========================================================
// 19. map() AND filter() SKIP EMPTY SLOTS
// ========================================================

let arr6 = [1, , 3];
arr6.map(x => console.log(x));

/*
Output:
---------
1
3

Explanation:
-------------
Empty slot skipped.

map() and filter()
do not process empty slots.
*/

console.log("----");

// ========================================================
// 20. COMMON INTERVIEW DIFFERENCE
// ========================================================

/*

Method      Returns
-----------------------------------------
map()       transformed array

filter()    subset array

reduce()    single accumulated value

flat()      flattened array


SUMMARY:
-----------------------------------------

map()
------
Transforms every element.
Same length returned.

filter()
---------
Keeps/removes elements.
Length may change.

reduce()
---------
Combines all elements
into single final value.

flat()
-------
Removes nesting from arrays.

*/
