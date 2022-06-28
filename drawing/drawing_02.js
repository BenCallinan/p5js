function setup() {
    createCanvas(400, 300);
    print("Hello");
}

function draw() {
    background(100);
    rectMode(CENTER);

    // This is the green rectangle in the centre
    fill(0, 255, 0);
    // stroke(0, 0, 255);
    strokeWeight(8);
    rect(200, 150, 150, 150);

    fill(255, 0, 0, 175, 150);
    noStroke();
    ellipse(150, 250, 100, 75);
}
