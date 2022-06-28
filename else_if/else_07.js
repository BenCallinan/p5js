// Else 7

// Aim: To build a button that changes background colour every time it is pressed

// Last worked on Thursday 6 January 2021, 7:10am

let r1, g1, b1;

function setup() {
    createCanvas(400, 400);
    background(0);
}

function draw() {

    r1 = random(255);
    b1 = random(255);
    g1 = random(255);

    stroke(255);
    strokeWeight(3);
    fill(224);

    if (mouseIsPressed && mouseX > 150 && mouseX < 250 && mouseY > 150 && mouseY < 250) {
        fill(224);
        background(r1, g1, b1);
    } else if (mouseX > 150 && mouseX < 250 && mouseY > 150 && mouseY < 250) {
        fill(128);
    }
    rect(150, 175, 100, 50, 10);
}
