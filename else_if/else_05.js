// Else 5

// Aim: Create shapes which change colour when the mouse hovers over them

let r1, g1, b1;
let r2, g2, b2;

function setup() {
    createCanvas(600, 400);

    r1 = random(255);
    g1 = random(255);
    b1 = random(255);

    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
}

function draw() {
    background(0);

    stroke(255);
    strokeWeight(4);
    noFill();
    rect(300, 200, 100, 100);

    stroke(255);
    strokeWeight(4);
    noFill();
    rect(50, 50, 100, 100);

    if (mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 300) {
        fill(r1, g1, b1);
        rect(300, 200, 100, 100);
    } else if (mouseX > 50 && mouseX < 150 && mouseY > 50 && mouseY < 150) {
        fill(r2, g2, b2);
        rect(50, 50, 100, 100);
    }
}
