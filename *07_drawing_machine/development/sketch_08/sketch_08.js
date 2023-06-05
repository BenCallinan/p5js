// Record shape data using vertices

// https://www.geeksforgeeks.org/p5-js-beginshape-function/

let pens = [];

function setup() {
    createCanvas(600, 400);
}

function mouseDragged() {
    let p = new Pen(mouseX, mouseY, mouseX, mouseY);
    pens.push(p);
}

function draw() {
    background(0);

    beginShape();
    for (let i = 0; i < pens.length; i++) {
        pens[i].move();
        pens[i].show();
    }
    endShape();
}

class Pen {
    constructor(x, y, px, py) {
        this.x = x;
        this.y = y;
        this.px = px;
        this.py = py;
    }

    move() {
        this.x += random(-2, 2);
        this.y += random(-2, 2);
        this.px += random(-2, 2);
        this.py += random(-2, 2);
    }

    show() {
        noFill();
        stroke(255);
        strokeWeight(4);
        vertex(this.x, this.y);
        vertex(this.px, this.py);
    }
}
