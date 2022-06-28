// Object orientated programming 3

// Happy Coding: Creating Classes
// https://happycoding.io/tutorials/p5js/creating-classes

let myCircle;

function setup() {
    createCanvas(300, 300);

    myCircle = new Circle(150, 150, 4, 8);
}

function draw() {
    background(50);
    myCircle.move();
    myCircle.display();
}

class Circle {
    constructor(xValue, yValue, xSpeedValue, ySpeedValue) {
        this.x = xValue;
        this.y = yValue;
        this.xSpeed = xSpeedValue;
        this.ySpeed = ySpeedValue;
    }

    move() {
        this.x += this.xSpeed;
        if (this.x < 0 || this.x > width) {
            this.xSpeed *= -1;
        }

        this.y += this.ySpeed;
        if (this.y < 0 || this.y > height) {
            this.ySpeed *= -1;
        }
    }

    display() {
        circle(this.x, this.y, 50);
    }
}
