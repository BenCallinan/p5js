// Object orientated programming 2

// Aim: Create a class 'flower' and generate multiple flowers

let flower1;
let flower2;
let flower3;
let r, g, b;
let r1, g1, b1;

function setup() {
    createCanvas(600, 600);

    r = random(255);
    g = random(255);
    b = random(255);

    r1 = random(255);
    g1 = random(255);
    b1 = random(255);

    // Flower instances
    flower1 = new Flower(random(600), random(600));
    flower2 = new Flower(random(600), random(600));
    flower3 = new Flower(random(600), random(600));
}

function draw() {
    background(255);

    // Draws the flowers
    flower1.show();
    flower2.show();
    flower3.show();
}

class Flower {

    // Object setup
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {

        fill(r, g, b);

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
        fill(r1, g1, b1);
        circle(this.x, this.y, 100);
    }
}
