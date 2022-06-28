// Cond 2

// Aim: change shape (rectangle, ellipse, triangle) according to where the mouse is

let r1, g1, b1;
let r2, g2, b2;
let r3, g3, b3;

function setup() {
    createCanvas(600, 400);

    r1 = random(255);
    g1 = random(255);
    b1 = random(255);

    r2 = random(255);
    g2 = random(255);
    b2 = random(255);

    r3 = random(255);
    g3 = random(255);
    b3 = random(255);
}

function draw() {
    background(0);

    // ellipse
    if (mouseX > 300) {
        stroke(255);
        fill(r1, g1, b1);
        ellipse(300, 200, 100, 100);
    }

    // rectangle
    if (mouseX > 0) {
        stroke(255);
        fill(r2, g2, b2);
        rect(50, 150, 100, 100);
    }

    // triangle
    if (mouseX > 400) {
        stroke(255);
        fill(r3, g3, b3);
        triangle(500, 150, 450, 250, 550, 250);
    }
}
