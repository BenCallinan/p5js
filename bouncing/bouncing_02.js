// Bouncing 2

// state
let circleX = 100;
let circleY = 0;
let xSpeed = 10;
let ySpeed = 10;


function setup() {
    createCanvas(600, 400);
}

function draw() {

    // clear out old frames
    background(0);

    // draw a frame based on state
    stroke(255);
    strokeWeight(4);
    noFill();
    circle(circleX, circleY, 100);

    // modify state
    circleX = circleX + xSpeed;
    circleY = circleY + ySpeed;

    // bounce off left and right
    if(circleX < 0 || circleX > width) {
        xSpeed = xSpeed * -1;
    }

    // bounce off top and bottom
    if(circleY < 0 || circleY > height) {
        ySpeed = ySpeed * -1;
    }

}
