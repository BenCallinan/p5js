// 5.2 Function Parameters and Arguments - p5.js Tutorial

// https://www.youtube.com/watch?v=zkc417YapfE&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=21

// Last worked on Thursday 13 January 2021, 7:10am

// Video: 7 mins, 30 seconds

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(50);
    lollipop(100, 100, 50);
    lollipop(300, 200, 150);
}

function lollipop(x, y, diameter) {
    fill(0, 200, 255);
    rect(x-10, y, 20, 150);

    fill(255, 0, 200);
    ellipse(x, y, diameter, diameter);
}
