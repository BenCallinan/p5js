// 8.5: Interacting with the DOM using Sliders, Buttons and Text Inputs - p5.js Tutorial

// https://www.youtube.com/watch?v=587qclhguQg&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=5

var bgcolor;
var button;
var slider;
var input;
var nameP;

function setup() {
    canvas = createCanvas(200, 200);
    bgcolor = color(200);
    nameP = createP('Your Name!');
    button = createButton('go');
    button.mousePressed(changeColor);

    slider = createSlider(10, 100, 47);
    input = createInput('type your name ');
}

function changeColor() {
    bgcolor = color(random(255));
}

function draw() {
    background(bgcolor);
    fill(255, 0, 175);
    ellipse(100, 100, slider.value(), slider.value());
    nameP.html(input.value());
    text(input.value(), 10, 20);
}
