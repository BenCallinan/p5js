// 2.5 The map() Function - p5.js Tutorial

// https://www.youtube.com/watch?v=nicMAoW6u1g&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=12

var r = 0;
var b = 255;

function setup() {
    createCanvas(600, 400);
}

function draw() {

    //background
    r = map(mouseX, 0, 600, 0, 255);
    b = map(mouseX, 0, 600, 255, 0);
    background(r, 0, b);

    //ellipse
    fill(250, 118, 222);
    ellipse(mouseX, 200, 64, 64);
}
