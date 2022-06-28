// 8.6: Other Events and Inputs - p5.js Tutorial

// https://www.youtube.com/watch?v=HsDVz2_Qgow&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=6

var bgcolor;
var button;
var slider;
var input;
var nameP;

function setup() {
    canvas = createCanvas(200, 200);
    canvas.mouseOver(overpara);
    canvas.mouseOut(outpara);
    canvas.mousePressed(changeColor);

    bgcolor = color(200);

    nameP = createP('Your Name!');
    nameP.mouseOver(overpara);
    nameP.mouseOut(outpara);

    button = createButton('go');
    button.mousePressed(changeColor);

    slider = createSlider(10, 100, 47);
    input = createInput('type your name ');
}

function overpara() {
    nameP.html('Your mouse is over me!');
}

function outpara() {
    nameP.html('Your mouse is out!');
}

function changeColor() {
    bgcolor = color(random(255));
}

function draw() {
    background(bgcolor);
    fill(255, 0, 175);
    ellipse(100, 100, slider.value(), slider.value());
    //nameP.html(input.value());
    text(input.value(), 10, 20);
}
