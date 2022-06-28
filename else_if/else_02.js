// 3.3: Else and Else if, AND and OR - p5.js Tutorial

// https://www.youtube.com/watch?v=r2S7j54I68c&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=16

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(4);
    noFill();

    if (mouseX > 300 && mouseX < 400) {
        fill(255, 0, 200);
    }
    rect(300, 200, 100, 100);
}
