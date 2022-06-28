// Object orientated programing 5

// Aim: Create several moving bubbles, each with a different colour

let bubble1;
let bubble2

function setup() {
    createCanvas(600, 400);
    bubble1 = new Bubble(200, 200, 40, 255, 0, 0);
    bubble2 = new Bubble(400, 200, 20, 0, 255, 0);
}

function draw() {
    background(0);
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
}

class Bubble {
    constructor(x, y, ra, r, g, b) {
        this.x = x;
        this.y = y;
        this.ra = ra;
        this.r = r;
        this.g = g;
        this.b = b;
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        fill(this.r, this.g, this.b);
        ellipse(this.x, this.y, this.ra*2);
    }
}
