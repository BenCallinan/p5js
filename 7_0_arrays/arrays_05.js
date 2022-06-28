// Arrays 5

// Aim: Combine a changing background with changing text

var r = [255, 0, 0, 255];
var g = [0, 255, 0, 255];
var b = [0, 0, 255, 0];
var r1 = [0, 0, 255, 255];
var g1 = [255, 0, 255, 0];
var b1 = [0, 255, 0, 0];
var words = ['cat', 'dog', 'fish', 'turtle'];

var index = 0;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(r[index], g[index], b[index]);

    fill(r1[index], g1[index], b1[index]);
    textSize(64);
    text(words[index], 100, 200);
}

function mousePressed() {
    index++;

    if (index == r.length) {
        index = 0;
    }
}
