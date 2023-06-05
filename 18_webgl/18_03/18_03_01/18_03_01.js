// 18.3: Light and Material - WebGL and p5.js Tutorial

// https://www.youtube.com/watch?v=k2FguXvqp60&list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_&index=3

let angle = 0;

function setup() {
    createCanvas(400, 300, WEBGL);
}

function draw() {
    background(175);

    rotateX(angle);
    rotateY(angle * 0.3);
    rotateZ(angle * 1.2);

    fill(200, 0, 255);
    normalMaterial();
    torus(100, 10);

    angle += 0.03;
}
