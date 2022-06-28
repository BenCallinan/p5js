// 8.4: Handling DOM Events with Callbacks - p5.js Tutorial

// https://www.youtube.com/watch?v=NcCEzzd9BGE&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=4

var bgcolor;
var button;

function setup() {
    canvas = createCanvas(200, 200);
    bgcolor = color(200);
    button = createButton('go');
    button.mousePressed(changeColor);
}

function changeColor() {
    bgcolor = color(random(255));
}

// function mousePressed() {
//     changeColor();
// }

function draw() {
    background(bgcolor);
    fill(255, 0, 175);
    rect(100, 100, 50, 50);
}
