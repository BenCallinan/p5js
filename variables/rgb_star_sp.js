// RGB star Spinning

function setup() {
    createCanvas(400, 400);
    background(0);
}

function draw() {

    noStroke();
    fill(255, 50, 50, 5);
    triangle(mouseX, 200, 208, mouseY, 186, 175);

    noStroke();
    fill(50, 255, 50, 5);
    triangle(mouseX, 190, 198, mouseY, 176, 165);

    noStroke();
    fill(50, 50, 255, 5);
    triangle(mouseX, 180, 188, mouseY, 166, 155);
}

function mousePressed() {
    background(0);
}
