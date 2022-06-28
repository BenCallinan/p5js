function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(175);

    // Blue circle near centre
    fill(0, 0, 255, 150);
    noStroke();
    // noErase();
    ellipse(200, 150, 100, 100);

    // Green transparent rectangle
    noFill();
    stroke(0, 255, 0);
    strokeWeight(4);
    rect(200, 150, 100, 100);
    fill(0);

    // Triangle with erase
    erase();
    triangle(150, 80, 200, 140, 250, 80);
    noErase();

    // Transparent line down middle
    erase(100, 100);
    strokeWeight(10);
    line(200, 10, 200,390);
    noErase();

    // Red rectangle
    noStroke();
    fill(255, 0, 0, 150);
    rect(50, 125, 50, 50);
}
