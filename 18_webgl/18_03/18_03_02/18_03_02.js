// 18.3: Light and Material - WebGL and p5.js Tutorial

// https://www.youtube.com/watch?v=k2FguXvqp60&list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_&index=3

let angle = 0;

function setup() {
    createCanvas(400, 300, WEBGL);
}

function draw() {
    ambientLight(0, 0, 255);

    background(175);

    rotateX(angle);
    rotateY(angle * 0.3);
    rotateZ(angle * 1.2);

    noStroke();
    ambientMaterial(255);
    sphere(100);

    angle += 0.03;
}