// Else 6

// Program a button

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(32);

    stroke(255);
    strokeWeight(4);
    noFill();

    if (mouseIsPressed && mouseX > 150 && mouseX < 250 && mouseY > 150 && mouseY < 250) {
        fill(224);
    } else if (mouseX > 150 && mouseX < 250 && mouseY > 150 && mouseY < 250) {
        fill(128);
    }
    rect(150, 150, 100, 100);
}
