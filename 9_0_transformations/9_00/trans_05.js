// Aim: Create a 2D map that you can zoom and pan around in using the
// scale function

let angle = 0;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    rectMode(CENTER);
}

function draw() {
    background(224, 224, 204);

    push();

    translate(100, 100);

    if (mouseIsPressed) {
        translate(mouseX, mouseY);
        scale(mouseX / 75);
        rotate(mouseY);
    }

    noStroke();
    fill(192);
    rect(0, 0, 100, 50);

    noStroke();
    fill(192);
    rect(100, 100, 100, 50);

    noStroke();
    fill(153, 204, 255);
    ellipse(200, 0, 100);

    noStroke();
    fill(153, 255, 153);
    rect(0, 210, 100, 150);

    pop();

        angle = angle + 1;
}
