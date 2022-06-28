// Random 6

let r, g, b, a;
let size;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {

    r = random(255);
    g = random(255);
    b = random(255);
    a = random(255);

    size = random(100);

    noStroke();
    fill(r, g, b, a);
    circle(mouseX, mouseY, size);
}

function mousePressed() {
    background(0);
}
