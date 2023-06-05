// 16.17: Inheritance in JavaScript

// https://www.youtube.com/watch?v=MfxBfRD0FVU&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr&index=19

let p1, p2;

function setup() {
    createCanvas(600, 600);
    p1 = new Particle(300, 300);
    p2 = new Confetti(300, 300);
}

function draw() {
    background(0);
    p1.update();
    p1.show();
    p2.update();
    p2.show();
}
