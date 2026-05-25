// Accessing & Modifying
let statuses = ["pass", "fail", "skip"];
console.log(statuses[0]);
console.log(statuses[2]);

// Accessing last element using length
console.log(statuses[statuses.length - 1]);

//  Accessing last element using at() method

console.log(statuses.at(-1));   // last element i.e. skip
console.log(statuses.at(-2));   // second element i.e. fail 
console.log(statuses.at(-3));   // first element i.e. pass
// console.log(statuses.at(-4)); undefined

// at() method also works with positive indexes
let arr = ["a", "b", "c"];
console.log(arr.at(1));  // b

// Modify
statuses[1] = "blocked";
console.log(statuses);   // ["pass", "blocked", "skip"]

//=========================
let arr = [10, 20, 30];

console.log(arr[-1]);     // undefined
console.log(arr.at(-1));  // 30
/*[] does NOT support negative indexing.
.at() supports negative indexing.*/