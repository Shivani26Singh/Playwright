
class TestCase {

    // parameterized constructor
    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }
    display() { // Method
        console.log(this.name + " → " + this.status + " → " + this.priority);
    }
}

// Function
function f1() {

}

let loginTC = new TestCase("Login Test", "Pass", "P0");  //arguments
let signUpTC = new TestCase("Signup TC", "Fail", "P1");

loginTC.display();

// Function vs Method
// A function exists independently and is not part of a class.
// A method is a function defined inside a class or object.