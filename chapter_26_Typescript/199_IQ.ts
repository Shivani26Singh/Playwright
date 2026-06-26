function buildEndpoint(base: string, path: string): string {
    return base + path;
}

function isSuccessCode(code: number): boolean {
    return code >= 200 && code < 300;
}

function logTestStep(step: string): void {
    console.log("[STEP] " + step);
}

console.log(buildEndpoint("https://api.com", "/users"));
console.log("200 is success:", isSuccessCode(200));
console.log("404 is success:", isSuccessCode(404));
logTestStep("Navigate to login page");

/*https://api.com/users
200 is success: true
404 is success: false
[STEP] Navigate to login page*/