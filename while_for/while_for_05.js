// While For 5

// Stripes

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(224);
    //stroke(102, 0, 0);

    for (let i = 1; i <= width; i++) {
        stroke(102, 0, 0);
        stroke(102, 0, 0);
        strokeWeight(i * 0.2);

        let lineX = i * 30;
        line(lineX, 0, lineX, height);
    }

    for (let k = 0; k <= height; k++) {
        stroke(0, 51, 102);
        strokeWeight(k * 0.2);

        let lineY = k * 30;
        line(0, lineY, width, lineY);
    }
}
