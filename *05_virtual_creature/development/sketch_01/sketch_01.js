// Aim: Create a basic create that interacts with the surrounding
// environment

// Will help:
// https://www.youtube.com/watch?v=W1-ej3Wu5zg&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=33

let x1 = 300;
let y1 = 200;

let rd1 = 255;
let gn1 = 0;
let bl1 = 0;

let rd2 = 0;
let gn2 = 255;
let bl2 = 0;

let rd3 = 0;
let gn3 = 0;
let bl3 = 255;

let rd4 = 255;
let gn4 = 0;
let bl4 = 255;

let r1 = 20;
let r2 = 20;
let r3 = 20;
let r4 = 20;

function setup() {
    createCanvas(600, 400);

    x2 = random(600);
    y2 = random(400);

    x3 = random(600);
    y3 = random(400);

    x4 = random(600);
    y4 = random(400);
}

function draw() {
    background(0);

    x1 = x1 + random(-20, 20);
    y1 = y1 + random(-20, 20);

    if (x1 < 0 || x1 > width) {
        x1 = 300;
    } else if (y1 < 0 || y1 > height) {
        y1 = 200;
    }

    // Creature (moves around)
    fill(rd1, gn1, bl1);
    ellipse(x1, y1, r1);

    // Food (red eats)
    fill(rd2, gn2, bl2);
    ellipse(x2, y2, r2);

    let d1 = dist(x1, y1, x2, y2);

    if (d1 < r1 + r2) {
        rd2 = 255;
        gn2 = 255;
        bl2 = 255;
    }

    // Death (kills red)
    fill(rd3, gn3, bl3);
    ellipse(x3, y3, r3);

    let d2 = dist(x1, y1, x3, y3);

    if (d2 < r1 + r3) {
        rd1 = 255;
        gn1 = 255;
        bl1 = 255;
    }

    // Love (makes new red)
    fill(rd4, gn4, bl4)
    ellipse(x4, y4, r4);

    let d3 = dist(x1, y1, x4, y4);

    if (d3 < r1 + r4) {
        r4 = r4 * 2;
    }
}
