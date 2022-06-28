// Arrays 19

// Aim: Circles that form where the mouse is pressed

let bubbles = [];

function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < 5; i++) {
        let x = random(300);
        let y = random(200);
        let r = random(10, 50);
        let b = new Bubble(x, y, r);
        bubbles.push(b);
    }
}

function draw() {
    background(0);

    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show(mouseX, mouseY);
    }
}

class Bubble {
    constructor(x, y, r, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.rd = 0;
        this.gn = 0;
        this.bl = 0;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }

    move() {
        this.x += this.xSpeed;
        if (this.x < 0) {
            this.xSpeed *= -1;
        }

        this.y += this.ySpeed;
        if(this.y < 0) {
            this.ySpeed *= -1;
        }
    }

    show(){

        stroke(255);
        strokeWeight(4);
        fill(this.rd, this.gn, this.bl);
        ellipse(this.x, this.y, this.r*2);
    }
}
