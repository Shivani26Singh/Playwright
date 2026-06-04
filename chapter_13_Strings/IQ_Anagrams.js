//Anagram - Two strings are called anagrams if they contain the same characters with the same frequency, but possibly in a different order.

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  const sorted1 = str1.split("").sort().join(""); 
  const sorted2 = str2.split("").sort().join("");

  return sorted1 === sorted2;
}

console.log(isAnagram("Eat", "Tea"));     // true
console.log(isAnagram("Stop", "Spot"));   // true
console.log(isAnagram("God", "Dog"));     // true
console.log(isAnagram("Shivani", "Play")); // false