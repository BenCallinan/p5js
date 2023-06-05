// Record shape data using vertices

// https://www.geeksforgeeks.org/p5-js-beginshape-function/

let pens = [];

function setup() {
    createCanvas(600, 400);
}

function mouseDragged() {
    let p = new Pen(mouseX, mouseY, pmouseX, pmouseY);
    pens.push(p);
}

function draw() {
    background(0);

    for (let i = 0; i < pens.length; i++) {
        pens[i].show();
    }

    if (pens.length > 60) {
        pens.splice(0, 1);
    }
}

class Pen {
    constructor(x, y, px, py) {
        this.x = x;
        this.y = y;
        this.px = px;
        this.py = py;
    }

    show() {
        noFill();
        stroke(255);
        strokeWeight(4);
        beginShape();
        vertex(this.x, this.y);
        vertex(this.px, this.py);
        endShape();
    }
}
