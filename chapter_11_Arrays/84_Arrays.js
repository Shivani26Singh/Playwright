// Creating Arrays// Array literal (preferred)
let browsers = ["Chrome", "Firefox", "Safari"];

// Array constructor

let scores = new Array(3);// here the 3 is length
scores[0] = 1;
scores[1] = 1;
scores[2] = 1;
let scores2 = new Array(1, 2, 3);   // here the 1,2,3 are the elements of the array, not the length.
console.log(scores);    // [1, 1, 1]
console.log(scores2);   // [1, 2, 3]

//=========================same
let a = Array(1, 2, 3);  // literals are preferred.
let b = new Array(1, 2, 3);

//============================
let numbers = new Array(100, 200, 300, 400);//0-3: 4
console.log(numbers);

//============================
let test = Array.of(10, 20, 30, 40, 50);  
console.log(test);    // [10, 20, 30, 40, 50]

//============================
// Array.from()
let chars = Array.from("hello");
// ["h", "e", "l", "l", "o"]
console.log(chars);

let nums = Array.from("123");
console.log(nums);   // ["1", "2", "3"]

let nums = Array.from("123", Number);
console.log(nums);   // [1, 2, 3]  // it converts the string to number using the Number constructor as the second argument of Array.from() method.

let numbers1 = Array.from("123456789");   
console.log(numbers1);   /*[
  '1', '2', '3',
  '4', '5', '6',
  '7', '8', '9'
]*/

// Interesting case
//================
let a = new Array(5);
let b = Array.of(5);
console.log(a);  // [ <5 empty items> ]  // it creates an array of length 5, but it does not have any elements, it is empty.
console.log(b);   // [5]  // it creates an array with one element 5, and the length of the array is 1.

//================
let arr = [1, 2, 3, 4];
arr.length = 2;
console.log(arr);  // [1, 2]  // it truncates the array to the new length, and removes the elements that are beyond the new length.

//================
let arr = [1, 2];
arr.length = 5;
console.log(arr);  // [1, 2, <3 empty items>]  // it creates an array of length 5, but it does not have any elements, it is empty.

//================
let arr = [];
arr[5] = 100;
console.log(arr);  // [ <5 empty items>, 100 ]  // it creates an array of length 6, but it does not have any elements, it is empty, except for the index 5 which has the value 100.
console.log(arr.length);  // 6  // it creates an array of length 6

// ================
let arr = [1, 2, 3];
console.log(typeof arr);  // object

//================ Correct way to check arrays
let arr = [1, 2];
console.log(Array.isArray(arr));  // true

//========Creating Arrays with fill()
let arr = new Array(5).fill(0);
console.log(arr);  // [0, 0, 0, 0, 0]  // it creates an array of length 5 and fills it with the value 0.

let arr2 = Array.from({ length: 5 }, () => 0);
console.log(arr2); // [0, 0, 0, 0, 0]  // it creates an array of length 5 and fills it with the value 0 using Array.from() method.

//================
let arr = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(arr);  // [1, 2, 3, 4, 5]  // it creates an array of length 5 and fills it with the values from 1 to 5 using Array.from() method with a mapping function as the second argument.

//================Difference Between Literal and Constructor
let arr = [];  //prefered way to create an array using literal syntax
let arr = new Array();  // it creates an empty array, but it is not recommended to use the Array constructor without arguments, 
// because it can lead to confusion and errors, 
// especially when we want to create an array with a specific length, but we forget to pass the length as an argument, 
// and it creates an empty array instead of an array with the desired length.