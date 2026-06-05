const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const copy = { ...obj1 };
console.log(copy)  //{ a: 1, b: 2 }
 

let config1 = { browser: "Chrome", timeout: 3000 };
// ✅ Modifying properties — ALLOWED
config1.browser = "Firefox";
config1.timeout = 5000;
config1.retries = 2;
console.log(config1);  //{ browser: 'Firefox', timeout: 5000, retries: 2 }

config1 = { browser: "Safari" };
console.log(config1);  //{ browser: 'Safari' }

// print
console.log("---- ")

const config = { browser: "Chrome", timeout: 3000 };
// ✅ Modifying properties — ALLOWED
config.browser = "Firefox";
config.timeout = 5000;
config.retries = 2;
console.log(config);   //{ browser: 'Firefox', timeout: 5000, retries: 2 }

// config = { browser: "Safari", timeout: 3000  };  //TypeError: Assignment to constant variable.
console.log(config);   //{ browser: 'Firefox', timeout: 5000, retries: 2 }