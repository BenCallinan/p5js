// Draw in 3D

let angle = 0;

let pens = [];

function setup() {
    createCanvas(600, 400, WEBGL);
}

function draw() {
    background(0);

    rotateX(angle);
    rotateY(angle);
    rotateZ(angle);

    translate(-300, -200);

    for (let i = 0; i < pens.length; i++) {
        pens[i].show();
    }

    angle += 0.01;
}

function mouseDragged() {
    let p = new Pen(mouseX, mouseY, pmouseX, pmouseY);
    pens.push(p);
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
