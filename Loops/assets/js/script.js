//! Task 1
// let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
// let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
// let result = 0;
// let result2 = 0;

// function sum() {
//   for (let i = 0; i < arr_1.length; i++) {
//     result += arr_1[i];
//   }
//   console.log(result);
// }
// sum();

// function sum2() {
//   for (let i = 0; i < arr_2.length; i++) {
//     result2 += arr_2[i];
//   }
//   console.log(result2);
// }
// sum2();
// console.log(result + result2);

//! Task 2
// let n1 = 22;
// function evenNum() {
//   for (let i = 0; i <= n1; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
// }
// evenNum()

//! Task 3
// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// for (let i = arr.length-1; i >= 0; i--) {
//      console.log(arr[i]);
// }
//! Task 4
// let arr_3 = [4, 6, 7];
// let arr_4 = [8, 1, 9];
// let arr = [];
// for (let i = 0; i < arr_3.length; i++) {
//   arr[i] = arr_3[i] + arr_4[i];
// }
// console.log(arr);

//! Task 5
// let str2 = "don’t know why";
// let bool = false;
// for (let i = 0; i < str2.length; i++) {
//   if (str2[i] == "y") {
//     bool = true;
//     break;
//   } else {
//     bool = false;
//   }
// }
// if (bool) {
//   console.log("yes");
// } else {
//   console.log("no");
// }
//! Task 6
// let n2 = 4;
// let sum = 1;
// for (let i = 1; i <= n2; i++) {
//   sum = sum * i;
// }
// console.log(sum);

//! Task 7

// !TASK 8
// for (let i = 0; i <= 45; i++) {
//   if (i % 3 == 0 && i % 5 == 0 && i != 0) {
//     console.log("FizzBuzz", i);
//   } else if (i % 3 == 0 && i != 0) {
//     console.log("Fizz", i);
//   } else if (i % 5 == 0 && i != 0) {
//     console.log("Buzz", i);
//   }
// }
// !TASK 9
// const thisIsAnArray = ["element1", "element2", "element3", "element4"];
// for (let i of thisIsAnArray){
//     console.log(i)
// }
// !TASK 10
for(i=10;i>=-20;i--){
     if(i%2==0 ){
         console.log(i)
     }
 }