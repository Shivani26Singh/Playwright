for (let i = 0; i < 3; i++) {
    if (i === 1) 
        continue;   // skips the current iteration when i is 1, 
                    //and continues with the next iteration of the loop.
    console.log(i);  //output -> 0, 2
}