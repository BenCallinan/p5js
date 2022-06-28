// 7.2: Arrays and loops - p5.js Tutorial

// https://www.youtube.com/watch?v=RXWO3mFuW-I&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=28

var nums = [100, 25, 46, 72];


function setup() {
    createCanvas(500, 400);
}

function draw() {
    background(0);

    for (var i = 0; i < 4; i++) {
        stroke(255);
        fill(51);
        ellipse(i*100+100, 200, nums[i], nums[i]);
    }
}
