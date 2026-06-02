function makeRetryTracker(max) {
    let attempts = 0;
    function tryAgain(testName) {
        attempts++;
        if (attempts > max) {
            return `${testName} exceeded max retries (${max})`;
        }
        return `Attempt ${attempts}/${max} for ${testName}`;
    }

    return tryAgain;


}

let retry = makeRetryTracker(3);  // retry = tryAgain function with max = 3 and attempts initialized to 0
console.log(retry("Login"));  //Attempt 1/3 for Login
console.log(retry("Login"));  // Attempt 2/3 for Login
console.log(retry("Login"));  // Attempt 3/3 for Login
console.log(retry("Login"));  // Login exceeded max retries (3)