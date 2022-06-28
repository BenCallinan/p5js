// Arrays 23

// Aim: Burst beautiful bubbles

let bubbles = [];

function setup() {
    createCanvas(600, 400);

    for(let i = 0; i < 100; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 50);
        let b = new Bubble(x, y, r);
        bubbles.push(b);
    }
}

function mousePressed() {
    for(let i = bubbles.length -1; i >= 0; i--) {
        if (bubbles[i].hover(mouseX, mouseY)) {
            bubbles.splice(i, 1);
        }
    }
}

function draw() {
    background(0, 51, 102);

    for(let i = 0; i < bubbles.length; i++) {
        if (bubbles[i].hover(mouseX, mouseY)) {
            bubbles[i].changeColour(0, 100, 152, 100);
        } else {
            bubbles[i].changeColour(153, 204, 255, 100);
        }

        bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.rd = 153;
        this.gn = 204;
        this.bl = 255;
        this.al = 100;
    }

    changeColour(rd, gn, bl, al) {
        this.rd = rd;
        this.gn = gn;
        this.bl = bl;
        this.al = al;
    }

    hover(hx, hy) {
        let d = dist(hx, hy, this.x, this.y);
        if (d < this.r) {
            return true;
        } else {
            return false;
        }
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(0.5);
        fill(this.rd, this.gn, this.bl, this.al);
        ellipse(this.x, this.y, this.r*2);
    }
}
