function Crack(x, y) {
    this.x = x;
    this.y = y;

    this.history = [];

    this.update = function() {
        this.x += random(8, -8);
        this.y += 8;

        for (let i = 0; i < this.history.length; i++) {
            this.history[i].x += random(-2, 2);
            this.history[i].y += random(-2, 2);
        }

        let v = createVector(this.x, this.y);
        this.history.push(v);

        if (this.history.length > 50) {
            this.history.splice(0, 1);
        }
    }

    this.show = function() {
        point(this.x, this.y);

        noFill();
        stroke(150, 200, 255);
        beginShape();
        for (let i = 0; i < this.history.length; i++) {
            let pos = this.history[i];
            vertex(pos.x, pos.y);
        }
        endShape();

    }
}
