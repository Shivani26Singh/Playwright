class Calculator {

    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    add() {
        return this.num1 + this.num2;
    }

    subtract() {
        return this.num1 - this.num2;
    }

    modulus() {
        if (this.num2 === 0) {
            throw new Error("Cannot perform modulus by zero");
        }
        return this.num1 % this.num2;
    }

    divide() {
        if (this.num2 === 0) {
            throw new Error("Cannot divide by zero");
        }
        return this.num1 / this.num2;
    }

    multiply() {
        return this.num1 * this.num2;
    }
}

// Create object
let calc = new Calculator(20, 5);

console.log("Addition:", calc.subtract());
console.log("Subtraction:", calc.subtract());
console.log("Modulus:", calc.modulus());
console.log("Division:", calc.divide());
console.log("Multiplication:", calc.multiply());

/*OUTPUT
Addition: 15
Subtraction: 15
Modulus: 0
Division: 4
Multiplication: 100
*/