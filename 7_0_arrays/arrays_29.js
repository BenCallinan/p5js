// 7.8: Objects and Images - p5.js Tutorial

// https://www.youtube.com/watch?v=i2C1hrJMwz0&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=36

let bubbles = [];

//let flower;
let bianca;

function preload() {
    //flower = loadImage('images/flower.png');
    bianca = loadImage('images/bianca.jpg')
}

function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < 10; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(1);
        //let bianca = random(bianca);
        let b = new Bubble(x, y, r);
        bubbles.push(b);
    }
}

function mousePressed() {
    for(let i = 0; i < bubbles.length; i++) {
        bubbles[i].clicked(mouseX, mouseY);
    }
}

function draw() {
    background(0);

    for(let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    clicked(px, py) {
        // let d = dist(px, py, this.x, this.y);
        // if (d < this.r) {
        if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) {
            this.bianca = flower;  //random(kittens);
        }
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        image(bianca, this.x, this.y);

        // stroke(255);
        // strokeWeight(4);
        // fill(this.brightness, 125);
        // ellipse(this.x, this.y, this.r*2);
    }
}
