class Particle {
    constructor(x, y, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.r;
    }

    show() {
        noStroke();

        let trail = [];

        this.xSpeed = 2;
        this.ySpeed = 2;

        trail.push(new p5.Vector(this.x, this.y));

        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;

        if (this.x < 0 || this.x > width) {
            this.xSpeed = this.xSpeed * -1;
        }

        if (this.y < 0 || this.y > height) {
            this.ySpeed = this.ySpeed * -1;
        }

        if (trail.length > 32) {
            trail.shift();
        }

        for (let i = 0; i < trail.length; i++) {
            let p = trail[i];

            this.r = 32.0 * i / trail.length;

            let px = floor(this.x / vScale);
            let py = floor(this.y / vScale);

            let col = video.get(px, py);

            fill(col[0], col[1], col[2], slider.value());
            ellipse(p.x, p.y, this.r, this.r);
        }
    }
}
