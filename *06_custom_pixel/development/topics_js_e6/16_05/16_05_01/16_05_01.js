// 16.5: Higher Order Functions in JavaScript

// https://www.youtube.com/watch?v=H4awPsyugS0&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr&index=5

function sing(callback) {
    console.log('la la la la');
    if (callback instanceof Function) {
        callback();
    }
}

function meow() {
    console.log('meow meow');
}

function setup() {

    sing(function() {console.log('meow meow');});
}
