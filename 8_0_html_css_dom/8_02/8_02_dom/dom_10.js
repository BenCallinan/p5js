// Use DOM elements on p5.js reference

// https://p5js.org/reference/#group-DOM

// Webcam feed

let capture;

function setup() {
    createCanvas(480, 120);
    let constraints = {
        video: {
            madatory: {
                minWidth: 1280,
                minHeight: 720
            },
            optional: [{ maxFrameRate: 10}]
        },
        audio: true
    };
    createCapture(constraints, function(stream) {
        console.log(stream);
    });
}
