if ("hello") console.log("String is truthy"); // // "hello" = truthy
if (42) console.log("Number is truthy");  // 42 = truthy
if ({}) console.log("Empty object is truthy!");  // {} = truthy
if ([]) console.log("Empty array is truthy!");   // [] = truthy

if ("") console.log("Won't print");  // "" = falsy
if (null) console.log("Won't print");  // null = falsy
if (undefined) console.log("Won't print");  // undefined = falsy
if (NaN) console.log("Won't print");  // NaN = falsy
if (0) console.log("Won't print");  // 0 = falsy

//ANY NUMBER = 1,2,,3,34,32,2,- TRUTH
//0= FALSE

let name = 0;  // output: Bye
if (name) {
    console.log("Hi");
} else {
    console.log("Bye");
}