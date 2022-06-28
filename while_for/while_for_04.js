// While For 4

// Aim: Construct a pattern using for loops

// Last worked on Tuesday 11 January 2022, 7:10am

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0, 25, 51);
    strokeWeight(2);
    stroke(255);

    let x = 0;
    let y = 0;

    for (let x = 0; x <= width; x += 50) {
        for (let y = 0; y <= windowHeight; y += 50) {
            fill(255, 51, 153);
            ellipse(x, y, 25, 25);
        }
    }

    let x1 = 25;
    let y1 = 25;

    for (let x1 = 25; x1 <= width; x1 += 75) {
        for (let y1 = 25; y1 <= windowHeight; y1 += 75) {
            fill(255, 178, 102);
            ellipse(x1, y1, 25, 25);
        }
    }
}
