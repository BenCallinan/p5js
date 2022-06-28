// Q&A #6: p5.js Sketch as Background

// https://www.youtube.com/watch?v=OIfEHD3KqCg&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=17

var canvas;
var mic;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    background(220);
    var vol = mic.getLevel();
    ellipse(width/2, height/2, vol*windowWidth);

}
