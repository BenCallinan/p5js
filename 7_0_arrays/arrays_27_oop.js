// Arrays 27

// Aim: Bubbles that pop when they intersect with each other

let bubbles = [];

function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < 50; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 50);
        bubbles[i] = new Bubble(x, y, r);
    }
}

function draw() {
    background(214, 0, 0);

    for (let i = bubbles.length -1; i >= 0; i-- ) {
        bubbles[i].move();
        bubbles[i].show();

        let overlapping = false;
        for (let other of bubbles) {
            if (bubbles[i] !== other && bubbles[i].intersects(other)) {
                overlapping = true;
            }
        }
        if (overlapping) {
            bubbles.splice(i, 1);
        }
    }
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }

    changeColour(bright) {
        this.brightness = bright;
    }

    contains(px, py) {
        let d = dist(px, py, this.x, this.y);
        return d (d < this.r);
    }

    intersects(other) {
        let d = dist(this.x, this.y, other.x, other.y);
        return (d < this.r + other.r);
    }

    move() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
    }

    show() {
        stroke(255, 204, 204);
        strokeWeight(0.5);
        fill(this.brightness, 125);
        ellipse(this.x, this.y, this.r * 2);
    }
}
