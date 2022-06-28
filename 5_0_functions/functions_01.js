// 5.1: Functions Basics - p5.js Tutorial

// https://www.youtube.com/watch?v=wRHAitGzBrg&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=20

var ball = {
    x: 300,
    y: 200,
    xspeed: 4,
    yspeed: -3
}

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    move();
    bounce();
    display();
}

function move() {
    ball.x = ball.y + ball.xspeed;
    ball.y = ball.y + ball.yspeed;
}

function bounce() {
    if (ball.x > width || ball.x < 0) {
        ball.xspeed = ball.speed * -1;
    }
    if (ball.y > height || ball.y < 0) {
        ball.yspeed = ball.yspeed * -1;
    }
}

function display() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(ball.x, ball.y, 24, 24);
}
