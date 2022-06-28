// Bouncing 6

// Last worked on Thursday 30 December 2021, 4:04pm

let r1, g1, b1, a1;
let r2, g2, b2, a2;

function setup() {
    createCanvas(600, 600);
    background(255, 255, 255);
    frameRate(2);
}

function draw() {

    let flowerX = 150;
    let flowerY = 150;
    let petalSize = random(25, 150);
    let petalDistance = petalSize / 2;

    r1 = random(255);
    g1 = random(255);
    b1 = random(255);
    a1 = random(255);

    strokeWeight(3);
    fill(r1, g1, b1, a1);

    // upper-left petal
    circle(flowerX - petalDistance, flowerY - petalDistance, petalSize);

    // upper-right petal
    circle(flowerX + petalDistance, flowerY - petalDistance, petalSize);

    // lower-left petal
    circle(flowerX - petalDistance, flowerY + petalDistance, petalSize);

    // lower-right petal
    circle(flowerX + petalDistance, flowerY + petalDistance, petalSize);

    // center petal
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
    a2 = 255;

    strokeWeight(3);
    fill(r2, g2, b2, a2);
    circle(flowerX, flowerY, petalSize);
}
