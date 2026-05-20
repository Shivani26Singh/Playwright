// Build Health Reporter

let passPercentage = 95;    // Output: 🟡 Stable — Investigate failures

if (passPercentage === 100) {
    console.log("Green Build");
} else if (passPercentage >= 90 && passPercentage <= 99) {
    console.log("🟡 Stable — Investigate failures");
} else if (passPercentage >= 70 && passPercentage <= 89) {
    console.log("Unstable");
} else if (passPercentage >= 0 && passPercentage < 70) {
    console.log("🔴 Broken Build — Block deployment");
} else {
    console.log("Invalid percentage");
}

//===============================
passPercentage = 65;    // Output: 🔴 Broken Build — Block deployment

if (passPercentage === 100) {
    console.log("Green Build");
} else if (passPercentage >= 90 && passPercentage <= 99) {
    console.log("🟡 Stable — Investigate failures");
} else if (passPercentage >= 70 && passPercentage <= 89) {
    console.log("Unstable");
} else if (passPercentage >= 0 && passPercentage < 70) {
    console.log("🔴 Broken Build — Block deployment");
} else {
    console.log("Invalid percentage");
}
