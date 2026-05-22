for (let shivani = 0; shivani > 1; shivani++) {
    console.log(shivani);  // This loop will not execute because the condition shivani > 1 is false at the start (shivani is initialized to 0).
}

//// This loop will execute indefinitely because there is no condition to stop it. It will keep incrementing shivani and printing its value.
for (let shivani = 0; ; shivani++) {
    console.log(shivani); 
}

for (let i = 0; i < 18; i++) {
    if (i > 15) {
        console.log("Gift from dad, iphone this year")
    } else {
        console.log("No Gift,only barbie doll")
    }
}
/*
output: 
No Gift,only barbie doll
No Gift,only barbie doll
No Gift,only barbie doll
No Gift,only barbie doll
No Gift,only barbie doll
No Gift,only barbie doll
No Gift,only barbie doll
No Gift,only barbie doll
No Gift,only barbie doll
No Gift,only barbie doll
No Gift,only barbie doll
No Gift,only barbie doll
No Gift,only barbie doll
No Gift,only barbie doll
No Gift,only barbie doll
Gift from dad, iphone this year
Gift from dad, iphone this year
*/