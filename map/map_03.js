// Map 3

var r = 255;
var g = 255;
var b = 255;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    r = map(mouseX, 0, 400, 0, 255);
    g = map(mouseY, 0, 400, 255, 0);
    b = map(mouseX, 400, 0, 0, 255);
    a = map(mouseY, 0, 400, 255, 0);
    background(r, g, b);

    noStroke();
    ellipse(mouseX, mouseY, 0);
}
