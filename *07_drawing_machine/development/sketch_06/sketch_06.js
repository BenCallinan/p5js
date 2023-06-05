// Lines that jiggle

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
        pens[i].move();
        pens[i].show();
    }
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
        line(this.x, this.y, this.px, this.py);
    }
}
