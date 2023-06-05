// 18.7: Loading OBJ Model - WebGL and p5.js Tutorial

// https://www.youtube.com/watch?v=FUI7HEEz9B0&list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_&index=7

let trainX = 0;
let trainY = 0;
let xSpeed = 1;
let ySpeed = 1;

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

    camera(-1, 0, (height / 2) / tan(PI / 3), -1, 0, 0, 0, 1, 0);

    ambientLight(255);
    directionalLight(255, 255, 255, 0, 0, 1);

    rotateX(100);
    rotateY(99);
    rotateZ(600);

    translate(trainX, 0);

    trainX = trainX + xSpeed;
    trainY = trainY + ySpeed;

    if (trainX < 0 || trainX > width) {
        xSpeed = xSpeed * -1;
    }

    // if (trainY < 0 || trainY > height) {
    //     ySpeed = ySpeed * -1;
    // }

    texture(kitten);

    noStroke();
    model(train);
    //box(100);

    //angle += 0.01;
}
