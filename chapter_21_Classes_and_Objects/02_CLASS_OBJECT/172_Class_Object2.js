class Person {
    constructor() {
        console.log("I will be created when Obj is created!")
    }
    // Attributes
    name;
    email;
    salary;
    address;

    // Behaviour
    sleep() { }
    eat() { }
    walk() { }


}

let obj_ref = new Person();
// obg_ref = Is called the object reference (address)
// new Person(); -> Is the object with the new keyword 

// console.log(obj_ref);

/*Person → Class (blueprint/template)
new Person() → Object (real thing created from the blueprint)
obj_ref → Reference variable that stores the address/reference of the object*/