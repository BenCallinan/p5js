// 3.1: Introduction to Conditional Statements - p5.js Tutorial

// https://www.youtube.com/watch?v=1Osb_iGDdjk&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=14

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);

    stroke(255);
    strokeWeight(4);
    noFill();

    if (mouseX > 300) {
        fill(255, 0, 200);
    }
    
    ellipse(300, 200, 100, 100);
}
