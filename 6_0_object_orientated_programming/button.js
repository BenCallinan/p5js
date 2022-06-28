// Aim: Create a button that changes colour when pressed

let on = false;

function setup() {
    createCanvas(500, 500)
}

function draw() {
    background(0);

    stroke(255);
    strokeWeight(4);
    if (on === true) {
        fill(255, 0, 0);
    } else {
        fill(0);
    }
    rectMode(CENTER);
    rect(250, 250, 100, 100);
}

function mousePressed() {
    if (on === false) {
        on = true;
    } else {
        on = false;
    }
}
