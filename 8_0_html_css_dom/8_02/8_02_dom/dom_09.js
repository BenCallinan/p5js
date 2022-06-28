// Use DOM elements on p5.js reference

// https://p5js.org/reference/#group-DOM

// Webcam feed

let capture;

function setup() {
    createCanvas(100, 100);
    capture = createCapture(VIDEO);
    capture.hide();
}

function draw() {
    image(capture, 0, 0, width, height * capture.height / capture.width);
    //filter(INVERT);
}
