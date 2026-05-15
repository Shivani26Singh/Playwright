//condition ? valueIfTrue : valueIfFalse

let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);  //adult

age = 15;
result = age >= 18 ? "Adult" : "Minor";
console.log(result);  // minor

let num = 7;

console.log(num % 2 === 0 ? "Even" : "Odd"); // odd