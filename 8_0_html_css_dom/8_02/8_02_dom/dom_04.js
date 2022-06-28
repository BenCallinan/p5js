// Use DOM elements on p5.js reference

// https://p5js.org/reference/#group-DOM

let colorPicker;

function setup() {
    createCanvas(100, 100);
    colorPicker = createColorPicker('#ed225d');
    colorPicker.position(0, height + 5);
}

function draw() {
    background(colorPicker.color());
}
