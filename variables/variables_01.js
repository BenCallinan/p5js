// Flow / Variables
// Code! Programming with p5.js

// 2.1: Variables in p5.js (mouseX, mouseY) - p5.js Tutorial
// https://www.youtube.com/watch?v=7A5tKW9HGoM&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=8

function setup() {
    createCanvas(400, 300);
}

function draw() {

    noStroke();
    fill(255, 0, 0, 50);
    circle(mouseX, mouseY, 60);
}

function mousePressed() {
    background(255);
}
