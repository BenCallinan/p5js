// Aim: Use classes to create pattern with circle, line, square and triangle

// Last worked on Tuesday 22 February 2022, 7:10am

let rounds = []; // circle
let sticks = []; // line
let boxes = []; // square
let tris = []; // triangle

function setup() {
    createCanvas(450, 450);

    for (let i = 0; i < 4; i++) {

        // Draws cicles
        let y = 60 + 110 * i;
        rounds[i] = new Round(60, y, 100);

        // Draws lines
        let y1 = 60 + 110 * i;
        let y2 = 60 + 110 * i;
        sticks[i] = new Stick(120, y1, 220, y2);

        // Draws squares
        let y3 = 60 + 110 * i;
        boxes[i] = new Box(280, y3, 100, 100);

        // Draws triangles
        let y4 = 110 + 110 * i;
        let y5 = 10 + 110 * i;
        let y6 = 110 + 110 * i;
        tris[i] = new Tri(340, y4, 390, y5, 440, y6);

    }
}


function draw() {
    background(0);

    for (let i = 0; i < rounds.length; i++) {
        rounds[i].show();
        sticks[i].show();
        boxes[i].show();
        tris[i].show();
    }
}

class Round {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    show() {
        noFill(0);
        stroke(255, 0, 0);
        strokeWeight(5);
        ellipse(this.x, this.y, this.r);
    }
}

class Stick {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    show() {
        stroke(0, 255, 0);
        strokeWeight(5);
        line(this.x1, this.y1, this.x2, this.y2);
    }
}

class Box {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    show() {
        noFill(0);
        stroke(255, 255, 0);
        strokeWeight(5);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);
    }
}

class Tri {
    constructor(x1, y1, x2, y2, x3, y3) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
    }

    show() {
        noFill(0);
        stroke(0, 0, 255);
        strokeWeight(5);
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    }
}
