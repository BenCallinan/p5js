// 18.3: Light and Material - WebGL and p5.js Tutorial

// https://www.youtube.com/watch?v=k2FguXvqp60&list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_&index=3

let angle = 0;

function setup() {
    createCanvas(400, 300, WEBGL);
}

function draw() {
    let dx = mouseX - width / 2;
    let dy = mouseY - height / 2;
    let v = createVector(dx, dy, 0);
    //v.normalize();
    v.div(100);

    ambientLight(0, 0, 255);
    directionalLight(255, 0, 0, v);
    //directionalLight(255, 255, 0, dx, dy, 0);
    //pointLight(255, 0, 0, 200, 0, 0);

    background(175);

    rotateX(angle);
    rotateY(angle * 0.3);
    rotateZ(angle * 1.2);

    noStroke();
    ambientMaterial(255);
    torus(100, 25);

    angle += 0.03;
}
