function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testName} up to ${maxRetries} times, ${delay}ms apart`);
}


retry("Login Test");  // Output: Retrying Login Test up to 3 times, 1000ms apart - default values are used
retry("Registeration Test", 5, 2000);  // Output: Retrying Registeration Test up to 5 times, 2000ms apart - custom values are used