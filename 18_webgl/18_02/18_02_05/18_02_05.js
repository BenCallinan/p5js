// 18.2: 3D Geometries - WebGL and p5.js Tutorial

// https://www.youtube.com/watch?v=6TPVoB4uQCU&list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_&index=2

// Aim: Create all 3D Primitives at https://p5js.org/reference/

let angle = 0;

function setup() {
    createCanvas(800, 400, WEBGL);
}

function draw() {
    background(175);

    rectMode(CENTER);
    stroke(1);
    fill(0, 0, 255);

    translate(-250, -100);
    push();
    rotateX(angle * 0.3);
    rotateY(angle * 0.3);
    rotateZ(angle * 0.3);
    plane(100, 100);
    pop();

    translate(250, 10);
    push();
    rotateX(angle * 0.3);
    rotateY(angle * 0.3);
    rotateZ(angle * 0.3);
    box(100, 100);
    pop();

    translate(250, 10);
    push();
    rotateX(angle * 0.3);
    rotateY(angle * 0.3);
    rotateZ(angle * 0.3);
    sphere(75, 75);
    pop();

    translate(-500, 175);
    push();
    rotateX(angle * 0.3);
    rotateY(angle * 0.3);
    rotateZ(angle * 0.3);
    cone(75, 75);
    pop();

    translate(250, 0);
    push();
    rotateX(angle * 0.3);
    rotateY(angle * 0.3);
    rotateZ(angle * 0.3);
    ellipsoid(75, 75);
    pop();

    translate(250, 0);
    push();
    rotateX(angle * 0.3);
    rotateY(angle * 0.3);
    rotateZ(angle * 0.3);
    torus(80, 20);
    pop();

    angle += 0.03;
}
