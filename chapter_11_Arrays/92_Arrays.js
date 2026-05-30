let fruits = ["banana", "apple", "cherry"];
fruits.sort();   // Sorts the array in place and returns the sorted array
console.log(fruits);  // Output: [ 'apple', 'banana', 'cherry' ]

let number = [3, 1, 4];
number.sort()
console.log(number);  // Output: [ 1, 3, 4 ]

let nums = [10, 1, 21, 2];
nums.sort();
console.log(nums);  // [ 1, 10, 2, 21 ]  
//Lexicographic sorting (default behavior of sort() method)

// ===== Ascending  ======
nums.sort((a, b) => a - b); 
console.log(nums);    //[ 1, 2, 10, 21 ]

// ===== Descending  ======
nums.sort((a, b) => b - a);
console.log(nums);   //[ 21, 10, 2, 1 ]