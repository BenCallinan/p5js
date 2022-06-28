// 7.1: What is an array? - p5.js Tutorial

// https://www.youtube.com/watch?v=VIQoUghHSxU&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=27

var nums = [100, 25, 46, 72];

var num = 23;


function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);

    // Using num variable
    ellipse(100, 200, num, num)

    // Using array element nums[2]
    ellipse(200, 200, nums[2], nums[2]);
}
