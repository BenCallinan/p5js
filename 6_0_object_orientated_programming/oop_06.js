// Object orientated programming 2

// Aim: Create a class 'flower' and generate multiple flowers

let flower1;
let flower2;
let flower3;
let value = 0;

function setup() {
    createCanvas(600, 600);

    // Flower instances
    flower1 = new Flower(random(600), random(600), random(255), random(255), random(255), random(255), random(255), random(255));
    flower2 = new Flower(random(600), random(600), random(255), random(255), random(255), random(255), random(255), random(255));
    flower3 = new Flower(random(600), random(600), random(255), random(255), random(255), random(255), random(255), random(255));
}

function draw() {
    background(255);

    flower1.show();
    flower2.show();
    flower3.show();
}

class Flower {

    // Object setup
    constructor(x, y, r, g, b, pR, pG, pB) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.g = g;
        this.b = b;
        this.pR = pR;
        this.pG = pG;
        this.pB = pB;
    }

    show() {

        fill(this.r, this.g, this.b);

        // Upper-left petal
        circle(this.x - 50, this.y - 50, 100);

        // Upper-right petal
        circle(this.x + 50, this.y - 50, 100);

        // Lower-left petal
        circle(this.x - 50, this.y + 50, 100);

        // Lower-right petal
        circle(this.x + 50, this.y + 50, 100);

        // Centre petal
        strokeWeight(3);
        fill(this.pR, this.pG, this.pB);
        circle(this.x, this.y, 100);
    }
}
