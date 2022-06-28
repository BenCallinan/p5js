// 3.3: Else and Else if, AND and OR - p5.js Tutorial

// https://www.youtube.com/watch?v=r2S7j54I68c&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=16


var x = 0;
var speed = 3;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(x, 200, 100, 100);

    if (x > width || x < 0) {
        speed = speed * -1;
    }

    x = x + speed;

}
