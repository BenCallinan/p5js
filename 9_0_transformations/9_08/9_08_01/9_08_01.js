// Aim: Create moving circles that don't overlap with each other

let circles = [];

function setup() {
    createCanvas(640, 360);

    for (let i = 0; i < 5; i++) {
        let x = random(width);
        let y = random(height);
        let r = 36;
        circles[i] = new Circle(x, y, r);
        circle = circles[i];
    }



        let overlapping = false;
        for (let j = 0; j < circles.length; j++) {
            let other = circles[j];
            let d = dist(circle.x, circle.y, other.x, other.y);
            if (d < circle.r + other.r) {
                overlapping = true;
                    break;
            }
        }

    if (!overlapping) {
        circles.push(circle);
    }
}

function draw() {
    background(255);

    for (let c of circles) {
        c.move();
        c.show();
        let touching = false;
        for (let other of circles) {
            if (c !== other && c.intersects(other)) {
                touching = true;
            }
        }
        if (touching) {
            c.changeColour(255, 100, 100);
        } else {
            c.changeColour(128, 255, 0);
        }
    }
}

class Circle {
    constructor(x, y, r = 36) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.red = 0;
        this.green = 0;
        this.blue = 0;
    }

    changeColour(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    intersects(other) {
        let d = dist(this.x, this.y, other.x, other.y)
        return (d < this.r + other.r);
    }

    move() {
        this.x += random(-0.1, 0.1);
        this.y += random(-0.1, 0.1);
    }

    show() {
        stroke(0);
        fill(this.red, this.green, this.blue);
        ellipse(
            this.x,
            this.y,
            this.r*2,
            this.r*2
        );
    }
}
