// Bubble 2

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
        this.x = this.x + random(-10, 10);
        this.y = this.y + random(-10, 10);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        fill(this.r, this.g, this.b);
        ellipse(this.x, this.y, this.ra*2);
    }
}
