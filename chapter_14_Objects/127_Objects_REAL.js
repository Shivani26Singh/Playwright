let config = {};

config.browser = "chrome";
config.timeout = 3000;
config.testname = "login test";

console.log(config);  //{ browser: 'chrome', timeout: 3000, testname: 'login test' }

delete config.browser;
console.log(config);  // { timeout: 3000, testname: 'login test' }


// if (config.browser === "chrome") {      //SyntaxError: Invalid shorthand property initializer
//     console.log("I will execute my TC");
// }


let config2 = {
    browser: "chrome",
    timeout: 3000,
    testname: "login test"
};