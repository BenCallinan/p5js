// Shape packing with p5.js

// https://mary.codes/blog/art/shape_packing_with_p5js/

let c,
    bg;
    shape_array = [],
    kills = 0;

function setup() {
    createCanvas(1280, 1280);
    c = '#f3e5dc'
    bg = color('#142b42');
    background(bg);
}

class Shape {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.r = radius;
    }

    draw() {
        stroke(c);
        strokeWeight(1);
        noFill();
        circle(this.x, this.y, this.r * 2);
    }

    grow() {
        this.r++
        this.draw();
    }
}

function detectEdgeCollision(shape) {
    if (
        dist(shape.x, shape.y, 0, shape.y) <= shape.r ||
        dist(shape.x, shape.y, width, shape.y) <= shape.r ||
        dist(shape.x, shape.y, shape.x, 0) <= shape.r ||
        dist(shape.x, shape.y, shape.x, height) <= shape.r
    ) {
        return true;
    }
    return false;
}

function detectShapeCollision(shape, array) {
    for (let i = 0; i < array.length; i++) {
        let shape2 = array[i];
        let distance = dist(shape.x, shape.y, shape2.x, shape2.y);
        if (distance !== 0 && distance <= shape.r + shape2.r) {
            if (shape.r === 1) {
                array.pop();
            }
            return true;
        }
    }
    return false;
}

function draw() {
    background(bg);

    let shape = new Shape(random(0, width), random(0, height), 1);
    shape_array.push(shape);
    for (let s of shape_array) {
        if (detectEdgeCollision(s)) {
            s.draw();
        } else if (detectShapeCollision(s, shape_array)) {
            if (s.r > 1) {
                s.draw();
            }
        } else {
            s.grow();
        }
    }

    if (kills > 10000) {
        console.log('stopped')
        noLoop();
    }
}
