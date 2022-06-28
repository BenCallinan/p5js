// Aim: Create a circle, square, triangle and a line

function setup() {
    createCanvas(450, 120);
}

function draw() {
    background(0);

    // Draws the circle
    ellipse(60, 60, 100);

    // Draws the line
    stroke(255);
    strokeWeight(5);
    line(120, 60, 220, 60);

    // Draws the square
    rectMode(CENTER);
    rect(280, 60, 100, 100);

    // Draws the triangle
    triangle(340, 110, 390, 10, 440, 110);
}
