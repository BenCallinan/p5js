// Bouncing 5

// state
let circleX = 100;
let circleY = 0;
let xSpeed = 10;
let ySpeed = 10;
let r, g, b, a;
let circSize;
let lineSize;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0, 0, 0);

    r = 255;
    g = 255;
    b = 255;
    a = random(255);

    circSize = random(100);

    lineSize = random(10);
}

function draw() {

    // clear out old frames
    //background(0);

    // draw a frame based on state
    stroke(0, 0, 0, a);
    strokeWeight(lineSize);
    fill(r, g, b, a);
    circle(circleX, circleY, circSize);

    // modify state
    circleX = circleX + xSpeed;
    circleY = circleY + ySpeed;

    // bounce off left
    if(circleX < 0 || circleX > width) {
        xSpeed = xSpeed * -1;
        r = random(255);
        g = random(255);
        b = random(255);
        a = random(255);
        circSize = random(100);
        lineSize = random(10);
    }

    // bouce off right
    if(circleX > width) {
        xSpeed = xSpeed * 1;
        r = random(255);
        g = random(255);
        b = random(255);
        a = random(255);
        circSize = random(100);
        lineSize = random(10);
    }

    // bounce off top
    if(circleY < 0 || circleY > height) {
        ySpeed = ySpeed * -1;
        r = random(255);
        g = random(255);
        b = random(255);
        a = random(255);
        circSize = random(100);
        lineSize = random(10);
    }

    // bounce off bottom
    if(circleY > height) {
        ySpeed = ySpeed * 1;
        r = random(255);
        g = random(255);
        b = random(255);
        a = random(255);
        circSize = random(100);
        lineSize = random(10);
    }

}
