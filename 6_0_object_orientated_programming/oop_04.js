// 6.3: Constructor Arguments with Classes in JavaScript - p5.js Tutorial

// https://www.youtube.com/watch?v=rHiSsgFRgx4&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=25

let bubble1;
let bubble2

function setup() {
    createCanvas(600, 400);
    bubble1 = new Bubble(200, 200, 40);
    bubble2 = new Bubble(400, 200, 20);
}

function draw() {
    background(0);
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
}
