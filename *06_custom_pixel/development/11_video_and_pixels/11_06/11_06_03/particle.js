class Particle {
    constructor(x, y, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.r = 32;
    }

    update() {
        this.x += this.xSpeed;
        if (this.x < 0 || this.x > width) {
            this.xSpeed *= -1;
        }

        this.y += this.ySpeed;
        if (this.y < 0 || this.y > height) {
            this.ySpeed *= -1;
        }
    }

    show() {
        noStroke();

        let px = floor(this.x / vScale);
        let py = floor(this.y / vScale);

        let col = video.get(px, py);

        fill(col[0], col[1], col[2], slider.value());
        ellipse(this.x, this.y, this.r, this.r);
    }
}
