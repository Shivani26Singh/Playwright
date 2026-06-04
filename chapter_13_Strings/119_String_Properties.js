console.log(typeof ("200")); // string
console.log(typeof (String(200))); // string

let str = "Hello, World!";
console.log(str.length); // Length always starts from 1, total len- 13

// Access by index
console.log(str[0]);  // H
console.log(str[7]);  // W
console.log(str.at(-1));  // ! - last character
console.log(str.at(-6));  // W - 6th from the end

// always index = 0, and min length = 1

console.log(str.charAt(0));  // H
console.log(str.charCodeAt(0));  // 72