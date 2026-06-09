let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

// How many test cases have we executed? 
// How many test cases are passed? 
// What is the status code that you have got for the fail? 

for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[i].length; j++) {
        console.log(testMatrix[i][j]);
    }
    console.log();  
/*output- 
login
pass
200

checkout
fail
404

search
pass
180 */
}

for (let row of testMatrix) {
    for (let cell of row) {
        process.stdout.write(cell + " ")
    }
    console.log(); 
    /*Output 
    login pass 200 
    checkout fail 404 
    search pass 180 
    */
}

// forEach
testMatrix.forEach(row => {
    row.forEach(
        cell => process.stdout.write(cell + " ")
    );
    console.log();
    /*Output 
    login pass 200 
    checkout fail 404 
    search pass 180 
    */
});