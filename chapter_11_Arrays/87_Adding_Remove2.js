let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);  // [1, 2, 3, 4, 5, 6]

arr = [1, 2, 3, 4, 5, 6]    //index=0,1,2,3,4,5

//splice(start, deleteCount, ...itemsToAdd)
arr.splice(2, 1);   // it removes the element at index 2 i.e. 3
console.log(arr);  // [1, 2, 4, 5, 6] - it removes the element at index 2 i.e. 3

arr.splice(2, 0, 99); // add
arr.splice(2, 1, 99); // repace
console.log(arr);


arr = [1, 2, 3, 4, 5, 6]
index=0,1,2,3,4,5

arr.splice(1, 2, 10, 20);
console.log(arr);

/*
========================================================
Array.prototype.splice() in JavaScript
========================================================

Definition:
------------
splice() changes the ORIGINAL array by:
1. Removing elements
2. Inserting elements
3. Replacing elements

Syntax:
--------
array.splice(start, deleteCount, item1, item2, ...)

Parameters:
------------
start
- The index where operation starts.
- Can be positive or negative.

deleteCount
- Number of elements to remove.
- Optional.
- If omitted -> removes everything from start to end.
- If 0 or negative -> removes nothing.
- If undefined -> treated as 0.
- Non-integer values are converted to integers.

item1, item2, ...
- Optional items to insert.

Return Value:
-------------
Returns an array containing removed elements.

IMPORTANT:
------------
splice() modifies the original array.
========================================================
*/

/*
========================================================
1. BASIC REMOVAL
========================================================
*/

console.log("1. BASIC REMOVAL");

let arr1 = [10, 20, 30, 40, 50];

let removed1 = arr1.splice(2, 2);

console.log("Modified Array:", arr1);
console.log("Removed Elements:", removed1);

/*
Explanation:
-------------
Index positions:
0 -> 10
1 -> 20
2 -> 30
3 -> 40
4 -> 50

splice(2, 2)

Start at index 2 => value 30
Remove 2 elements => 30 and 40

Result:
arr1 = [10, 20, 50]
removed1 = [30, 40]
*/

console.log("\n");



/*
========================================================
2. OMITTING deleteCount
========================================================
*/

console.log("2. OMITTING deleteCount");

let arr2 = [1, 2, 3, 4, 5];

let removed2 = arr2.splice(2);

console.log("Modified Array:", arr2);
console.log("Removed Elements:", removed2);

/*
Explanation:
-------------
splice(2)

deleteCount is omitted.

This means:
Remove everything from index 2 to end.

Removed:
3, 4, 5

Result:
arr2 = [1, 2]
removed2 = [3, 4, 5]
*/

console.log("\n");



/*
========================================================
3. deleteCount = 0
========================================================
*/

console.log("3. deleteCount = 0");

let arr3 = [1, 2, 3];

let removed3 = arr3.splice(1, 0);

console.log("Modified Array:", arr3);
console.log("Removed Elements:", removed3);

/*
Explanation:
-------------
splice(1, 0)

Start at index 1
Remove 0 elements

Nothing is removed.

Result:
arr3 = [1, 2, 3]
removed3 = []
*/

console.log("\n");



/*
========================================================
4. NEGATIVE deleteCount
========================================================
*/

console.log("4. NEGATIVE deleteCount");

let arr4 = [1, 2, 3];

let removed4 = arr4.splice(1, -5);

console.log("Modified Array:", arr4);
console.log("Removed Elements:", removed4);

/*
Explanation:
-------------
splice(1, -5)

Negative deleteCount becomes 0.

Nothing is removed.

Result:
arr4 = [1, 2, 3]
removed4 = []
*/

console.log("\n");



/*
========================================================
5. deleteCount = undefined
========================================================
*/

console.log("5. deleteCount = undefined");

let arr5 = [1, 2, 3];

let removed5 = arr5.splice(1, undefined);

console.log("Modified Array:", arr5);
console.log("Removed Elements:", removed5);

/*
Explanation:
-------------
undefined becomes 0.

Nothing is removed.

Result:
arr5 = [1, 2, 3]
removed5 = []
*/

console.log("\n");



/*
========================================================
6. DIFFERENCE BETWEEN:
splice(1)
AND
splice(1, undefined)
========================================================
*/

console.log("6. IMPORTANT DIFFERENCE");

let arr6a = [1, 2, 3, 4];

let removed6a = arr6a.splice(1);

console.log("splice(1)");
console.log("Modified Array:", arr6a);
console.log("Removed Elements:", removed6a);

console.log("-----");

let arr6b = [1, 2, 3, 4];

let removed6b = arr6b.splice(1, undefined);

console.log("splice(1, undefined)");
console.log("Modified Array:", arr6b);
console.log("Removed Elements:", removed6b);

/*
Explanation:
-------------
splice(1)
=> deleteCount omitted
=> removes everything after index 1

Result:
arr6a = [1]
removed6a = [2, 3, 4]

--------------------------------

splice(1, undefined)
=> undefined converts to 0
=> removes nothing

Result:
arr6b = [1, 2, 3, 4]
removed6b = []
*/

console.log("\n");



/*
========================================================
7. deleteCount AS STRING NUMBER
========================================================
*/

console.log("7. deleteCount AS STRING NUMBER");

let arr7 = [1, 2, 3, 4];

let removed7 = arr7.splice(1, "2");

console.log("Modified Array:", arr7);
console.log("Removed Elements:", removed7);

/*
Explanation:
-------------
"2" converts to number 2.

Remove 2 elements starting from index 1.

Removed:
2 and 3

Result:
arr7 = [1, 4]
removed7 = [2, 3]
*/

console.log("\n");



/*
========================================================
8. INVALID STRING deleteCount
========================================================
*/

console.log("8. INVALID STRING deleteCount");

let arr8 = [1, 2, 3];

let removed8 = arr8.splice(1, "abc");

console.log("Modified Array:", arr8);
console.log("Removed Elements:", removed8);

/*
Explanation:
-------------
"abc" converts to NaN.

NaN becomes 0.

Nothing removed.

Result:
arr8 = [1, 2, 3]
removed8 = []
*/

console.log("\n");



/*
========================================================
9. INSERTING ELEMENTS
========================================================
*/

console.log("9. INSERTING ELEMENTS");

let arr9 = [1, 2, 5];

arr9.splice(2, 0, 3, 4);

console.log("Modified Array:", arr9);

/*
Explanation:
-------------
splice(2, 0, 3, 4)

Start at index 2
Remove 0 elements
Insert 3 and 4

Result:
arr9 = [1, 2, 3, 4, 5]
*/

console.log("\n");



/*
========================================================
10. REPLACING ELEMENTS
========================================================
*/

console.log("10. REPLACING ELEMENTS");

let arr10 = [1, 2, 3, 4];

let removed10 = arr10.splice(1, 2, 20, 30);

console.log("Modified Array:", arr10);
console.log("Removed Elements:", removed10);

/*
Explanation:
-------------
splice(1, 2, 20, 30)

Start at index 1
Remove 2 elements => 2 and 3
Insert 20 and 30

Result:
arr10 = [1, 20, 30, 4]
removed10 = [2, 3]
*/

console.log("\n");



/*
========================================================
11. NEGATIVE start
========================================================
*/

console.log("11. NEGATIVE start");

let arr11 = [10, 20, 30, 40];

let removed11 = arr11.splice(-2, 1);

console.log("Modified Array:", arr11);
console.log("Removed Elements:", removed11);

/*
Explanation:
-------------
Negative start counts from end.

Array:
[10, 20, 30, 40]

-1 => 40
-2 => 30

splice(-2, 1)

Start at 30
Remove 1 element

Result:
arr11 = [10, 20, 40]
removed11 = [30]
*/

console.log("\n");



/*
========================================================
12. start GREATER THAN ARRAY LENGTH
========================================================
*/

console.log("12. start GREATER THAN ARRAY LENGTH");

let arr12 = [1, 2, 3];

arr12.splice(10, 1, 99);

console.log("Modified Array:", arr12);

/*
Explanation:
-------------
Start index 10 does not exist.

JavaScript places insertion at end.

Result:
arr12 = [1, 2, 3, 99]
*/

console.log("\n");



/*
========================================================
13. REMOVE ALL ELEMENTS
========================================================
*/

console.log("13. REMOVE ALL ELEMENTS");

let arr13 = [1, 2, 3, 4];

let removed13 = arr13.splice(0);

console.log("Modified Array:", arr13);
console.log("Removed Elements:", removed13);

/*
Explanation:
-------------
Start at index 0
deleteCount omitted

Remove everything.

Result:
arr13 = []
removed13 = [1, 2, 3, 4]
*/

console.log("\n");



/*
========================================================
14. INSERT AT BEGINNING
========================================================
*/

console.log("14. INSERT AT BEGINNING");

let arr14 = [3, 4, 5];

arr14.splice(0, 0, 1, 2);

console.log("Modified Array:", arr14);

/*
Explanation:
-------------
Start at index 0
Remove nothing
Insert 1 and 2

Result:
arr14 = [1, 2, 3, 4, 5]
*/

console.log("\n");



/*
========================================================
15. INSERT AT END
========================================================
*/

console.log("15. INSERT AT END");

let arr15 = [1, 2, 3];

arr15.splice(arr15.length, 0, 4, 5);

console.log("Modified Array:", arr15);

/*
Explanation:
-------------
arr15.length = 3

Start at index 3
Remove nothing
Insert 4 and 5

Result:
arr15 = [1, 2, 3, 4, 5]
*/

console.log("\n");



/*
========================================================
16. USING splice() WITH EMPTY ARRAY
========================================================
*/

console.log("16. USING splice() WITH EMPTY ARRAY");

let arr16 = [];

arr16.splice(0, 0, 1, 2, 3);

console.log("Modified Array:", arr16);

/*
Explanation:
-------------
Even empty arrays can receive inserted items.

Result:
arr16 = [1, 2, 3]
*/

console.log("\n");



/*
========================================================
17. splice() RETURNS REMOVED ELEMENTS
========================================================
*/

console.log("17. RETURN VALUE");

let arr17 = ["a", "b", "c", "d"];

let removed17 = arr17.splice(1, 2);

console.log("Modified Array:", arr17);
console.log("Removed Elements:", removed17);

/*
Explanation:
-------------
splice() always returns removed items.

Removed:
b and c

Result:
arr17 = ["a", "d"]
removed17 = ["b", "c"]
*/

console.log("\n");



/*
========================================================
18. COMMON INTERVIEW QUESTION
========================================================
*/

console.log("18. COMMON INTERVIEW QUESTION");

let arr18 = [1, 2, 3];

let result18 = arr18.splice(1, 1);

console.log("Modified Array:", arr18);
console.log("Returned Value:", result18);

/*
Explanation:
-------------
Original array changes:
[1, 2, 3] -> [1, 3]

Returned value:
[2]

IMPORTANT:
splice() returns an ARRAY of removed items,
not a single value.
*/

console.log("\n");



/*
========================================================
FINAL SUMMARY
========================================================

splice() CAN:
---------------
✔ Remove elements
✔ Insert elements
✔ Replace elements
✔ Modify original array

KEY RULES:
-----------
1. Original array changes.
2. Returns deleted elements.
3. deleteCount omitted => remove till end.
4. deleteCount <= 0 => remove nothing.
5. Negative start counts from end.

========================================================
*/