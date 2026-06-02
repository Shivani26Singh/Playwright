// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, 
// The rest parameter is denoted by three dots (...) followed by the name of the array

function logResult(suiteName, ...results) {
    console.log(suiteName);
    console.log(results);
}

logResult('Login Test', 1, 2, 3);
logResult('Reg Test', "Hello", "Pramod");