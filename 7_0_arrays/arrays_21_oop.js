// 7.5: Removing Objects from Arrays - p5.js Tutorial

// https://www.youtube.com/watch?v=tA_ZgruFF9k&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=32

let bubbles = [];

function setup() {
    createCanvas(600, 400);
}

function mouseDragged() {
        let r = 40;
        let b = new Bubble(mouseX, mouseY, r);
        bubbles.push(b);
}

function draw() {
    background(0);

    for(let i = 0; i < bubbles.length; i++) {
        if (bubbles[i].contains(mouseX, mouseY)) {
            bubbles[i].changeColour(255);
        } else {
            bubbles[i].changeColour(0);
        }
        bubbles[i].move();
        bubbles[i].show();
    }

    if (bubbles.length > 5) {
        bubbles.splice(0, 1);
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
        if (d < this.r) {
            return true;
        } else{
            return false;
        }
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        fill(this.brightness, 125);
        ellipse(this.x, this.y, this.r*2);
    }
}
