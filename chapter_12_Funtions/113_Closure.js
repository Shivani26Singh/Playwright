function outer() {
    let message = "hello";
    console.log("Outer CALLED!");
    function inner() {
        console.log(message);
    }
    return inner;
}


let fn_inner = outer();  // Output: Outer CALLED! - because outer is called and it logs the message before returning inner
fn_inner();    // Output: hello - because fn_inner is the inner function returned by outer, 
// and it has access to the message variable in the outer scope due to closure

// inner(); // ReferenceError: inner is not defined