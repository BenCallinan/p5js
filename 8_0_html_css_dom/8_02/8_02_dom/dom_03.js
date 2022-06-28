// Use DOM elements on p5.js reference

// https://p5js.org/reference/#group-DOM

let radio;

function setup() {
    radio = createRadio();
    radio.option('black');
    radio.option('white');
    radio.option('gray');
    radio.style('width', '60px');
    textAlign(CENTER);
    fill(255, 0, 0);
}

function draw() {
    let val = radio.value();
    background(val);
    text(val, width / 2, height / 2);
}
