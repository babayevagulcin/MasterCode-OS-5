//! Task 1
// const side1 = 5;
// const side2 = 6;
// const side3 = 7;
// let p = (side1 + side2 + side3) / 2;

// function theAreaTriangle() {
//   let s = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
//   return s;
// }
// console.log(theAreaTriangle());

//! Task 2
// function decimals(num, m) {
//   return num.toFixed(m);
// }
// console.log(decimals(2.100212, 2));
// console.log(decimals(2.100212, 3));

//! Task 3
// function maxNum(arr) {
//   return Math.max(...arr);
// }
// console.log(maxNum([12, 34, 56, 1]));
// console.log(maxNum([-12, -34, 0, -56, -1]));

//! Task 4
// function isNumeric(a) {
//   if (typeof a === typeof Number()) {
//     return a;
//   }
//   return "Reqem deyil";
// }
// console.log(isNumeric(12));
// console.log(isNumeric("abcd"));

//! Task 5
// function pythagoreanTheorem(a, b) {
//   let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
//   return c;
// }
// console.log(pythagoreanTheorem(2, 4));
// console.log(pythagoreanTheorem(3, 4));

//! Task 6
// function isPowerOfTen(num) {
//   if (Math.log10(num) % 1 === 0) {
//     return true;
//   }
//   return false;
// }
// console.log(isPowerOfTen(1));
// console.log(isPowerOfTen(10));
// console.log(isPowerOfTen(30));
// console.log(isPowerOfTen(100));
// console.log(isPowerOfTen(90));

//! Task 7

// function middleCharacters(str) {
//   if (str.length % 2 != 0) {
//     let a = (str.length - 1) / 2; //1
//     return str.slice(a, a + 1);
//   } else {
//     let b = str.length / 2 - 1;
//     return str.slice(b, b + 2);
//   }
// }
// console.log(middleCharacters("abcd"));
// console.log(middleCharacters("abc"));
// console.log(middleCharacters("JavaScript"));

//! Task 8
