class Car {
    // CAB (Constructor,Attributes,Behavior)
    //  Constructor
    constructor(name_given_during_obj_creation) {
        this.name = name_given_during_obj_creation;
    }
    // Attribute 
    // Behavior
    drive() {
        console.log("i am driving", this.name);
    }

}

const tesla = new Car("Model S");
tesla.drive();  // i am driving Model S

const i10 = new Car("grand is10");
i10.drive();  //i am driving grand is10