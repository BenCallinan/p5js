// 9.2: Transformations Pt. 2 (Scale) - p5.js Tutorial

// https://www.youtube.com/watch?v=pkHZTWOoTLM&list=PLRqwX-V7Uu6ZmA-d3D0iFIvgrB5_7kB8H&index=2


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

    angle = angle + 2;
}
