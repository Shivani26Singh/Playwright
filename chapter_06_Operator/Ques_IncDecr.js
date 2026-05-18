let a = 5; 
console.log(a++ + ++a - --a + a-- + ++a);   //5 + 7 - 6 + 6 + 6 = 18
console.log(a);   //6

// a++  // use 5, a=6
// ++a  // a=7, use 7
// --a  // a=6, use 6
// a--  // use 6, a=5
// ++a  // a=6, use 6
// Output- 5 + 7 - 6 + 6 + 6 = 18