// 2.2: Variables in p5.js (Define Your Own) - p5.js Tutorial
// Code! Programming with p5.js

// https://www.youtube.com/watch?v=dRhXIIFp-ys&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=9

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

    circleX = circleX + 20;
}
