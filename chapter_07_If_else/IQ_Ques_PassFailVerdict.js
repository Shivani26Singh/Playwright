let expected = "Login Successful";
let actual = "Login Successful";

if (expected === actual) {
    console.log("✅ Test Passed");
} else {
    console.log(`❌ Test Failed — Expected: ${expected}, Got: ${actual}`);
}

//Output: ✅ Test Passed
//=============================

expected = "Login Successful"
actual   = "Invalid Credentials"

if (expected === actual) {
    console.log("✅ Test Passed");
} else {
    console.log(`❌ Test Failed — Expected: ${expected}, Got: ${actual}`);
}

//Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials