// Map 2

var r = 255;
var bl = 0;

function setup() {
    createCanvas(600, 400);
}

function draw() {

    //background
    r = map(mouseY, 0, 400, 255, 0);
    background(r, 0, 0);

    //ellipse
    noStroke();
    fill(255, 255, 0);
    ellipse(300, mouseY, 64, 64);
}
