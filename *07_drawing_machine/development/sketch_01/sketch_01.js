// Draw with the mouse

let r = 255;
let g = 255;
let b = 255;

let redbtn;
let grnbtn;
let ylwbtn;
let blbtn;
let whtbtn;
let erasebtn;

let slider;
let val;

function setup() {
    createCanvas(600, 400);
    background(0);

    redbtn = createButton('Red')
    redbtn.position(10, 410);
    redbtn.mousePressed(redLine);

    grnbtn = createButton('Green')
    grnbtn.position(50, 410);
    grnbtn.mousePressed(greenLine);

    ylwbtn = createButton('Yellow')
    ylwbtn.position(103, 410);
    ylwbtn.mousePressed(yellowLine);

    blbtn = createButton('Blue')
    blbtn.position(158, 410);
    blbtn.mousePressed(blueLine);

    whtbtn = createButton('White')
    whtbtn.position(200, 410);
    whtbtn.mousePressed(whiteLine);

    erasebtn = createButton('Erase')
    erasebtn.position(252, 410);
    erasebtn.mousePressed(eraseLine);

    slider = createSlider(1, 20, 4, 1);
    slider.position(300, 410);
}

function redLine() {
    r = 255;
    g = 0;
    b = 0;
}

function greenLine() {
    r = 0;
    g = 255;
    b = 0;
}

function yellowLine() {
    r = 255;
    g = 255;
    b = 0;
}

function blueLine() {
    r = 0;
    g = 0;
    b = 255;
}

function whiteLine() {
    r = 255;
    g = 255;
    b = 255;
}

function eraseLine() {
    r = 0;
    g = 0;
    b = 0;
}

function mouseDragged() {
    stroke(r, g, b);
    strokeWeight(val);
    line(mouseX, mouseY, pmouseX, pmouseY);
}

function draw() {
    val = slider.value();
}
