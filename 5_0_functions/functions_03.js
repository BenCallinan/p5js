// Functions 3

// Aim: Create a cityscape with various size buildings

function setup() {
    createCanvas(400, 250);
}

function draw() {
    background(204, 0, 0);

    building(200, 50, 50, 200, 220, 75, 10, 50, 220, 175, 10, 50);
    building(100, 125, 75, 125, 108, 130, 60, 25, 220, 175, 10, 50);
    building(25, 75, 35, 175, 30, 80, 25, 150, 220, 175, 10, 50);
    building(300, 10, 35, 240, 305, 20, 25, 100, 305, 130, 25, 100);
}

function building(x, y, bWidth, bHeight, x1, y1, topW, topH, x2, y2, botW, botH) {
    // Building
    fill(0);
    rect(x, y, bWidth, bHeight);

    // Top window
    fill(255, 153, 51);
    rect(x1, y1, topW, topH);

    // Bottom window
    fill(204, 102, 0);
    rect(x2, y2, botW, botH);
}
