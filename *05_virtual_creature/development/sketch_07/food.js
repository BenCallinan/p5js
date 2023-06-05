class Food {
    constructor(x1, y1, x2, y2, x3, y3, rd, gn, bl, al) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
        this.rd = random(0, 75);
        this.gn = 80;
        this.bl = random(0, 75);
        this.al = random(200);
    }

    show() {
        noStroke();
        fill(this.rd, this.gn, this.bl);
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    }
}
