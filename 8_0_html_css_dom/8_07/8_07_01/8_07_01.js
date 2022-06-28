// Aim: Use different CSS selectors in html and js documents

var canvas;

var txtSize;
var txtRed;
var txtGreen;
var txtBlue;
var txtOpa;

function setup() {
    canvas = createCanvas(windowWidth, 400);
    canvas.position(300, 170);

    // User can change the size of the square
    sizeSlide = createSlider(10, 400, 200, 0);
    sizeSlide.position(80, 176);

    // Changes red colour
    redSlide = createSlider(10, 255, 76, 0);
    redSlide.position(80, 229);

    // Changes green colour
    grnSlide = createSlider(10, 255, 0);
    grnSlide.position(80, 282);

    // Changes blue colour
    bluSlide = createSlider(10, 255, 153, 0);
    bluSlide.position(80, 335);

    // Changes opacity
    opaSlide = createSlider(10, 255, 255, 0);
    opaSlide.position(80, 388);

    txtSize = createP('Size: ');
    txtSize.mouseOver(sizeStyle);
    txtSize.mouseOut(revertStyle);

    txtRed = createP('Red: ');
    txtRed.mouseOver(redStyle);
    txtRed.mouseOut(revertStyle);

    txtGreen = createP('Green: ');
    txtGreen.mouseOver(greenStyle);
    txtGreen.mouseOut(revertStyle);

    txtBlue = createP('Blue: ');
    txtBlue.mouseOver(blueStyle);
    txtBlue.mouseOut(revertStyle);

    txtOpa = createP('Opacity: ');
    txtOpa.mouseOver(opaStyle);
    txtSize.mouseOut(revertStyle);
}

function sizeStyle() {
    txtSize.style('background-color', 'gray');
}

function redStyle() {
    txtRed.style('background-color', 'red');
}

function greenStyle() {
    txtGreen.style('background-color', 'green');
}

function blueStyle() {
    txtBlue.style('background-color', 'blue');
}

function opaStyle() {
    txtOpa.style('background-color', 'gray');
}

function revertStyle() {
    txtSize.style('background-color', 'white');
    txtRed.style('background-color', 'white');
    txtGreen.style('background-color', 'white');
    txtBlue.style('background-color', 'white');
    txtOpa.style('background-color', 'white');
}

function draw() {
    background(255);

    // Generates a rectangle
    rectMode(CENTER);
    noStroke();
    fill(redSlide.value(), grnSlide.value(), bluSlide.value(), opaSlide.value());
    rect(200, 200, sizeSlide.value(), sizeSlide.value());
}
