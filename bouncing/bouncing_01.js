// 3.2: The Bouncing Ball - p5.js Tutorial

// https://www.youtube.com/watch?v=LO3Awjn_gyU&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=17

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

    if (x > width) {
        speed = -3;
    }

    x = x + speed;

}
