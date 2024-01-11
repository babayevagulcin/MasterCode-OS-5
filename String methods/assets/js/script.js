//! Task 1
//? 1.1
// function isString(str) {
//   if (str === str.toString()) {
//     return true;
//   } else {
//     return false;
//   }
// }
//? 1.2
// function isString(str) {
//   if (typeof str === typeof "string") {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isString("w3resource"));
// console.log(isString([1, 2, 4, 0]));

//! Task 2
// function string_to_array(str) {
//   return str.split(" ");
// }

// console.log(string_to_array("Robin Singh"));

//! Task 3
//? 3.
// let strPolindrome = "";
// function isPalindrome(str) {
//   for (let i = str.length - 1; i >= 0; i--) {
//     strPolindrome += str[i];
//   }
//   if (strPolindrome === str) {
//     return true;
//   }
//   return false;
// }
//? 3.2
// function isPalindrome(str) {
//   let strPolindrome = str.split("").reverse().join("");
//   if (strPolindrome === str) {
//     return true;
//   }
//   return false;
// }

// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("apple")); // false

//! Task 4

//! Task 5
// function startsWith(str, a) {
//   if (str.startsWith(a)) {
//     return true;
//   }
//   return false;
// }

// console.log(startsWith("js string exercises", "js"));
// console.log(startsWith("js string exercises", "ks"));
// console.log(startsWith("New York", "New"));

//! Task 6
// function repeat_string(str, n) {
//   if (n) {
//     return str.repeat(n);
//   }
//   return "Error in string or count.";
// }
// console.log(repeat_string("a", 4));
// console.log(repeat_string("a"));

//! Task 7
// function strip(str) {
//   return str.trim();
// }
// console.log(strip(" w3resource"));
// console.log(strip(" w3resource "));

//! Task 8
// function alphabetize_string(str) {
//   return str.split("").sort().join("");
// }
// console.log(alphabetize_string("United States"));
// console.log(alphabetize_string("webmaster"));

//! Task 9
// function endsWith(str, n) {
//   if (str.endsWith(n)) {
//     return true;
//   }
//   return false;
// }
// console.log(endsWith("JS string exercises", "exercises"));
// console.log(endsWith("JS string exercises", "exerci"));
