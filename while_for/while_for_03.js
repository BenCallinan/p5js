// While For 3

// Aim: Construct a pattern using for loops

// Last worked on Tuesday 11 January 2022, 7:10am

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    strokeWeight(4);
    stroke(255);

    let x = 25;
    let y = 25;

    for (let x = 0; x <= width; x += 50) {
        for (let y = 0; y <= windowHeight; y += 50) {
            fill(255, 0, 200);
            ellipse(x, y, 25, 25);
        }
    }
}
