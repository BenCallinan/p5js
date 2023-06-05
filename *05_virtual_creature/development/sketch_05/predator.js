class Predator {
    constructor(x, y, r, rd, gn, bl) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.rd = 0;
        this.gn = 0;
        this.bl = 0;
    }

    intersects(other) {
        let d = dist(this.x, this.y, other.x, other.y);
        return(d < this.r + other.r);
    }

    move() {
        this.x = this.x + random(-6, 6);
        this.y = this.y + random(-6, 6);
    }

    show() {
        noStroke();
        fill(this.rd, this.gn, this.bl);
        ellipse(this.x, this.y, this.r);
    }
}
