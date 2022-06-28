// Aim: Use the translate, rotate and scale functions to create a model of a
// solar system

let angleA = 0;
let angleB = 0;
let angleB1 = 0;
let angleC = 0;
let angleD = 0;

function setup() {
    createCanvas(2000, 2000);
    angleMode(DEGREES);
}

function draw() {
    background(0);

    translate(1000, 1000);

    push();
    noStroke();
    fill(255, 255, 0);
    ellipse(0, 0, 200);
    pop();

    push();
    rotate(angleA);
    noStroke();
    fill(150);
    ellipse(120, 120, 3);
    angleA = angleA + 3;
    pop();

    push();
    rotate(angleB);
    noStroke();
    fill(0, 102, 51);
    ellipse(-150, -350, 10);
    angleB = angleB + 0.5;

    translate(-150, -350);
    rotate(angleB1);
    noStroke();
    fill(0, 204, 204);
    ellipse(15, 15, 6);
    angleB1 = angleB1 + 5;
    pop();

    push();
    rotate(angleC);
    noStroke();
    fill(191, 60, 24);
    ellipse(-500, -500, 75);

    strokeWeight(1);
    stroke(191, 60, 24);
    noFill();
    ellipse(-500, -500, 10, 150);

    angleC = angleC + 0.1;
    pop();

    push();
    rotate(angleD);
    noStroke();
    fill(0, 51, 102);
    ellipse(650, 650, 45);
    angleD = angleD + 0.075;
    pop();


}
