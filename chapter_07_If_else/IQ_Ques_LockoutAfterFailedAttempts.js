// Login Lockout After Failed Attempts

let attempts = 2;    // output: 1 attempt left before lockout

if (attempts === 0) {
    console.log("Login successful");
} else if (attempts === 1) {
    console.log("2 attempts left before lockout");
} else if (attempts === 2) {
    console.log("1 attempt left before lockout");
} else if (attempts >= 3) {
    console.log("Account Locked — Contact support");
} else {
    console.log("Invalid attempt count");
}