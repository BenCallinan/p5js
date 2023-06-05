// 16.6: Array Functions: map() and fill()

// https://www.youtube.com/watch?v=EnYlhbpzhU4&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr&index=6

// Example 1 map()
// let vals = [4, 8, 1, 2, 9];
// console.log(vals);
//
// function doubler(x) {
//     return x * 2;
// }
//
// vals = vals.map(doubler);
// console.log(vals);

// Example 2 map() (arrow function)
// let vals = [4, 8, 1, 2, 9];
// console.log(vals);
//
// vals = vals.map(x => x * 2);
// console.log(vals);

// Example 3 fill()
// let vals = [4, 8, 1, 2, 9];
// //vals.fill(Math.random());
// vals = vals.map(x => Math.random());
// console.log(vals);

// Example 4
// let vals = new Array(100);
// vals = vals.fill(0).map(Math.random);
// console.log(vals);

// Example 5
let vals = Array(100).fill().map(Math.random);
console.log(vals);
