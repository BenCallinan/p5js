// Aim: Press to change the colour of the canvas

var canvas;

var redBtn;
var grnBtn;
var bluBtn;
var ranBtn;

var bgColor;

function setup() {
    canvas = createCanvas(200, 200);
    canvas.position(10, 150);

    bgColor = color(0);

    redBtn = createButton('Red');
    grnBtn = createButton('Green');
    bluBtn = createButton('Blue');
    ranBtn = createButton('Random');

    redBtn.mousePressed(redChange);
    grnBtn.mousePressed(grnChange);
    bluBtn.mousePressed(bluChange);
    ranBtn.mousePressed(ranChange);
}

function redChange() {
    bgColor = color(255, 0, 0);
}

function grnChange() {
    bgColor = color(0, 255, 0);
}

function bluChange() {
    bgColor = color(0, 0, 255);
}

function ranChange() {
    bgColor = color(random(255), random(255), random(255));
}


function draw() {
    background(bgColor);
}
