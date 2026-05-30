function greetByName(name) {
    console.log("Hi ", name);
}

greetByName("Shivani");   // Hi  Shivani
let result = greetByName("SS");  // Hi SS
console.log(result);  // undefined


function begger(money) {
    console.log("Thanks", money);
}

let returnMesomething = begger(100);   // Thanks 100
console.log(returnMesomething);     // undefined