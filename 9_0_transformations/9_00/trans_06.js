// 9.3: Transformations Pt. 3 - p5.js Tutorial

// https://www.youtube.com/watch?v=IVMvq9rd8dA&list=PLRqwX-V7Uu6ZmA-d3D0iFIvgrB5_7kB8H&index=3


let angle = 0;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    //rectMode(CENTER);
}

function draw() {
    background(0);
    push();
    translate(200, 200);
    scale(1, -1);
    rotate(angle);
    stroke(255);
    fill(100);
    rect(0, 0, 100, 50);
    pop();

    ellipse(300, 300, 60, 60);

    angle = angle + 2;
}
