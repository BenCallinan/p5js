// 2.3 Incrementation Operators - p5.js Tutorial
// Code! Programming with p5.js

// https://www.youtube.com/watch?v=T26OJGjI8qI&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=10

let circleX = 0;

function setup() {
    createCanvas(400, 300);
}

function mousePressed() {
    circleX = 0;
}

function draw() {
    background(0);
    noStroke();
    fill(255);
    circle(circleX, 150, 64);

    circleX += 25;
}
