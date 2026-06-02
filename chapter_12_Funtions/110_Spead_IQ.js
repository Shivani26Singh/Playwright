// the spread operator is used to pass the elements of the array as individual arguments to the function

function add(a, b, c) {
    return a + b + c;
}

let num = [1, 2, 3];
console.log(add(...num)); // Output: 6 


let responseCodes = [200, 201, 404];

function hasError(...codes) {
    return codes.some(c => c >= 400);   // return true - because 404 is an error code (>= 400)
}
console.log(hasError(...responseCodes)); // true