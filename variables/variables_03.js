// Exploding star

function setup() {
    createCanvas(400, 400);
    background(0);
}

function draw() {

    noStroke();
    fill(255, 255, 100, 10);
    triangle(mouseX, mouseY, 208, 150, 186, 175);
}

function mousePressed() {
    background(0);
}
