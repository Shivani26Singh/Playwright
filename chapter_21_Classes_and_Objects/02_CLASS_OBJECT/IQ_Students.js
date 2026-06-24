class Student {

    // Static variable (shared by all students)
    static batchName = "Playwright 2X";

    // Static method
    static displayBatch() {
        console.log(`Batch: ${Student.batchName}`);
    }

    // Constructor
    constructor(id, name) {
        this.id = id;       // instance variable
        this.name = name;   // instance variable
    }

    // Non-static method
    print() {
        console.log(`ID: ${this.id}, Name: ${this.name}`);
    }
}

// Static method call
Student.displayBatch();

// Create 10 student objects
let s1 = new Student(1, "Shivani");
let s2 = new Student(2, "Rahul");
let s3 = new Student(3, "Amit");
let s4 = new Student(4, "Priya");
let s5 = new Student(5, "Neha");
let s6 = new Student(6, "Arjun");
let s7 = new Student(7, "Karan");
let s8 = new Student(8, "Anjali");
let s9 = new Student(9, "Vikram");
let s10 = new Student(10, "Sneha");

// Print students
s1.print();
s2.print();
s3.print();
s4.print();
s5.print();
s6.print();
s7.print();
s8.print();
s9.print();
s10.print();

/*batchName → static variable (one copy shared by all students)
displayBatch() → static method (called using Student.displayBatch())
id and name → instance variables (each student has its own values)
print() → instance/non-static method (called using an object like s1.print())
new Student(...) → creates an object (instance) of the class
10 student objects represent students of the Playwright 2X batch.
*/

/*OUTPUT
Batch: Playwright 2X
ID: 1, Name: Shivani
ID: 2, Name: Rahul
ID: 3, Name: Amit
ID: 4, Name: Priya
ID: 5, Name: Neha
ID: 6, Name: Arjun
ID: 7, Name: Karan
ID: 8, Name: Anjali
ID: 9, Name: Vikram
ID: 10, Name: Sneha
*/