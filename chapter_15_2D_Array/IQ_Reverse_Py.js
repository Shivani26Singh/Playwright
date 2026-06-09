// *****
// ****
// ***
// **
// *


for (let i = 5; i >= 1; i--) {
  console.log("*".repeat(i));
}

//-------OR -----

let n = 5;
for (let i = n; i >= 1; i--) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row.trim());
}