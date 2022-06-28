// Arrays 25

// 7.6: Object Communication Part 1 - p5.js Tutorial

// https://www.youtube.com/watch?v=W1-ej3Wu5zg&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=33

let bubble1;
let bubble2;

function setup() {
    createCanvas(600, 400);
    bubble1 = new Bubble(200, 200);
    bubble2 = new Bubble(300, 200, 100);
}

function draw() {
    background(0);

    if (bubble1.intersects(bubble2)) {
            background(200, 0, 100);
    }

    bubble1.show();
    bubble2.show();
    bubble1.move();
    //bubble2.move();
    bubble2.x = mouseX;
    bubble2.y = mouseY;
}

class Bubble {
    constructor(x, y, r = 50) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }

    changeColour() {
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
