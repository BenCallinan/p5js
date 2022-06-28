// Random 3

let squareSize;
let lineWidth;
let r, g, b, a;
let r1, g1, b1, a1;

function setup() {
    createCanvas(400, 400);
    background(100);

    squareSize = random(400);
    lineWidth = random(400);

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

    rectMode(CENTER);
    strokeWeight(lineWidth);
    stroke(r1, g1, b1, a1);
    fill(r, g, b, a);
    square(200, 200, squareSize);
}
