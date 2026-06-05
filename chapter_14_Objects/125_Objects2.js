// Objects
// Key and value

let student1 = { name: "Amit", age: 65 };
let student2 = { name: "Pramod" };
let student3 = { name: "Pramod", age: 87, phone: 9876545432 };

// Key will not be in the doubt quotes
// below key in doubt is actually JSON

let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 9876545432 };


let a = { status: "pass" };
console.log(a.status);   //pass
console.log(a["status"]);  //pass

 let a1 = { status: 'pass' };
 console.log(a1.status);  //pass

//

let b = a;   // copy the reference
b.status = "fail";
console.log(a.status);  //fail
console.log(b.status);  //fail

let c = { status: "pass" };
let d = { status: "pass" };
console.log(c.status);  //pass
console.log(d.status);  //pass

if (b === a) {   //true
    console.log("true");
} else {
    console.log("false");
}

if (c === d) {     //false - === compares object references, not the contents of the objects.
    console.log("true");
} else {
    console.log("false");
}