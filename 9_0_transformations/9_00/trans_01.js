// 9.1: Transformations Pt. 1 (Translate, Rotate, Push/Pop) - p5.js Tutorial

// https://www.youtube.com/watch?v=o9sgjuh-CBM&list=PLRqwX-V7Uu6ZmA-d3D0iFIvgrB5_7kB8H

let angle = 0;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    background(0);

    translate(200, 200);
    rotate(angle);

    stroke(255);
    line(0, 0, 50, 50);
    fill(255);
    rect(50, 50, 100, 50);

    angle = angle + 1;
}
