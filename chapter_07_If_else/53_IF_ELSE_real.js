let username = "Shivani";
let password = "secure123";
let isAccountLocked = true;

// Logical operator + if-else statement
 // The user can only enter if they have the correct username and password, and their account is not locked.
if ((username === "Shivani" && password === "secure123") && !isAccountLocked) {
    console.log("Allowed to enter");
} else {
    console.log("not allwed to enter");
}
//output: not allowed to enter