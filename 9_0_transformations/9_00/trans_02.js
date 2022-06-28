// 9.1: Transformations Pt. 1 (Translate, Rotate, Push/Pop) - p5.js Tutorial

// https://www.youtube.com/watch?v=o9sgjuh-CBM&list=PLRqwX-V7Uu6ZmA-d3D0iFIvgrB5_7kB8H

// Last worked on Wednesday 20 April 2022, 7:57pm, 16 mins 30 secs

let angle = 0;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    rectMode(CENTER);
}

function draw() {
    background(0);

    push();
    translate(50, 50);
    rotate(angle);
    fill(255, 100, 50);
    rect(0, 0, 100, 50);
    pop();

    translate(300, 300);
    rotate(-angle * 3);
    fill(50, 100, 255);
    rect(0, 0, 100, 50);

    angle = angle + 5;
}
