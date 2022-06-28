// Aim: Create a canvas that changes background colour when mouse is pressed

var r = [0, 50, 100, 150, 200, 255];
var g = [255, 200, 150, 100, 50, 0];
var b = [150, 100, 50, 0, 255, 200];

var index = 0;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(r[index], g[index], b[index]);
}

function mousePressed() {
    index++;

    if (index == r.length) {
        index = 0;
    }
}
