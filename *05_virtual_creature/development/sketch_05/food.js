class Food {
    constructor(x, y, r, rd, gn, bl) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.rd = 0;
        this.gn = 255;
        this.bl = 0;
    }

    changeColour() {
        this.rd = 0;
        this.gn = 0;
        this.bl = 0;
    }

    show() {
        noStroke();
        fill(this.rd, this.gn, this.bl);
        ellipse(this.x, this.y, this.r);
    }
}
