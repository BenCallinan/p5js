// 16.7: Array Functions: reduce()

// https://www.youtube.com/watch?v=-LFjnY1PEDA&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr&index=7

// Without using reduce()

// Example 1
// let vals = [5, 4, 1, 2, 9]
// let sum = 0;
//
// for (let i = 0; i < vals.length; i++) {
//     sum += vals[i];
// }
//
// console.log(sum);

// Example 2
// let vals = [5, 4, 1, 2, 9]
// let sum = 0;
//
// for (let val of vals) {
//     sum += val;
// }
//
// console.log(sum);

// Using reduce()

// Example 1
// let vals = [5, 4, 1, 2, 9];
//
// // acc = accumulator
// // val = value
//
// function sum(acc, val) {
//     console.log(acc);
//     return acc + val;
// }
//
// let answer = vals.reduce(sum, 10);
// console.log(answer);

// Example 2
// let vals = [5, 4, 1, 2, 9];
//
// // acc = accumulator
// // val = value
//
// let sum = vals.reduce((acc, val) => acc + val);
// console.log(sum);

// Example 3 - Find min and max using reduce
let vals = [5, 1, 9, 2, 4];

let biggest = vals.reduce((a, b) => b > a ? b : a);
console.log(biggest);

let smallest = vals.reduce((a, b) => b < a ? b : a);
console.log(smallest);
