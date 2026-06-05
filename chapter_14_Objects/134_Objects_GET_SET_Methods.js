const user = {
    firstName: "shivani",
    lastName: "singh",
    get fullName() {
        return this.firstName + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}

// Objects - JS {}
// Class and Object 
// this. it means current value in the Object.

console.log(user.fullName);  //shivanisingh
user.fullName = "john wick";
console.log(user.fullName);  //johnwick


// class User{
//     firstname
//     lastName,
//     fullName(){

//     }
// }