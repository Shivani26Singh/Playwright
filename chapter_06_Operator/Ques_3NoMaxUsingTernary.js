let num1 = 10;
let num2 = 20;
let num3 = 30;
let result = (num1 > num2)
  ? ((num1 > num3) ? "num1 is greatest" : "num3 is greatest")
  : ((num2 > num3) ? "num2 is greatest" : "num3 is greatest");
console.log(result); // Output: "num3 is greatest"
