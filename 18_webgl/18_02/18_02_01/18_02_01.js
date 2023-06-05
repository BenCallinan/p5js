// 18.2: 3D Geometries - WebGL and p5.js Tutorial

// https://www.youtube.com/watch?v=6TPVoB4uQCU&list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_&index=2

let angle = 0;

function setup() {
    createCanvas(400, 300, WEBGL);
}

function draw() {
    background(175);

    rectMode(CENTER);
    noStroke();
    fill(0, 0, 255);
    rotateX(angle);
    rotateY(angle * 0.3);
    rect(0, 0, 150, 100);

    angle += 0.07;
}
