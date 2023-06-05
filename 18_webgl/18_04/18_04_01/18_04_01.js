// 18.4: Texture - WebGL and p5.js Tutorial

// https://www.youtube.com/watch?v=O1mYw-3Wl_Q&list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_&index=4

let angle = 0;

let kitten;

function preload() {
    kitten = loadImage('kitten0.jpg')
}

function setup() {
    createCanvas(400, 300, WEBGL);
}

function draw() {
    // let dx = mouseX - width / 2;
    // let dy = mouseY - height / 2;
    // let v = createVector(dx, dy, 0);
    // //v.normalize();
    // v.div(100);

    ambientLight(255);
    //directionalLight(255, 0, 0, v);
    //directionalLight(255, 255, 0, dx, dy, 0);
    //pointLight(255, 0, 0, 200, 0, 0);

    background(175);

    rotateX(angle);
    rotateY(angle * 0.3);
    rotateZ(angle * 1.2);

    noStroke();
    //ambientMaterial(255);
    texture(kitten);
    //torus(100, 25);
    //plane(200, 200);
    box(100);
    //sphere(100);
    //torus(100, 25);

    angle += 0.03;
}
