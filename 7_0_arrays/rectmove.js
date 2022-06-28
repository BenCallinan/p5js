// Rectangle class

class RectMove {

    constructor(x, y, w, h, r, g, b) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
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
        // noStroke();
        fill(this.r, this.g, this.b);
        rectMode(CENTER)
        rect(this.x, this.y, this.w, this.h);
    }
}
