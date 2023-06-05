// 18.6: createGraphics() as WebGL Texture - WebGL and p5.js Tutorial

// https://www.youtube.com/watch?v=3tTZlTq4Cxs&list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_&index=6

let angle = 0;
let kitten;
let graphics;

function preload() {
    kitten = loadImage('kitten2.jpg');
}

function setup() {
    createCanvas(400, 300, WEBGL);
    graphics = createGraphics(200, 200);
    graphics.background(255);
}


function draw() {
    background(0);

    //graphics.background(random(255));
    graphics.fill(255, 0, 255);
    graphics.ellipse(mouseX, mouseY, 20);

    ambientLight(100);
    directionalLight(255, 255, 255, 0, 0, -1);

    rotateX(angle);
    rotateY(angle * 1.3);
    rotateZ(angle * 0.7);

    texture(graphics);
    box(100);

    angle += 0.03;
}
