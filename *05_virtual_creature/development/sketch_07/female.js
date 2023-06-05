class Female {
    constructor(x, y, r, rd, gn, bl, al) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.rd = 80;
        this.gn = random(70);
        this.bl = random(70);
        this.al = random(150, 255);
    }

    sqrIntersects(other) {
        let d = dist(this.x, this.y, other.x, other.y);
        return(d < this.r + other.w);
    }

    cirIntersects(other) {
        let d = dist(this.x, this.y, other.x, other.y);
        return(d < this.r / 2 + other.r / 2);
    }

    triIntersects(other) {
        let d = dist(this.x, this.y, (other.x1 + 5), (other.y1 - 5));
        return(d < this.r / 2);
    }

    move() {
        this.x = this.x + random(-8, 8);
        this.y = this.y + random(-8, 8);
    }

    show() {
        noStroke();
        fill(this.rd, this.gn, this.bl, this.al);
        ellipse(this.x, this.y, this.r);
    }
}
