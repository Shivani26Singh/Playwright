let str = "Login_Test_Pass_001";
// slice(start, end) — negative indexes supported

console.log(str.slice(0, 5)); // Login
console.log(str.slice(11)); // Pass_001

let testNumber = str.slice(-3);  
console.log(testNumber);  // 001

console.log(str.includes("Pass")); // true


// ---substring(start, end) — no negatives (treats as 0)---

console.log(str.substring(6, 10)); // Test
console.log(str.at(0)); // L