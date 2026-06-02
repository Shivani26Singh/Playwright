// Arrow Function (ES6)

const greet = function (name1) {
    return "Hi" + name1;
}

let r = greet("Shivani");
console.log(r);    // HiShivani

const greet2 = (name1) => "Hi" + name1;
let r2 = greet2("Shivani");
console.log(r2);  // HiShivani

//If you want to make a normal function to arrow function. 
//Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>


const doubleIt = n => n * 2;
console.log(doubleIt(10));  // 20

const printIt = name => console.log(name);
printIt("Singh");  // Singh

// Arrow function
function add(a, b) {
    return a + b;
}

const add2 = (a, b) => a + b;

function say() {
    console.log("Hi");
}

const say1 = () => console.log("Hi");
const say2 = () => 'Hi';
console.log(say1()); // Output: Hi (and undefined because say1 does not return a value)
console.log(say2()); // Output: Hi (say2 returns the string "Hi")

const greet = (name) => {
    const message = "Hi" + name;
    return message;
}