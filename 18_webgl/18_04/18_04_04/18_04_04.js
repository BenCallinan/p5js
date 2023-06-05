// 18.4: Texture - WebGL and p5.js Tutorial

// https://www.youtube.com/watch?v=O1mYw-3Wl_Q&list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_&index=4

// Aim: Explore the relationships between light and textures

let fire;
let water;
let stars;

let angle = 0;

function preload() {
    fire = loadImage('texture_5.jpg');
    water = loadImage('texture_3.jpg');
   stars = loadImage('stars_3.jpg');
}

function setup() {
    createCanvas(800, 400, WEBGL);
}

function draw() {
    let dx = mouseX - width / 2;
    let dy = mouseY - height / 2;

    pointLight(255, 255, 255, dx, dy, 200);

    background(0);

    image(stars, -400, -200);

    push();
    rotateX(angle);
    rotateY(angle * 0.3);
    rotateZ(angle * 1.2);

    angle += 0.01;

    noStroke();
    texture(fire);
    sphere(100);
    pop();

    translate(0, 110);
    rotateX(HALF_PI);
    noStroke();
    texture(water);
    plane(400, 400);
}
