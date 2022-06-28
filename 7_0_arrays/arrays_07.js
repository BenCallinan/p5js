// Arrays 7

// Aim: Display for words using arrays and a for loop

var r = [0, 0, 255, 255];
var g = [255, 0, 255, 0];
var b = [0, 255, 0, 0];
var words = ['cat', 'dog', 'fish', 'turtle'];

var i = 0;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(0);

    for (var i = 0; i < 4; i++) {
        fill(r[i], g[i], b[i]);
        textSize(64);
        text(words[i], 100, i*100+100);
    }
}
