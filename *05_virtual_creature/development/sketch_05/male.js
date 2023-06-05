class Male {
    constructor(x, y, r, rd, gn, bl) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.rd = 0;
        this.gn = 0;
        this.bl = 255;
    }

    death() {
        this.rd = 255;
        this.gn = 255;
        this.bl = 255;
        this.x = random(width);
        this.y = random(height);
    }

    intersects(other) {
        let d = dist(this.x, this.y, other.x, other.y);
        return(d < this.r + other.r);
    }

    move() {
        this.x = this.x + random(-4, 4);
        this.y = this.y + random(-4, 4);
    }

    show() {
        noStroke();
        fill(this.rd, this.gn, this.bl);
        ellipse(this.x, this.y, this.r);
    }
}
