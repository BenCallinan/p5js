// Bouncing 3

// state
let circleX = 100;
let circleY = 0;
let xSpeed = 10;
let ySpeed = 10;
let r, g, b;


function setup() {
    createCanvas(600, 400);
    r = 255;
    g = 255;
    b = 255;
}

function draw() {

    // clear out old frames
    background(0);

    // draw a frame based on state
    fill(r, g, b);
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
