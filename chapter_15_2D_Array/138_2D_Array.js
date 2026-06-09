let a = [1, 2, 3, 3];

let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// 1 -> 0,0

// Print all the elements
for (let i = 0; i < 3; i++) { //  i = 0,1,2
    for (let j = 0; j < 3; j++) {
        console.log(grid[i][j]);
    }
    console.log("\n");
}

/* Output -
1
2
3


4
5
6


7
8
9
*/