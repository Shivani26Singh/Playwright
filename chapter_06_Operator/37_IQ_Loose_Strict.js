console.log(0 == "");  // true (loose equality converts "" to 0 before comparing, so they are considered equal)
console.log(0 == "0");  // true (loose equality converts "0" to 0 before comparing, so they are considered equal)
console.log("" == "0");  //  🤯 (transitivity broken!) // false


console.log(0 == false);  // true (loose equality converts false to 0 before comparing, so they are considered equal)
console.log(null == 0);  // false (null is not converted to 0 in loose equality)
console.log(null == undefined);  // true (null and undefined are considered equal in loose equality)
console.log(null === undefined);  // false (null and undefined are not equal in strict equality)