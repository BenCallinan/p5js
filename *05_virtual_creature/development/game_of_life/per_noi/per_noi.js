// Aim: Create a grid using perlin noise that changes

let inc = 0.01;
let scl = 10;
let cols, rows;

let start = 0;

function setup() {
    createCanvas(600, 400);
    cols = floor(width / scl);
    rows = floor(height / scl);
}

function draw() {
    let yoff = start;
    for (let y = 0; y < rows; y++) {
        let xoff = start;
        for (let x = 0; x < cols; x++) {
            //let index = (x + y * width) * 4;
            let r = noise(xoff, yoff) * 255;
            xoff += inc;
            fill(r);
            rect(x * scl, y * scl, scl, scl);
        }
        yoff += inc;
    }
    start += inc;
}
