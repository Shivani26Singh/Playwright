let c = { status: "pass" };
let d = { status: "pass" };
console.log(c);
console.log(d);

if (c === d) {  //=== compares object references, not the contents of the objects.
    console.log("true");
} else {
    console.log("false");  //false
}