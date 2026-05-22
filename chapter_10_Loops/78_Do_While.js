// Use in automation when we want to execute a block of code at least once, 
// regardless of the condition being true or false.

let retry = 0;
do {
    console.log("Execute a code!");
    console.log("Retrying.....", retry);
    retry++;
} while (retry < 3);