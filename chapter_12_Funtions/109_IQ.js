// Returns a value
function getStatus(code) {
    if (code >= 200 && code < 300) return "success";
    if (code >= 400 && code < 500) return "client error";
    if (code >= 500) return "server error";
}

getStatus(200);  // success
getStatus(404);  // client error
getStatus(500);    // server error

function logTest(name) {
    console.log(`Running: ${name}`);
    // no return statement
}
let result = logTest("Login");   // Output: Running: Login
console.log(result);   // Output: undefined - because logTest does not return a value, it returns undefined by default

greet("Alice");  // Output: undefined - because function declarations are hoisted, so greet is available before its definition

function greet(name) {
    return `Hello, ${name}!`;
}

sayHi("Bob");   //ReferenceError: Cannot access 'sayHi' before initialization - 
// because sayHi is defined as a function expression, it is not hoisted like function declarations

const sayHi = function (name) {
    return `Hi, ${name}!`;
};