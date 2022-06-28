// Bouncing 4

// state
let circleX = 100;
let circleY = 0;
let xSpeed = 10;
let ySpeed = 10;
let r, g, b, a;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0, 0, 0);

    r = 0;
    g = 255;
    b = 0;
    a = 200;
}

function draw() {

    // clear out old frames
    //background(0);

    // draw a frame based on state
    stroke(0, 0, 0, a);
    strokeWeight(10);
    fill(r, g, b, a);
    circle(circleX, circleY, 100);

    // modify state
    circleX = circleX + xSpeed;
    circleY = circleY + ySpeed;

    // bounce off left
    if(circleX < 0 || circleX > width) {
        xSpeed = xSpeed * -1;
        r = 0;
        g = 0;
        b = 255;
    }

    // bouce off right
    if(circleX > width) {
        xSpeed = xSpeed * 1;
        r = 255;
        g = 0;
        b = 0;
    }

    // bounce off top
    if(circleY < 0 || circleY > height) {
        ySpeed = ySpeed * -1;
        r = 0;
        g = 255;
        b = 0;
    }

    // bounce off bottom
    if(circleY > height) {
        ySpeed = ySpeed * 1;
        r = 255;
        g = 255;
        b = 0;
    }

}
