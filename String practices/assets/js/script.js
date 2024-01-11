// !String (metodlardan istifadeye icaze var)
//? 5.
/*
 * Funksiya 1 eded string qebul etmeli ve verilen cumledeki sozlerden (reqemler arraya elave olunmamalidir) ibaret array qaytarmalidir
 */
//? 6.
/*
 * Funksiya 1 eded string qebul etmeli ve verilen metnde en cox istifade olunan sozu qaytarmalidir
 */

//! Array basic (metod istifadəsi olmadan)
/* 1.
 * verilmiş ixtiyari n ədədli massivdə max elementi təyin edən funksiya yazın
 */
// let max = [];
// function maxNum(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return max;
// }
// console.log(maxNum([3, 6, 1, 8, 20, 9]));

/* 2.
 * verilmiş ixtiyari n ədədli massivdə min elementi təyin edən funksiya yazın
 */
// let min;
// function minNum(arr) {
//   min = arr[0];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }

//   return min;
// }
// console.log(minNum([3, 6, 5, 2, 8, 20, 9]));

/* 4.
 * verilmiş ixtiyari n ədədli massivi maksimumdan minimuma doğru sıralayan funksiya yazın
 */
let max;
function maxElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        console.log(arr[i]);
      }
    }
  }
//   return arr;
}
// console.log(maxElement([3, 6, 5, 2, 8, 20, 9]));
maxElement([3, 6, 5, 2, 8, 20, 9])

/* 5.
 * verilmiş ixtiyari n ədədli massivi minimumdan maksimuma doğru sıralayan funksiya yazın
 */
