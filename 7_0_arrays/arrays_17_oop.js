// Arrays 17

// Aim: Bubbles change colour when mouse hovers

// Not working, bubbles don't permenantly change colour

// Last worked on Wednesday 9 Febuary 2022, 7:10am

let bubbles = [];

function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < 5; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 50);
        let b = new Bubble(x, y, r);
        bubbles.push(b);
    }
}

// function mousePressed() {
//     for (let i = 0; i < bubbles.length; i++) {
//         if (bubbles[i].contains(mouseX, mouseY)) {
//             bubbles[i].changeColour(0, 0, 255);
//         }
//     }
// }

function draw() {
    background(0);

        for (let i = 0; i < bubbles.length; i++) {
            if (bubbles[i].contains(mouseX, mouseY)) {
                bubbles[i].changeColour(0, 255, 0);
            } else if (mouseIsPressed){
                bubbles[i].changeColour(0, 0, 255);
            } else {
                bubbles[i].changeColour(255, 0, 0)
            }
            bubbles[i].move();
            bubbles[i].show(mouseX, mouseY);
        }

}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.rd = 255;
        this.gn = 0;
        this.bl = 0;
    }

    changeColour(rd, gn, bl) {
        this.rd = rd;
        this.gn = gn;
        this.bl = bl;
    }

    contains(x, y) {
        let d = dist(x, y, this.x, this.y);
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

    show(x, y){
        stroke(255);
        strokeWeight(4);
        fill(this.rd, this.gn, this.bl);
        ellipse(this.x, this.y, this.r*2);
    }
}
