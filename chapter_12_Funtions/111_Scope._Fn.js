// Scope in Functions

let env = "staging";  // global scope

function setupConfig() {
    let timeout = 3000;   // local scope
    console.log(env);     // ✅ can access global
    console.log(timeout); // ✅ can access local
}

 
setupConfig();   // Output: staging, 3000 - because env is in global scope and can be accessed inside the function, and timeout is in local scope of setupConfig and can be accessed inside the function
console.log(env);  // Output: staging - because env is in global scope and can be accessed anywhere in the code
console.log(timeout);  // ReferenceError: timeout is not defined - because timeout is in local scope of setupConfig and cannot be accessed outside of it