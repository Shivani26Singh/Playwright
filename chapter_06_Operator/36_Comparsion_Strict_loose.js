// number == string
// console.log(42 == "42"); // == -> loose compasion  // 42 = number, "42" = string, both of them are equal - loose couple  //true

// console.log(42 === "42"); // === -> strict compasion  // 42 = number, "42" = string, both of them are not equal - strict couple // false
// console.log(42 === "42"); //data type and converted value  //false
// console.log(42 == "45"); //value different  //false


// console.log(5 === 5);  // true (both value and type are the same)
// console.log(5 === "5");  // false (value is the same but type is different)

// console.log(5 == 5);  // true (both value and type are the same)
// console.log(5 == "5");  // true (loose equality converts "5" to 5 before comparing, so they are considered equal)

// console.log(0 == ""); // true (loose equality converts "" to 0 before comparing, so they are considered equal)
// console.log(0 === "");    // false (strict equality does not perform type conversion, so they are not equal)


// console.log(true == 1);  // true (loose equality converts true to 1 before comparing, so they are considered equal)
// console.log(false == 0);  // true (loose equality converts false to 0 before comparing, so they are considered equal)
// console.log(true == "1");  // true (loose equality converts "1" to 1 and true to 1 before comparing, so they are considered equal)
console.log(true == 2);  // false (loose equality converts true to 1 before comparing, so they are not considered equal)


console.log(5 != "5"); // false (loose inequality converts "5" to 5 before comparing, so they are considered equal)
console.log(5 !== "5"); // true (strict inequality does not perform type conversion, so they are not equal)
//console.log(5 !=== "5"); This doesn't exist


// === Strict check we will check for both the datatype and value
// == Lose check we will check either value or data type.