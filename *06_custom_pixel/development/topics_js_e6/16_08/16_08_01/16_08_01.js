// 16.8: Array Functions: filter()

// https://www.youtube.com/watch?v=qmnH5MT_luk&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr&index=8

// let vals = [5, 4, 9, 2, 1];
//
// function isEven(num) {
//     return (num % 2 == 0)
// }
//
// vals = vals.filter(isEven);
// console.log(vals);

// Arrow function version
// let vals = [5, 4, 9, 2, 1];
//
// vals = vals.filter(x => x % 2 == 0);
// console.log(vals);

// Filter false and true
// let vals = [5, 4, undefined, 2, 1];
//
// vals = vals.filter(x => x);
// console.log(vals);

// Example
// let vals = [5, 4, 4, 2, 1];
//
// vals = vals.filter(x => !(x % 2));
// console.log(vals);

// Example
let s = "It was a dark and stormy night."
let words = s.split(/\W+/).filter(word => word.length);
console.log(words);
