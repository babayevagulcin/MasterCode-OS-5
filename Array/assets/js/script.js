//! Task 1
//? 1.1
// let cloneArray = [];
// function array_Clone(arr) {
//      return (cloneArray = [...arr]);
// }
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

//* 1.2
// function array_Clone(...args) {
//   return args.flat(1);
// }
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

// ! Task 2
// let n = prompt("Reqem daxil edin.");
// function firstElemArr(arr) {
//   for (let i = 0; i < n; i++) {
//     if (n < arr.length) {
//       console.log(arr[i]);
//     }else{
//      alert("Error")
//     }
//   }
// }
// firstElemArr([7, 9, 0, 2]);

// ! Task 3
// let array = ["Red", "Green", "White", "Black"];
// function joinArr(arr) {
//   return arr;
// }
// console.log(joinArr(array.join(",")));
// console.log(joinArr(array.join("+")));

// ! Task 4
// let arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// function repeatElemArr() {

// }
// repeatElemArr();

// ! Task 5
// let sum = 0;
// let product = 1;
// function sumArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// function productArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     product *= arr[i];
//   }
//   return product;
// }
// console.log(sumArr([1, 2, 3, 4, 5, 6]));
// console.log(productArr([1, 2, 3, 4, 5, 6]));

// ! Task 6
// ! Task 7
// let arrayPush = [];
// let result;
// function remove_array_element(arr, n) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== n) {
//       arrayPush.push(arr[i]);
//     }
//   }
//   return arrayPush;
// }
// console.log(remove_array_element([25, 14, 56, 15, 36], 25));

// ! Task 8
// function last(arr, n) {
//   return arr.splice(-n, arr.length);
// }
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],1));

// ! Task 9
let str = "";
let result;
function swappingArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      result = str += arr[i].toLowerCase();
    } else if (arr[i] === arr[i].toLowerCase()) {
      result = str += arr[i].toUpperCase();
    }
  }
  return result;
}
console.log(swappingArr("Phyton"));
