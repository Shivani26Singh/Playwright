//Slicing & Combining

/*slice(start, end) works like this:
start is included
end is excluded
// actual -> ( start, end-1) . index = 0
Negative indexes count from the end of the array.*/

let arr = [1, 2, 3, 4, 5];
// slice(start, end) — returns new array, does NOT mutate original array.
//Don't give the end, it will automatically take from start to end. 

// ( start, end-1)
console.log(arr.slice(1, 3)); // [2, 3]  (index 1 and 2)
console.log(arr.slice(2, 4));  // [3, 4]  (index 2 and 3)
console.log(arr.slice(2, 5));  // [3, 4, 5]  (index 2, 3 and 4)

// If end is not provided, it will slice till the end of the array.
console.log(arr.slice(2));  // [3, 4, 5]  (index 2 to end)

// negative index counts from the end of the array. 
console.log(arr.slice(-2));  // [4, 5]  (index -2 and -1) // Since no end is provided, it goes to the end.
console.log(arr.slice(-3, -1));  // [3, 4]  (index -3 and -2)  // start from the -3 and till end-1.
console.log(arr.slice(-3));  // [3, 4, 5]  (index -3 to end)

// copy of the whole array- index 0 to end.
console.log(arr.slice(0));   // [1, 2, 3, 4, 5]

// slice - does NOT modify the original array, it returns a new array.

let arr2 = [10, 20, 30, 40, 50];
let s = arr2.slice(1, 4);   // [20, 30, 40]
console.log(arr2);  // [10, 20, 30, 40, 50] - original array unchanged
console.log(s);  // [20, 30, 40] - sliced portion

//===================
// splice(start, deleteCount, item1, item2, ...)
// mutates the original array and returns the removed elements as an array. 

let arr1 = [10, 20, 30, 40, 50];
let removed = arr1.splice(1, 2);   // remove 2 from index 1
console.log(removed);             // [20, 30]
console.log(arr1);               // [10, 40, 50] - original array modified