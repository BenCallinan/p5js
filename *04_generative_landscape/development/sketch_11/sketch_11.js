// Based on:
// https://github.com/CodingTrain/website-archive/blob/main/CodingChallenges/CC_011_PerlinNoiseTerrain/P5/index.html

// Aim: Fly a cross a generative terrain

let cols, rows;
let scl = 20;

let w = 1400;
let h = 1000;

let flying = 0;

let terrain = [];

let noi;

let r = 0;
let g = 0;
let b = 0;

function setup() {
    createCanvas(600, 600, WEBGL);

    cols = floor(w / scl);
    rows = floor(h / scl);

    for (let x = 0; x < cols; x++) {
            terrain[x] = [];
        for (let y = 0; y < rows; y++) {
            terrain[x][y] = 0;
        }
    }
}

function draw() {
    background(100, 175, 255);

    push();
    noStroke();
    fill(255, 255, 150, 235);
    let sunX = random(149, 151);
    let sunY = random(-224, -226);
    ellipse(sunX, sunY, 75, 75);
    pop();

    flying -= 0.05;

    let yoff = flying;
    for (let y = 0; y < rows; y++) {
        let xoff = 0;
        for (let x = 0; x < cols; x++) {
            terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
            noi = noise(xoff, yoff) * 255;
            console.log(noi);
            xoff += 0.2;
        }
    yoff += 0.2;
    }

    translate(0, 50);

    rotateX(PI / 3);
    noStroke();
    fill(0, 255, 0, 150);
    translate(-w /2, -h / 2);

    for (let y = 0; y < rows; y++) {
        beginShape(TRIANGLE_STRIP);
        for (let x = 0; x < cols; x++) {
            vertex(x * scl, y * scl, terrain[x][y]);
            vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
        }
        endShape();
    }
}
