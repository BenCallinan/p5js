// 7.1: What is an array? - p5.js Tutorial

// https://www.youtube.com/watch?v=VIQoUghHSxU&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=27

var words = ["rainbow", "heart", "purple", "friendship", "love"];

var index = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);

    fill(255);
    textSize(32);
    text(words[index], 12, 200);
}

function mousePressed() {
    index++;

    if (index == words.length) {
        index = 0;
    }
}
