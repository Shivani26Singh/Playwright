function isPalindrome(str) {
  const reversed = str
    .split("")
    .reverse()
    .join("");

  return str.toLowerCase() === reversed.toLowerCase();
}

console.log(isPalindrome("Madam"));   // true
console.log(isPalindrome("Shivani"));  // false
console.log(isPalindrome("level"));   // true
console.log(isPalindrome("hello"));   // false

//==========================

function isPalindrome(str) {
  str = str.toLowerCase();

  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return str === reversed;
}

console.log(isPalindrome("Madam"));   // true
console.log(isPalindrome("shivani"));  // false