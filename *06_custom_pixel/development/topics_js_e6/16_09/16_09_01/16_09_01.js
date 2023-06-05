// 16.9: Array Functions: sort()

// https://www.youtube.com/watch?v=MWD-iKzR2c8&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr&index=9

// Example 1
// let vals = [5, 4, 9, 2, 1];
// console.log(vals);
// vals.sort();
// console.log(vals);


// Example 2
// let vals = ["a","hello","b","goodbye"];
// console.log(vals);
// vals.sort();
// console.log(vals);

// Example 3
// let vals = [{x:5,y:6},{x:2,y:10}];
// console.log(vals);
// vals.sort();
// console.log(vals);

// Example 4 - sort by y values
// let vals = [{x:2,y:10},{x:5,y:6}];
//
// function compare(a, b) {
//     return b.y - a.y;
// }
//
// console.log(vals);
// vals.sort(compare);
// console.log(vals);

// Example 5
let s = "It was a dark and stormy night."
let words = s.split(/\W+/).filter(word => word.length > 2);
words.sort((a,b) => a.length - b.length);
console.log(words);
