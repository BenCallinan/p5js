// Arrays 15

// Aim: A new rectangle appears every x seconds

// Last worked on Saturday 29 January 2022, 9:34am

let rectMove = [];
let timer = 1000;
let nextChange = timer;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);

    for (let rects of rectMove) {
        rects.show();
        rects.move();
    }

    if (millis() > nextChange) {
        let x = random(windowWidth);
        let y = random(windowHeight);
        let w = random(10, 100);
        let h = random(10, 100);
        let r = random(255);
        let g = random(255);
        let b = random(255);
        let box = new RectMove(x, y, w, h, r, g, b);
        rectMove.push(box)
        nextChange = millis() + timer;
    }
}
