// Iterate - Go from one to another. // 

let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("----");

// for...of (cleanest for values)
for (test of tests) {    
    console.log(test);     // it iterates over the values of the array, and returns each value in the array one by one.
} 

console.log("----");

// foreach() method - it takes a callback function as an argument, 
// and calls that function for each element in the array, 
// passing the element and its index as arguments to the callback function.
tests.forEach((i, index) => {
    console.log(i, index);       // output: login 0, checkout 1, search 2
});

console.log("----");

let students = ["methis", "senthil", "ajay", "rahul"];

// for...in (not recommended for arrays, but it works)
// for...in iterates over the indexes of the array, and returns each index in the array one by one.
for (let student in students) {
    console.log(student, " -> ", students[student]); // output: 0 -> methis, 1 -> senthil, 2 -> ajay, 3 -> rahul
}

console.log("----");


// entries() method - it returns an iterator object that contains the key/value pairs for each index in the array.
for (let [i, test] of tests.entries()) {
    console.log(i, test);    // output: 0 login, 1 checkout, 2 search
} 

// OTHER IMPORTANT CONCEPTS RELATED TO:
// for loop
// for...of
// forEach()
// for...in
// entries()


// ========================================================
// 1. for...of SHOULD USE let or const
// ========================================================

let tests1 = ["login", "checkout"];

for (let test of tests1) {
    console.log(test);
}

/*
Why?
------
Without let/const: for (test of tests1)
'test' becomes global variable (bad practice).
*/

console.log("----");

// ========================================================
// 2. DIFFERENCE BETWEEN for...of AND for...in
// ========================================================

let arr1 = ["a", "b"];
console.log("for...of");
for (let value of arr1) {
    console.log(value);
}

/*
Output:
a
b
*/

console.log("for...in");

for (let index in arr1) {
    console.log(index);
}

/*
Output:
0
1

IMPORTANT:
------------
for...of => values
for...in => indexes
*/

console.log("----");

// ========================================================
// 3. for...in RETURNS STRING INDEXES
// ========================================================

let arr2 = ["x", "y"];

for (let i in arr2) {
    console.log(i, typeof i);
}

/*
Output:
0 string
1 string

Indexes are STRINGS, not numbers.
*/

console.log("----");

// ========================================================
// 4. WHY for...in IS NOT RECOMMENDED FOR ARRAYS
// ========================================================

let arr3 = ["apple", "banana"];

arr3.custom = "hello";

for (let key in arr3) {
    console.log(key);
}

/*
Output:
0
1
custom

IMPORTANT:
------------
for...in also loops through custom properties.
That's why it is not preferred for arrays.
*/

console.log("----");

// ========================================================
// 5. forEach() RETURNS undefined
// ========================================================

let result1 = [1, 2, 3].forEach(x => x * 2);

console.log(result1);

/*
Output:
undefined

IMPORTANT:
------------
forEach() does NOT return a new array.
*/

console.log("----");

// ========================================================
// 6. forEach() DOES NOT CREATE NEW ARRAY
// ========================================================

let nums1 = [1, 2, 3];

nums1.forEach(x => x * 2);

console.log(nums1);

/*
Output:
[1, 2, 3]

Original array unchanged.
*/

console.log("----");

// ========================================================
// 8. forEach() CANNOT USE break
// ========================================================

/*
THIS IS INVALID:

[1,2,3].forEach(x => {
    break;
});

break causes SyntaxError inside forEach().
*/

// ========================================================
// 9. forEach() CANNOT STOP EARLY
// ========================================================

[1, 2, 3, 4].forEach(x => {

    if (x === 2) {
        return;
    }

    console.log(x);
});

/*
Output:
1
3
4

IMPORTANT:
------------
return only skips current callback iteration.
Loop continues.
*/

console.log("----");


// ========================================================
// 10. forEach() SKIPS EMPTY SLOTS
// ========================================================

let sparse = [1, , 3];
sparse.forEach(x => console.log(x));

/*
Output:
1
3

Empty slot skipped.
*/

console.log("----");

// ========================================================
// 11. THIRD PARAMETER OF forEach()
// ========================================================

let arr4 = ["a", "b"];

arr4.forEach((value, index, array) => {

    console.log(value);  // a, b
    console.log(index);  // 0, 1
    console.log(array);  // ["a", "b"] for both iterations
});

/*
Callback parameters:
---------------------
value
index
original array
*/

console.log("----");

// ========================================================
// 12. entries() RETURNS ITERATOR
// ========================================================

let arr5 = ["x", "y"];
console.log(arr5.entries());

/*
Output:
Array Iterator {}

entries() returns iterator object.
*/

console.log("----");

// ========================================================
// 13. entries() RETURNS [index, value]
// ========================================================

let arr6 = ["login", "checkout"];

for (let item of arr6.entries()) {
    console.log(item);
}

/*
Output:
[0, "login"]
[1, "checkout"]
*/

console.log("----");

// ========================================================
// 14. DESTRUCTURING WITH entries()
// ========================================================

let arr7 = ["html", "css", "js"];
for (let [index, value] of arr7.entries()) {
    console.log(index, value);
}

/*
Output:
0 html
1 css
2 js
*/

console.log("----");

// ========================================================
// 15. CLASSIC for LOOP GIVES FULL CONTROL
// ========================================================

let arr8 = ["a", "b", "c"];

for (let i = arr8.length - 1; i >= 0; i--) {

    console.log(arr8[i]);
}

/*
Output:
c
b
a

Useful for:
-------------
reverse iteration
custom increments
break/continue
*/

console.log("----");

// ========================================================
// 16. for...of SUPPORTS break
// ========================================================

for (let value of [1, 2, 3, 4]) {
    if (value === 3) {
        break;
    }
    console.log(value);
}

/*
Output:
1
2

Unlike forEach(), for...of supports break.
*/

console.log("----");

// ========================================================
// 17. for...of WORKS ON ITERABLES
// ========================================================

for (let ch of "hello") {
    console.log(ch);
}

/*
Output:
h
e
l
l
o

Strings are iterable too.
*/

console.log("----");

// ========================================================
// 18. forEach() IS SYNCHRONOUS
// ========================================================

/*
IMPORTANT ADVANCED CONCEPT:

forEach() does not wait for async operations properly.

Example:

arr.forEach(async item => {
    await fetchData();
});

Can cause unexpected behavior.

Prefer:
for...of with await
*/


// ========================================================
// 19. BEST USE CASES
// ========================================================

/*
for
----
Maximum control

for...of
---------
Best for values

forEach()
----------
Functional style iteration

for...in
---------
Mostly for objects, not arrays

entries()
----------
Best when both index and value needed
*/