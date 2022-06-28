// Arrays 26

// 7.6: Object Communication Part 1 - p5.js Tutorial

// https://www.youtube.com/watch?v=W1-ej3Wu5zg&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=33

let bubbles = [];
//let unicorn;

function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < 200; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(5, 8);
        bubbles[i] = new Bubble(x, y, r);
    }
    //unicorn = new Bubble(400, 200, 10);
}

function draw() {
    background(0);

    // if (bubble1.intersects(bubble2)) {
    //         background(200, 0, 100);
    // }

    // unicorn.x = mouseX;
    // unicorn.y = mouseY;
    // unicorn.show();
    // unicorn.move();

    for (let b of bubbles) {
        b.show();
        b.move();
        let overlapping = false;
        for (let other of bubbles) {
            if (b !== other && b.intersects(other)) {
                overlapping = true;
            }
        }
        if (overlapping) {
            b.changeColour(255);
        } else {
            b.changeColour(0);
        }
    }

}

class Bubble {
    constructor(x, y, r = 50) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }

    changeColour(bright) {
        this.brightness = bright;
    }

    contain(px, py) {
        let d = dist(px, py, this.x, this.y);
        return (d < this.r);
    }

    intersects(other) {
        let d = dist(this.x, this.y, other.x, other.y)
        return (d < this.r + other.r);
    }

    move() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        fill(this.brightness, 125);
        ellipse(this.x, this.y, this.r * 2);
    }
}
