let arr = [1, 2, 3];
console.log(arr);

// Add to END
arr.push(4);
console.log(arr);  // [1, 2, 3, 4]

//push() returns NEW LENGTH of the array after adding the element.
let newLength = arr.push(5);
console.log(newLength);  // 5
console.log(arr);  // [1, 2, 3, 4, 5]

//==== error case
console.log(newLength.push(4));  // TypeError: newLength.push is not a function // returns NUMBER, not array.


// ====Remove from END
arr.pop();   
arr.pop();
console.log(arr);  // [1, 2, 3]

arr.push(5, 6);  // we can add multiple elements at once using push() method.
console.log(arr);   // [1, 2, 3, 5, 6]

// POP- remove single element from end, if we want to remove multiple elements, we can use pop() multiple times.
arr.pop()
arr.pop();
console.log(arr);   // [1, 2, 3]    


// Add to BEGINNING
arr.unshift(7, 8);  // we can add multiple elements at once using unshift() method.
console.log(arr);  // [7, 8, 1, 2, 3]


// Remove from BEGINNING
arr.shift();   // it removes only one element from the beginning, if we want to remove multiple elements, we can use shift() multiple times.
console.log(arr);      // [8, 1, 2, 3]

//unshift() also returns NEW LENGTH of the array after adding the element at the beginning.
let newLen = arr.unshift(200);
console.log(newLen);  // 5
console.log(arr);     // [200, 8, 1, 2, 3]

//=========pop() returns REMOVED ELEMENT from the end
let removed = arr.pop();

console.log(arr);  // [200, 8, 1, 2]
console.log(removed);  // 3

//===========shift() returns REMOVED ELEMENT from the beginning
let removed = arr.shift();

console.log(arr);     // [8, 1, 2]
console.log(removed);   // 200


arr.unshift(100);   // add 100 at the beginning
console.log(arr);   // [100, 8, 1, 2]
arr.shift();        // remove 100 from the beginning
console.log(arr);    // [8, 1, 2]

//========pop() and shift() on empty array
let arr = [];
console.log(arr.pop());  // undefined
console.log(arr.shift());  // undefined

//shift() and unshift() Are Slower Than push() and pop()
//push() and pop() Work at END of array. so Fast.
//shift() and unshift() work at BEGINNING of array. so Slow, 
// because it has to shift all the elements to the left or right after adding or removing an element at the beginning of the array.