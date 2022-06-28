// Random 5

let x, y, x1, y1;
let r, g, b, a;
let lineWidth;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
}

function draw() {

    x = random(width);
    y = random(height);
    x1 = random(width);
    y1 = random(height);

    r = random(255);
    g = random(255);
    b = random(255);
    a = random(255);

    lineWidth = random(400);

    strokeWeight(lineWidth);
    stroke(r, g, b, a);
    line(x, 0, x1, windowHeight);
}
