// 8.2: Creating HTML Elements with Javascript - p5.js Tutorial

// https://www.youtube.com/watch?v=lAtoaRz78I4&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=2

function setup() {
    createCanvas(200, 200);
    createElement('h1', "My favourite numbers below.")
}

function mousePressed() {
    //createP("My favourite colour is purple.");
    createP("My favourite number is purple " + random(0, 10) + ".");
}

function draw() {
    background(0);
    fill(255, 0, 0);
    rect(100, 100, 50, 50);
}
