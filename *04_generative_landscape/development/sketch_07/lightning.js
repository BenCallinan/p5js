// Aim: Create lightning bolts

class Lightning {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.history = [];

        this.r = 0;
        this.g = 0;
        this.b = 0;
    }

    move() {
        this.x = this.x + random(-10, 10);
    }

    update() {
        this.x += random(8, -8);
        this.y += 8;

        for (let i = 0; i < this.history.length; i++) {
            this.history[i].x += random(-1, 1);
            this.history[i].y += random(-1, 1);
        }

        let v = createVector(this.x, this.y);
        this.history.push(v);

        if (this.history.length > 20) {
            this.history.splice(0, 1);
        }
    }

    show() {
        point(this.x, this.y);

        noFill();
        stroke(255);
        strokeWeight(1);
        beginShape();
        for (let i = 0; i < this.history.length; i++) {
            let pos = this.history[i];
            vertex(pos.x, pos.y);
        }
        endShape();
    }
}
