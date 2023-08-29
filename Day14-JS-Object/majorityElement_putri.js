// /**
//  * write a function that returns the majority element.
//  * The majority element is the element that appears more than other element.
//  * READ EXAMPLE BELOW!

// console.log(majorityElement([3, 2, 3])); // Output: 3
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2

//  * You may assume that the majority element always exists in the array.

//  * Returns the majority element from the input array of integers.

//  * @param {number[]} nums - The input array of integers.
//  * @return {number} Returns the majority element.
//  */
// function majorityElement(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let n = i + 1; n < nums.length; n++) {
//       console.log(i, n);
//       // Kondisi apabila nilai dan type data sama
//       if (nums[i] === nums[n]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(majorityElement([3, 2, 3])); // Output: 3
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2

// function count() {
//     array_elements = [];

//     array_elements.sort();

//     var current = null;
//     var cnt = 0;
//     for (var i = 0; i < array_elements.length; i++) {
//         if (array_elements[i] != current) {
//             if (cnt > 0) {
//                 console.log(current + ' comes --> ' + cnt + ' times<br>');
//             }
//             current = array_elements[i];
//             cnt = 1;
//         } else {
//             cnt++;
//         }
//     }
//     if (cnt > 0) {
//         console.log(current + ' comes --> ' + cnt + ' times');
//     }

// }

function majorityElement(nums) {
  let kondisi = 0;
  for (let i = 0; i < nums.length; i++) {
    if (kondisi === 0) {
      elemen = nums[i];
      kondisi = 1;
    } else if (nums[i] === elemen) {
      kondisi++;
    } else {
      kondisi--;
    }
  }
  return elemen;
}

console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
