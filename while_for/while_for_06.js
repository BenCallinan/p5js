// While For 6

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);

    // Green squares
    for (let x = 0; x <= width; x += 200) {
        for (let y = 0; y <= height; y += 200) {
            stroke(2);
            fill(153, 255, 153);
            rect(x, y, 100, 100);
        }
    }

    for (let x = 100; x <= width; x += 200) {
        for (let y = 100; y <= height; y += 200) {
            stroke(2);
            fill(153, 255, 153);
            rect(x, y, 100, 100);
        }
    }

    // Blue squares
    for (let x = 0; x <= width; x += 200) {
        for (let y = 100; y <= height; y += 200) {
            stroke(2);
            fill(153, 153, 255);
            rect(x, y, 100, 100);
        }
    }

    for (let x = 100; x <= width; x += 200) {
        for (let y = 0; y <= height; y += 200) {
            stroke(2);
            fill(153, 153, 255);
            rect(x, y, 100, 100);
        }
    }

    // Pink circles
    for (let x = 150; x <= width; x += 200) {
        for (let y = 50; y <= height; y += 200) {
            fill(255, 153, 153);
            ellipse(x, y, 100, 100);
        }
    }

    for (let x = 50; x <= width; x += 200) {
        for (let y = 150; y <= height; y += 200) {
            fill(255, 153, 153);
            ellipse(x, y, 100, 100);
        }
    }
}
