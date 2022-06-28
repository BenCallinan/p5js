// Aim: Create a pattern with a circle, line, square and triangle

function setup() {
    createCanvas(450, 450);
}

function draw() {
    background(0);

    // Draws the circle
    noFill();
    ellipse(60, 60, 100);
    ellipse(170, 170, 100);
    ellipse(280, 280, 100);
    ellipse(390, 390, 100);

    // Draws the line
    stroke(255);
    strokeWeight(5);
    line(120, 60, 220, 60);
    line(230, 170, 330, 170);
    line(340, 280, 440, 280);
    line(10, 390, 110, 390);

    // Draws the square
    rectMode(CENTER);
    rect(280, 60, 100, 100);
    rect(390, 170, 100, 100);
    rect(60, 280, 100, 100);
    rect(170, 390, 100, 100);

    // Draws the triangle
    triangle(10, 220, 110, 220, 60, 120);
    triangle(120, 330, 220, 330, 170, 230);
    triangle(230, 440, 330, 440, 280, 340);
    triangle(340, 110, 390, 10, 440, 110);
}
