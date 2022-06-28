// Arrays 24

// Aim: Click to make falling blocks disappear

// Blocks re-appear when clicked!

let blocks = [];
let score = 0;

function setup() {
    createCanvas(600, 400);

    for (let i = 0; i < 100; i++) {
        let x = random(width);
        let y = -10;
        let w = random(45, 50);
        let h = random(50);
        let b = new Block(x, y, w, h);
        blocks.push(b);
    }
}

function mousePressed() {
    for (let i = blocks.length -1; i >= 0; i--) {
        if (blocks[i].click(mouseX, mouseY)) {
            blocks.splice(i, 1);
            score = score + 1;
            console.log("Score:", score);
        }
    }
}

function draw() {
    background(0);

    for (let i = 0; i < 10; i++) {
        blocks[i].show();
        blocks[i].move();
    }
}

class Block {

    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.rd = 255;
        this.gn = 0;
        this.bl = 0;
        this.al = 255;
    }

    changeColour(rd, gn, bl, al) {
        this.rd = rd;
        this.gn = gn;
        this.bl = bl;
        this.al = al;
    }

    click(x, y) {
        let d = dist(x, y, this.x, this.y);
        if (d < this.w) {
            return true;
        } else {
            return false;
        }
    }

    move() {
        this.y = this.y + 15;
    }

    show() {
        stroke(255);
        strokeWeight(0);
        fill(this.rd, this.gn, this.bl);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);
    }

}
