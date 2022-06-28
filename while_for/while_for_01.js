// 4.1 While and For Loops - p5.js tutorial

// https://www.youtube.com/watch?v=cnRD9o6odjk&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=18

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    strokeWeight(4);
    stroke(255);

    var x = 0;

    while(x <= width) {
        ellipse(x, 200, 25, 25);
        x = x + 50;
    }
}
