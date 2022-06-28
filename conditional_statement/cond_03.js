// Cond 3

function setup() {
    createCanvas(400, 400);
}

function draw() {
    //background(0);

    if (mouseX < 200) {
        background(255, 102, 102);
    }

    if (mouseX > 200) {
        background(102, 178, 255);
    }

    if (mouseY > 200) {
        background(178, 255, 102);
    }
}
