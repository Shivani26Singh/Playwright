let g_x = 10;


// Nested scope | blocked scope 
function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(x);   // 10 - because inner can access x from outer scope
        console.log(g_x); // 10 - because inner can access g_x from global scope

    }
    inner();
    console.log(y);  // ReferenceError: y is not defined - because y is in the local scope of inner and cannot be accessed outside of it
}