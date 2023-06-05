// Falling

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
        this.y += 1;
        this.py += 1;
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
