// FizzBuzz

for (let i = 1; i <= 100; i++) {
    // checks if the current number is a multiple of both 3 and 5, then prints "FizzBuzz".
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }   
    // checks if the current number is a multiple of 3, then prints "Fizz". 
    else if (i % 3 === 0) {
        console.log("Fizz");
    }   
    // checks if the current number is a multiple of 5, then prints "Buzz"
    else if (i % 5 === 0) {
        console.log("Buzz");
    }   
    // If the current number is not a multiple of 3 or 5, it prints the number itself.
    else {
        console.log(i);
    }
}   