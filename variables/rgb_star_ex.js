// RGB star exploding

function setup() {
    createCanvas(400, 400);
    background(0);
}

function draw() {

    noStroke();
    fill(255, 50, 50, 5);
    triangle(mouseX, mouseY, 208, 170, 186, 185);

    noStroke();
    fill(50, 255, 50, 5);
    triangle(mouseX, mouseY, 198, 150, 176, 175);

    noStroke();
    fill(50, 50, 255, 5);
    triangle(mouseX, mouseY, 188, 140, 166, 165);
}

function mousePressed() {
    background(0);
}
