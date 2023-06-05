// 18.8: 3D Custom Shapes - WebGL and p5.js Tutorial

// https://www.youtube.com/watch?v=DZlw-IS5OkI&list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_&index=8

let angle = 0;
let kitten;

function preload() {
    kitten = loadImage('kitten2.jpg');
}

function setup() {
    createCanvas(400, 300, WEBGL);
}

function draw() {
    background(0);

    ambientLight(255);

    rotateX(angle);
    rotateY(angle * 1.3);
    rotateZ(angle * 0.7);

    //normalMaterial();
    // texture(kitten);
    // box(100);

    texture(kitten);
    translate(-50, -50);

    // u, v values need to be dimensions of image
    beginShape();
    vertex(0, 0, 0, 0, 0);
    vertex(100, 0, 0, 173, 0);
    vertex(100, 100, 0, 173, 180);
    vertex(0, 100, 0, 0, 180);
    endShape(CLOSE);

    angle += 0.01;
}
