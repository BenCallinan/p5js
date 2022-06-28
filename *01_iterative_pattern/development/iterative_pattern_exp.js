// Pattern resolved

let rounds = []; // circle
let sticks = []; // line
let boxes = []; // square
let tris = []; // triangle

let rounds1 = []; // circle
let sticks1 = []; // line
let boxes1 = []; // square
let tris1 = []; // triangle

let circTri = []; // triangle in circles
let sqrLne = []; // line in square
let circLne = []; // line in circle
let sqrTri = []; // triangle in square

let circTri1 = []; // triangle in circles
let sqrLne1 = []; // line in square
let circLne1 = []; // line in circle
let sqrTri1 = []; // triangle in square

function setup() {
    createCanvas(890, 890);

    // Shapes in the top left quadrant
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
        let y5 = 175 - 55 * i;
        let y6 = 220 - 55 * i;
        tris[i] = new Tri(172, y4, 195, y5, 218, y6);
    }

    // Shapes in the bottom right quadrant
    for (let k = 0; k < 4; k++) {

        // Draws cicles
        let x = 250 + 55 * k;
        rounds1[k] = new Round(x, 250);

        // Draws lines
        let x1 = 250 + 55 * k;
        let x2 = 250 + 55 * k;
        sticks1[k] = new Stick(x1, 280, x2, 330);

        // Draws squares
        let x3 = 250 + 55 * k;
        boxes1[k] = new Box(x3, 360);

        // Draws triangles
        let x4 = 225 + 55 * k;
        let x5 = 270 + 55 * k;
        let x6 = 225 + 55 * k;
        tris1[k] = new Tri (x4, 390, x5, 415, x6, 440);

    }

    // Shapes in the top right quadrant
    for (let m = 0; m < 4; m++) {

        // Draws a triangle in a circle
        let yc1 = 30 + 55 * m;
        let yt1 = 45 + 55 * m;
        let yt2 = 45 + 55 * m;
        let yt3 = 10.5 + 55 * m;
        circTri[m] = new CircTri(250, yc1, 235, yt1, 265, yt2, 250, yt3);

        // Draws a line in a square
        let ys1 = 30 + 55 * m;
        let yl1 = 30 + 55 * m;
        let yl2 = 30 + 55 * m;
        sqrLne[m] = new SqrLne(305, ys1, 280, yl1, 330, yl2)

        // Draws a line in a circle
        let yc2 = 30 + 55 * m;
        let yl3 = 30 + 55 * m;
        let yl4 = 30 + 55 * m;
        circLne[m] = new CircLne(360, yc2, 335, yl3, 385, yl4);

        // Draws a triangle in a sqaure
        let ys2 = 30 + 55 * m;
        let yt4 = 45 + 55 * m;
        let yt5 = 45 + 55 * m;
        let yt6 = 7.5 + 55 * m;
        sqrTri[m] = new SqrTri(415, ys2, 395, yt4, 435, yt5, 415, yt6);

        }

    // Shapes in the bottom left quadrant
    for (let p = 0; p < 4; p++) {

        // Draws a triangle in a circle
        let xc1 = 195 - 55 * p;
        let xt1 = 210 - 55 * p;
        let xt2 = 210 - 55 * p;
        let xt3 = 175 - 55 * p;
        circTri1[p] = new CircTri(xc1, 415, xt1, 400, xt2, 430, xt3, 415);

        // Draws a line in a square
        let xs1 = 195 - 55 * p;
        let xl1 = 195 - 55 * p;
        let xl2 = 195 - 55 * p;
        sqrLne1[p] = new SqrLne(xs1, 360, xl1, 335, xl2, 385);

        // Draws a line in a circle
        let xc2 = 195 - 55 * p;
        let xl3 = 195 - 55 * p;
        let xl4 = 195 - 55 * p;
        circLne1[p] = new CircLne(xc2, 305, xl3, 280, xl4, 330);

        // Draws a triangle in a sqaure
        let xs2 = 195 - 55 * p;
        let xt4 = 210 - 55 * p;
        let xt5 = 210 - 55 * p;
        let xt6 = 172.5 - 55 * p;
        sqrTri1[p] = new SqrTri(xs2, 250, xt4, 230, xt5, 270, xt6, 250);

        }
}


function draw() {
    background(150);

    // Shapes in the top left quadrant
    for (let i = 0; i < rounds.length; i++) {
        rounds[i].show();
        sticks[i].show();
        boxes[i].show();
        tris[i].show();
    }

    // Shapes in the bottom right quadrant
    for (let k = 0; k < rounds1.length; k++) {
        rounds1[k].show();
        sticks1[k].show();
        boxes1[k].show();
        tris1[k].show();
    }

    // Shapes in the top left quadrant
    for (let m = 0; m < circTri.length; m++) {
        circTri[m].show();
        sqrLne[m].show();
        circLne[m].show();
        sqrTri[m].show();
    }

    // Shapes in the bottom left quadrant
    for (let p = 0; p < circTri1.length; p++) {
        circTri1[p].show();
        sqrLne1[p].show();
        circLne1[p].show();
        sqrTri1[p].show();
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

class CircTri {
    constructor(xc1, yc1, xt1, yt1, xt2, yt2, xt3, yt3) {
        this.xc1 = xc1;
        this.yc1 = yc1;
        this.r = 50;
        this.xt1 = xt1;
        this.yt1 = yt1;
        this.xt2 = xt2;
        this.yt2 = yt2;
        this.xt3 = xt3;
        this.yt3 = yt3;
    }

    show() {
        stroke(0, 50, 100);
        strokeWeight(5);
        noFill();
        ellipse(this.xc1, this.yc1, this.r);
        triangle(this.xt1, this.yt1, this.xt2, this.yt2, this.xt3, this.yt3);
    }
}

class SqrLne {
    constructor(xs1, ys1, xl1, yl1, xl2, yl2) {
        this.xs1 = xs1;
        this.ys1 = ys1;
        this.w = 50;
        this.h = 50;
        this.xl1 = xl1;
        this.yl1 = yl1;
        this.xl2 = xl2;
        this.yl2 = yl2;
    }

    show() {
        stroke(0, 50, 100);
        strokeWeight(5);
        noFill();
        rectMode(CENTER);
        rect(this.xs1, this.ys1, this.w, this.h);
        line(this.xl1, this.yl1, this.xl2, this.yl2);
    }
}

class CircLne {
    constructor(xc2, yc2, xl3, yl3, xl4, yl4) {
        this.xc2 = xc2;
        this.yc2 = yc2;
        this.r = 50;
        this.xl3 = xl3;
        this.yl3 = yl3;
        this.xl4 = xl4;
        this.yl4 = yl4;
    }

    show() {
        stroke(0, 50, 100);
        strokeWeight(5);
        noFill();
        ellipse(this.xc2, this.yc2, this.r);
        line(this.xl3, this.yl3, this.xl4, this.yl4);
    }
}

class SqrTri {
    constructor(xs2, ys2, xt4, yt4, xt5, yt5, xt6, yt6) {
        this.xs2 = xs2;
        this.ys2 = ys2;
        this.w = 50;
        this.h = 50;
        this.xt4 = xt4;
        this.yt4 = yt4;
        this.xt5 = xt5;
        this.yt5 = yt5;
        this.xt6 = xt6;
        this.yt6 = yt6;
    }

    show() {
        stroke(0, 50, 100);
        strokeWeight(5);
        noFill();
        rectMode(CENTER);
        rect(this.xs2, this.ys2, this.w, this.h);
        triangle(this.xt4, this.yt4, this.xt5, this.yt5, this.xt6, this.yt6);
    }
}
