//   *
//  ***
// ***** 
let m=3;
for (let i = 1; i <= m; i++) {
  const spaces = " ".repeat(m - i);
  const stars = "*".repeat(2 * i - 1);
  console.log(spaces + stars);
}

//----OR----

let n = 3;

for (let i = 1; i <= n; i++) {
    let row = "";

    // spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // stars
    for (let j = 1; j <= 2 * i - 1; j++) {
        row += "*";
    }

    console.log(row);
}