// 18.7: Loading OBJ Model - WebGL and p5.js Tutorial

// https://www.youtube.com/watch?v=FUI7HEEz9B0&list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_&index=7

let angle = 0;

let kitten;
let train;

function preload() {
    kitten = loadImage('kitten2.jpg');
    train = loadModel('toon_train.obj');
}

function setup() {
    createCanvas(400, 300, WEBGL);
}

function draw() {
    background(0);

    camera(-1, 0, (height / 2) / tan(PI / 2.5), -1, 0, 0, 0, 1, 0);

    ambientLight(255);
    directionalLight(255, 255, 255, 0, 0, 1);

    rotateX(angle);
    rotateY(angle * 1.3);
    rotateZ(angle * 0.7);
    //normalMaterial();
    texture(kitten);

    noStroke();
    model(train);
    //box(100);

    angle += 0.01;
}
