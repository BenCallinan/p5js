// 8.3: Manipulating DOM Elements with html() and position() - p5.js Tutorial

// https://www.youtube.com/watch?v=YfaJ20vXcK8&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=3

// position()

var canvas;
var h1;


function setup() {
    canvas = createCanvas(200, 200);
    canvas.position(400, 500);

    h1 = createElement('h1', 'My favourite numbers below.');
    //h1.position(400, 600);
}

function mousePressed() {
    //createP("My favourite colour is purple.");
    createP('My favourite number is purple ' + random(0, 10) + ".");
}

function draw() {
    //clear();
    background(200);
    fill(255, 0, 0);
    rect(100, 100, 50, 50);
}
