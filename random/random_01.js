// 2.4: random() Function - p5.js Tutorial

// https://www.youtube.com/watch?v=POn4cZ0jL-o&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=11

let squareSize;
let lineWidth;

function setup() {
    createCanvas(400, 300);
    background(100);
}

function draw() {
    squareSize = random(5, 255);
    lineWidth = random(4, 28);

    rectMode(CENTER);
    strokeWeight(lineWidth);
    stroke(0, 0, 255, 10);
    fill(0, 255, 0, 10);
    square(200, 150, squareSize);
}
