// 9.6: JavaScript Closure - p5.js Tutorial

// https://www.youtube.com/watch?v=-jysK0nlz7A&list=PLRqwX-V7Uu6ZmA-d3D0iFIvgrB5_7kB8H&index=6

var x = 0;

var timer1 = 0;
var timer2 = 0;

function setup() {
    createCanvas(200, 200);
    timer1 = createP('timer 1');
    timer2 = createP('timer 2');

    makeTimer(timer1, 500);
    makeTimer(timer2, 312);
}

function makeTimer(elt, wait) {
    var counter = 0;
    setInterval(timeIt, wait);
    function timeIt() {
        elt.html(counter);
        counter++;
    }
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
