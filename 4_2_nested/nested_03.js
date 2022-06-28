// 4.2 Nested Loops - p5.js Tutorial

// https://www.youtube.com/watch?v=1c1_TMdf8b8&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=19

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    strokeWeight(4);
    stroke(255);

    for (var x = 0; x <= width; x += 50) {
        for (var y = 0; y <= height; y += 50) {
            fill(random(255), 0, random(200));
            ellipse(x, y, 25, 25);
        }
    }
}
