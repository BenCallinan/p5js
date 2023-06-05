// 16.5: Higher Order Functions in JavaScript

// https://www.youtube.com/watch?v=H4awPsyugS0&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr&index=5

// Method 1
// function multiplier(factor) {
//     return function(x) {
//         return x * factor;
//     }
// }

// Method 2
function multiplier(factor) {
    return x => x * factor;
}

let doubler = multiplier(2);
let tripler = multiplier(3);
