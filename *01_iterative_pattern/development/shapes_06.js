// Aim: Create a pattern with two sets of each shape

let rounds = []; // circle
let sticks = []; // line
let boxes = []; // square
let tris = []; // triangle

let rounds1 = []; // circle
let sticks1 = []; // line
let boxes1 = []; // square
let tris1 = []; // triangle

function setup() {
    createCanvas(450, 450);

    for (let i = 0; i < 4; i++) {

        // Draws cicles
        let y = 195 - 55 * i;
        rounds[i] = new Round(30, y);

        // Draws lines
        let y1 = 195 - 55 * i;
        let y2 = 195 - 55 * i;
        sticks[i] = new Stick(60, y1, 110, y2);

        // Draws squares
        let y3 = 195 - 55 * i;
        boxes[i] = new Box(140, y3);

        // Draws triangles
        let y4 = 220 - 55 * i;
        let y5 = 170 - 55 * i;
        let y6 = 220 - 55 * i;
        tris[i] = new Tri(170, y4, 195, y5, 220, y6);

    }

    for (let k = 0; k < 4; k++) {

        // Draws cicles
        let x = 255 + 55 * k;
        rounds1[k] = new Round(x, 250);

        // Draws lines
        let x1 = 255 + 55 * k;
        let x2 = 255 + 55 * k;
        sticks1[k] = new Stick(x1, 280, x2, 330);

        // Draws squares
        let x3 = 255 + 55 * k;
        boxes1[k] = new Box(x3, 360);

        // Draws triangles
        let x4 = 230 + 55 * k;
        let x5 = 280 + 55 * k;
        let x6 = 230 + 55 * k;
        tris1[k] = new Tri (x4, 390, x5, 415, x6, 440);

    }
}


function draw() {
    background(100);

    for (let i = 0; i < rounds.length; i++) {
        rounds[i].show();
        sticks[i].show();
        boxes[i].show();
        tris[i].show();
    }

    for (let k = 0; k < rounds.length; k++) {
        rounds1[k].show();
        sticks1[k].show();
        boxes1[k].show();
        tris1[k].show();
    }

}

class Round {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = 50;
    }

    show() {
        noFill(0);
        stroke(0, 50, 100);
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
        stroke(0, 50, 100);
        strokeWeight(5);
        line(this.x1, this.y1, this.x2, this.y2);
    }
}

class Box {
    constructor(x3, y3, w, h) {
        this.x3 = x3;
        this.y3 = y3;
        this.w = 50;
        this.h = 50;
    }

    show() {
        noFill(0);
        stroke(0, 50, 100);
        strokeWeight(5);
        rectMode(CENTER);
        rect(this.x3, this.y3, this.w, this.h);
    }
}

class Tri {
    constructor(x4, y4, x5, y5, x6, y6) {
        this.x4 = x4;
        this.y4 = y4;
        this.x5 = x5;
        this.y5 = y5;
        this.x6 = x6;
        this.y6 = y6;
    }

    show() {
        noFill(0);
        stroke(0, 50, 100);
        strokeWeight(5);
        triangle(this.x4, this.y4, this.x5, this.y5, this.x6, this.y6);
    }
}
