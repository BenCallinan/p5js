// 18.5: Camera and Perspective - WebGL and p5.js Tutorial

// https://www.youtube.com/watch?v=BW3D9WwalQE&list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_&index=6

let angle = 0;

function setup() {
    createCanvas(400, 300, WEBGL);
}


function draw() {
    background(0);

    //translate(0, 0, mouseX);

    let camX = map(mouseX, 0, width, -200, 200);
    camera(camX, 0, (height / 2) / tan(PI / 6), camX, 0, 0, 0, 1, 0);

    ambientLight(255);

    push();
    rotateX(angle);
    rotateY(angle * 0.3);
    rotateZ(angle * 1.2);

    noStroke();
    normalMaterial();
    box(100);
    pop();

    translate(0, 100);
    rotateX(HALF_PI);
    noStroke();
    normalMaterial();
    fill(100);
    plane(500, 500);

    angle += 0.01;
}
