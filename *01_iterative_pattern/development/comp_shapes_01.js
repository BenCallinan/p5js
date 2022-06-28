// Complex Shapes

// Create one version of each of the complex shapes

function setup() {
    createCanvas(450, 120);
}

function draw() {
    background(0);

    stroke(255);
    strokeWeight(5);
    noFill();

    rectMode(CENTER);

    // Complex 1
    ellipse(60, 60, 100);
    triangle(25, 90, 95, 90, 60, 15);

    // Complex 2
    rect(170, 60, 100, 100);
    line(125, 60, 215, 60);

    // Complex 3
    ellipse(280, 60, 100);
    line(235, 60, 325, 60);

    // Complex 4
    rect(390, 60, 100, 100);
    triangle(345, 90, 435, 90, 390, 15);
}
