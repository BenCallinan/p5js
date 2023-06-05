// 9.17: Arguments Array in JavaScript

// https://www.youtube.com/watch?v=4Sw6OUXjHsk&list=PLRqwX-V7Uu6ZmA-d3D0iFIvgrB5_7kB8H&index=17

function setup() {
    createCanvas(200, 200);

    let val = sum(5, 15);
    console.log(val);
}

function draw() {
    background(0);
}

function sum(arr) {
    if (arr instanceof Array) {
        let val = 0;
        for (let i = 0; i < arr.length; i++) {
            val += arr[i];
        }
        return val;
    }

    let val = 0;
    for (let i = 0; i < arguments.length; i++) {
        val += arguments[i];
    }
    return val;
}
