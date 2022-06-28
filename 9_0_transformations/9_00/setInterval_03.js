// 9.5: JavaScript setInterval() Function - p5.js Tutorial

// https://www.youtube.com/watch?v=CqDqHiamRHA&list=PLRqwX-V7Uu6ZmA-d3D0iFIvgrB5_7kB8H&index=5

var x = 0;

var timer;
var counter = 0;
var timer2 = 0;

function setup() {
    createCanvas(200, 200);
    timer = createP('timer 1');
    timer2 = createP('timer 2');
    setInterval(timeIt, 500);
}

function timeIt() {
    timer.html(counter);
    counter++;
}

function draw() {
    background(51);

    stroke(255);
    line(x, 0, x, height);

    x = x + 3;
    if (x > width) {
        x = 0;
    }
}
