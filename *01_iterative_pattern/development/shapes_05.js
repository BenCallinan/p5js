// Aim: Modify shapes so each shape goes through the middle

function setup() {
    createCanvas(450, 450);
}

function draw() {
    background(0);

    // Draws the circle
    noFill();
    stroke(255, 0, 0);
    ellipse(60, 60, 100);
    ellipse(390, 170, 100);
    ellipse(170, 280, 100);
    ellipse(280, 390, 100);

    // Draws the line
    stroke(0, 255, 0);
    strokeWeight(5);
    line(230, 60, 330, 60);
    line(120, 170, 220, 170);
    line(340, 280, 440, 280);
    line(10, 390, 110, 390);

    // Draws the square
    stroke(255, 255, 0);
    rectMode(CENTER);
    rect(390, 60, 100, 100);
    rect(60, 170, 100, 100);
    rect(280, 280, 100, 100);
    rect(170, 390, 100, 100);

    // Draws the triangle
    stroke(0, 0, 255);
    triangle(120, 110, 220, 110, 170, 10);
    triangle(230, 220, 330, 220, 280, 120);
    triangle(10, 330, 110, 330, 60, 230);
    triangle(340, 440, 440, 440, 390, 340);
}
