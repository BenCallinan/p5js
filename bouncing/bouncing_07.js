// Bouncing 7

// Finished

let r1, g1, b1, a1;
let r2, g2, b2, a2;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255, 255, 255);
    frameRate(2);
}

function draw() {
    drawFlower(random(width), random(height), random(10, 50));
}

function drawFlower(movedX, movedY, petalSize) {
    let petalDistance = petalSize / 2;

    r1 = random(255);
    g1 = random(255);
    b1 = random(255);
    a1 = random(255);

    strokeWeight(3);
    fill(r1, g1, b1, a1);

    // uper-left petal
    circle(mouseX - petalDistance, mouseY - petalDistance, petalSize);

    // upper-right petal
    circle(mouseX + petalDistance, mouseY - petalDistance, petalSize);

    // lower-left petal
    circle(mouseX - petalDistance, mouseY + petalDistance, petalSize);

    // lower-right petal
    circle(mouseX + petalDistance, mouseY + petalDistance, petalSize );

    // centre petal
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
    a2 = 255;

    fill(r2, g2, b2, a2);
    strokeWeight(3);
    circle(mouseX, mouseY, petalSize);
}
