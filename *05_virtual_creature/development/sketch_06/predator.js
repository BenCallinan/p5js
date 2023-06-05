class Predator {
    constructor(x, y, w, rd, gn, bl, al) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.rd = random(10);
        // this.gn = random(50);
        // this.bl = random(50);
        this.al = random(150, 255);
    }

    intersects(other) {
        let d = dist(this.x, this.y, other.x, other.y);
        return(d < this.w / 2 + other.r / 2);
    }

    move() {
        this.x = this.x + random(-6, 6);
        this.y = this.y + random(-6, 6);
    }

    show() {
        noStroke();
        fill(this.rd, this.al);
        rectMode(CENTER);
        rect(this.x, this.y, this.w);
    }
}
