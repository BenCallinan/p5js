// Boolean 4

// Aim: Create a button that changes colour when pressed

let r = 255;
let g = 0;
let b = 0;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);

    stroke(255);
    strokeWeight(4);
    fill(r, g, b);
    if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
        fill(0, 255, 0);
    }
    rectMode(CENTER);
    rect(300, 200, 100, 100);
}

function mousePressed() {
    if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
        r = 0;
        g = 0;
        b = 255;
    }
}
