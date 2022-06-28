// Rectangle class

class Rectangle {

    constructor(x, y, w, h, r, g, b) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = r;
        this.g = g;
        this.b = b;
        this.r1 = 0;
        this.g1 = 0;
        this.b1 = 255;
        this.on = false;
    }

    show() {

        stroke(255);
        strokeWeight(4);
        if (this.on === true) {
            fill(this.r1, this.g1, this.b1)
        } else {
            fill(this.r, this.g, this.b);
        }
        rectMode(CENTER)
        rect(this.x, this.y, this.w, this.h);
    }

    click() {

        if (mouseIsPressed) {
            this.on = true;
        } // else {
            // this.on = false;
        // }
    }
}
