let str = "  Hello, World!  ";
console.log(str.toUpperCase());  //  HELLO, WORLD! 
console.log(str.toLowerCase());  //   hello, world! 

console.log(str.trim());  // Hello, World!

str.trimStart();
str.trimEnd();

let msg = "Test: FAIL. Retry: FAIL.";
console.log(msg.replace("FAIL", "PASS"));  //Test: PASS. Retry: FAIL.
console.log(msg.replaceAll("FAIL", "PASS"));  //Test: PASS. Retry: PASS.
console.log(msg.replace(/FAIL/g, "PASS"));  //Test: PASS. Retry: PASS.  //g = global (all matches)

// Concatenation
"Hello" + " " + "World";
"Hello".concat(" ", "World");
`${"Hello"} ${"World"}`;

let url = "https://app.vwo.con?app=abc";  
console.log(url.replace(/app/g, "qa"));   //https://qa.vwo.con?qa=abc

let r = "pass,fail,skip".split(",");
console.log(r);   //[ 'pass', 'fail', 'skip' ]

let rr = "test_login_pass".split("_").join(" ");
console.log(rr);  // test login pass

let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date);  // 2024-03-07