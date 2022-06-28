// Random 4

let lineWidth;
let triLine;
let circLine;
let r, g, b, a;
let r1, g1, b1, a1;
let r2, g2, b2, a2;
let r3, g3, b3, a3;
let r4, g4, b4, a4;
let r5, g5, b5, a5;

function setup() {
    createCanvas(800, 400);
    background(0);

    lineWidth = random(20);
    triLine = random(20);
    circLine = random(20);

}

function draw() {

    r = random(255);
    g = random(255);
    b = random(255);
    a = random(255);

    r1 = random(255);
    g1 = random(255);
    b1 = random(255);
    a1 = random(255);

    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
    a2 = random(255);

    r3 = random(255);
    g3 = random(255);
    b3 = random(255);
    a3 = random(255);

    r4 = random(255);
    g4 = random(255);
    b4 = random(255);
    a4 = random(255);

    r5 = random(255);
    g5 = random(255);
    b5 = random(255);
    a5 = random(255);

    // Rectangle
    rectMode(CENTER);
    strokeWeight(lineWidth);
    stroke(r1, g1, b1, a1);
    fill(r, g, b, a);
    square(400, 200, 200);

    // Triangle
    strokeWeight(triLine);
    stroke(r2, g2, b2, a2);
    fill(r3, g3, b3, a3);
    triangle(50, 300, 250, 300, 150, 100);

    // Square
    strokeWeight(circLine);
    stroke(r4, g4, b4, a4);
    fill(r5, g5, b5, a5);
    circle(650, 200, 200);
}
