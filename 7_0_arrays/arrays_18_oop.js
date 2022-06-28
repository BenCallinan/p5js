// Arrays 18

// Aim: Rectangles change colour when the mouse hovers over themx

let rectangles = [];

function setup() {
    createCanvas(600, 400);
    mouseOver = false;

    for (let i = 0; i < 1000; i++) {
        let x = random(width);
        let y = random(height);
        let w = random(20, 100);
        let h = random(20, 100);
        let rec = new Rectangle(x, y, w, h);
        rectangles.push(rec);
    }
}

function draw() {
    background(255);
    frameRate(30);

    for(let i = 0; i < rectangles.length; i++) {
        rectangles[i].move();
        rectangles[i].show();
        rectangles[i].hover(mouseX, mouseY);
    }
}

class Rectangle {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = 0;
        this.g = 0;
        this.b = 52;
        this.a = random(255);

    }

    hover(x, y, w, h) {
        let d = dist(x, y, this.x, this.y);
        if (d < this.w) {
            this.r = 204;
            this.g = 229;
            this.b = 255;
            this.a = random(255);
        } else {
            this.r = 0;
            this.g = 0;
            this.b = 52;
            this.a = random(255);
        }
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(1);
        fill(this.r, this.g, this.b, this.a);
        rectMode(CENTER)
        rect(this.x, this.y, this.w, this.h);
    }
}
