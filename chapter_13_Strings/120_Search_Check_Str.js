// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// incudes - it will return true if the substring is present in the string, otherwise false
console.log(url.includes("staging"));  // true
console.log(url.includes("production"));  // false

// startsWith / endsWith - it will check whether the string starts with the given substring or ends with the given substring 
// and return true or false accordingly.
url.startsWith("https"); // true
url.startsWith("http://");  //fasle
url.endsWith("true");  // true


// indexOf / lastIndexOf - it will return the index of the first occurrence of the substring, or -1 if not found
console.log(url.indexOf("a"));  // 8
console.log(url.lastIndexOf("a"));  // 29

console.log(url.indexOf("nothere"));  // -1
console.log(url.indexOf("x"));  // -1

// search - it will return the index of the first match of the regex pattern, or -1 if not found
console.log(url.search(/login/));  // 22
console.log(url.search(/vwo/));  // 15

// /regex/ - Regular EXPRESSION - These are nothing but A-patterns that you can find within
//  the strings automatically. 