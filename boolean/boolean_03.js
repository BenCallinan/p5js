// Boolean 3

// Aim: create a shape that moves and changes direction when the mouse is pressed

// Last worked on Friday 7 January 2021, 7:10am

var posX = 0;
var speed = 12;
var leftRight = true;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);

    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(posX, 200, 100);

    if (leftRight) {
        posX = posX + speed;
        if (posX > width) {
            posX = 0;
        }
    } else {
        posX = posX + speed * -1;
        if (posX < 0) {
            posX = width;
        }
    }
}

function mousePressed() {
    if (leftRight) {
        leftRight = !leftRight;
    } else {
        leftRight = true;
    }
}
