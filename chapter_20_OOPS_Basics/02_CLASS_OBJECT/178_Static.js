class Person {

    static nationality = "India";
    constructor(name) {
        this.name = name;
    }
    static common_fn() {

    }
}

//A static method can directly access static variables, 
// but it cannot directly access instance variables because instance variables belong to objects,
//  and a static method does not have an object (this).

class Person {
    static nationality = "India";

    constructor(name) {
        this.name = name;
    }

    static showInfo() {
        console.log(Person.nationality); // ✅ Can access static variable

        // console.log(this.name);       // ❌ Cannot access instance variable
    }
}