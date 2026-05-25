let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length);  // 5
console.log(browser);   // ['chrome', 'firefox', 'safari', 'opera', 'edge']

browser.pop();  // it removes the last element from the array and returns it.
console.log(browser);  // ['chrome', 'firefox', 'safari', 'opera']

let removed = browser.shift();  // it removes the first element from the array and returns it.
console.log(browser);   // ['firefox', 'safari', 'opera']
console.log(removed);   // chrome


for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]); 
    if (browser[i] === "opera") {
        console.log("Opera is removed from the selenium!");
    }
}