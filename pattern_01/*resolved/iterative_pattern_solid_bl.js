// Iterative Pattern

// Shapes have random sizes

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
    createCanvas(445, 445);

    for (let i = 0; i < 8; i++) {

        // Draws cicles
        let y = 30 + 55 * i;
        rounds[i] = new Round(30, y);

        // Draws lines
        let y1 = 30 + 55 * i;
        let y2 = 30 + 55 * i;
        sticks[i] = new Stick(random(60, 110), y1, random(110, 60), y2);

        // Draws squares
        let y3 = 30 + 55 * i;
        boxes[i] = new Box(140, y3);

        // Draws triangles
        let y4 = 55 + 55 * i;
        let y5 = 10 + 55 * i;
        let y6 = 55 + 55 * i;
        //tris[i] = new Tri(170, y4, 195, y5, 220, y6);
        tris[i] = new Tri(random(170, 190), y4, 195, y5, random(200, 220), y6);

        // Shapes in the top right quadrant

        // Draws a triangle in a circle
        let yc1 = 30 + 55 * i;
        let yt1 = 45 + 55 * i;
        let yt2 = 45 + 55 * i;
        let yt3 = 10.5 + 55 * i;
        //circTri[i] = new CircTri(250, yc1, 235, yt1, 265, yt2, 250, yt3);
        circTri[i] = new CircTri(250, yc1, random(235, 245), yt1, random(255, 265), yt2, 250, yt3);

        // Draws a line in a square
        let ys1 = 30 + 55 * i;
        let yl1 = 30 + 55 * i;
        let yl2 = 30 + 55 * i;
        sqrLne[i] = new SqrLne(305, ys1, random(280, 330), yl1, random(280, 330), yl2)

        // Draws a line in a circle
        let yc2 = 30 + 55 * i;
        let yl3 = 30 + 55 * i;
        let yl4 = 30 + 55 * i;
        circLne[i] = new CircLne(360, yc2, random(335, 385), yl3, random(335, 385), yl4);

        // Draws a triangle in a sqaure
        let ys2 = 30 + 55 * i;
        let yt4 = 45 + 55 * i;
        let yt5 = 45 + 55 * i;
        let yt6 = 7.5 + 55 * i;
        //sqrTri[i] = new SqrTri(415, ys2, 395, yt4, 435, yt5, 415, yt6);
        sqrTri[i] = new SqrTri(415, ys2, random(395, 405), yt4, random(425, 435), yt5, 415, yt6);
    }
}


function draw() {
    background(0);

    for (let i = 0; i < rounds.length; i++) {

        // Shapes in the top left quadrant
        rounds[i].show();
        sticks[i].show();
        boxes[i].show();
        tris[i].show();

        // Shapes in the top right quadrant
        circTri[i].show();
        sqrLne[i].show();
        circLne[i].show();
        sqrTri[i].show();
    }
}

class Round {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = random(10, 50);
        this.rd = random(255);
        this.gn = random(255);
        this.bl = 255;
        this.rd1 = random(255);
        this.gn1 = random(255);
        this.bl1 = 255;
    }

    show() {
        stroke(this.rd, this.gn, this.bl);
        strokeWeight(5);
        fill(this.rd1, this.gn1, this.bl1)
        ellipse(this.x, this.y, this.r);
    }
}

class Stick {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.rd = random(255);
        this.gn = random(255);
        this.bl = 255;
    }

    show() {
        stroke(this.rd, this.gn, this.bl);
        strokeWeight(5);
        line(this.x1, this.y1, this.x2, this.y2);
    }
}

class Box {
    constructor(x3, y3, w, h) {
        this.x3 = x3;
        this.y3 = y3;
        this.w = random(10, 50);
        this.h = random(10, 50);
        this.rd = random(255);
        this.gn = random(255);
        this.bl = 255;
        this.rd1 = random(255);
        this.gn1 = random(255);
        this.bl1 = 255;
    }

    show() {
        stroke(this.rd, this.gn, this.bl);
        fill(this.rd1, this.gn1, this.bl1)
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
        this.rd = random(255);
        this.gn = random(255);
        this.bl = 255;
        this.rd1 = random(255);
        this.gn1 = random(255);
        this.bl1 = 255;
    }

    show() {
        stroke(this.rd, this.gn, this.bl);
        strokeWeight(5);
        fill(this.rd1, this.gn1, this.bl1)
        triangle(this.x4, this.y4, this.x5, this.y5, this.x6, this.y6);
    }
}

class CircTri {
    constructor(xc1, yc1, xt1, yt1, xt2, yt2, xt3, yt3) {
        this.xc1 = xc1;
        this.yc1 = yc1;
        this.r = random(10, 50);
        this.xt1 = xt1;
        this.yt1 = yt1;
        this.xt2 = xt2;
        this.yt2 = yt2;
        this.xt3 = xt3;
        this.yt3 = yt3;
        this.rd = random(255);
        this.gn = random(255);
        this.bl = 255;
        this.rd1 = random(255);
        this.gn1 = random(255);
        this.bl1 = 255;
        this.rd2 = random(255);
        this.gn2 = random(255);
        this.bl2 = 255;
        this.rd3 = random(255);
        this.gn3 = random(255);
        this.bl3 = 255;
    }

    show() {
        stroke(this.rd, this.gn, this.bl);
        strokeWeight(5);
        fill(this.rd1, this.gn1, this.bl1)
        ellipse(this.xc1, this.yc1, this.r);
        stroke(this.rd2, this.gn2, this.bl2);
        fill(this.rd3, this.gn3, this.bl3)
        triangle(this.xt1, this.yt1, this.xt2, this.yt2, this.xt3, this.yt3);
    }
}

class SqrLne {
    constructor(xs1, ys1, xl1, yl1, xl2, yl2) {
        this.xs1 = xs1;
        this.ys1 = ys1;
        this.w = random(10, 50);
        this.h = random(10, 50);
        this.xl1 = xl1;
        this.yl1 = yl1;
        this.xl2 = xl2;
        this.yl2 = yl2;
        this.rd = random(255);
        this.gn = random(255);
        this.bl = 255;
        this.rd1 = random(255);
        this.gn1 = random(255);
        this.bl1 = 255;
    }

    show() {
        strokeWeight(5);
        rectMode(CENTER);
        rect(this.xs1, this.ys1, this.w, this.h);
        stroke(this.rd1, this.gn1, this.bl1);
        strokeWeight(5);
        line(this.xl1, this.yl1, this.xl2, this.yl2);
    }
}

class CircLne {
    constructor(xc2, yc2, xl3, yl3, xl4, yl4) {
        this.xc2 = xc2;
        this.yc2 = yc2;
        this.r = random(10, 50);
        this.xl3 = xl3;
        this.yl3 = yl3;
        this.xl4 = xl4;
        this.yl4 = yl4;
        this.rd = random(255);
        this.gn = random(255);
        this.bl = 255;
        this.rd1 = random(255);
        this.gn1 = random(255);
        this.bl1 = 255;
    }

    show() {
        stroke(this.rd, this.gn, this.bl);
        ellipse(this.xc2, this.yc2, this.r);
        stroke(this.rd1, this.gn1, this.bl1);
        strokeWeight(5);
        line(this.xl3, this.yl3, this.xl4, this.yl4);
    }
}

class SqrTri {
    constructor(xs2, ys2, xt4, yt4, xt5, yt5, xt6, yt6) {
        this.xs2 = xs2;
        this.ys2 = ys2;
        this.w = random(10, 50);
        this.h = random(10, 50);
        this.xt4 = xt4;
        this.yt4 = yt4;
        this.xt5 = xt5;
        this.yt5 = yt5;
        this.xt6 = xt6;
        this.yt6 = yt6;
        this.rd = random(255);
        this.gn = random(255);
        this.bl = 255;
        this.rd1 = random(255);
        this.gn1 = random(255);
        this.bl1 = 255;
        this.rd2 = random(255);
        this.gn2 = random(255);
        this.bl2 = 255;
        this.rd3 = random(255);
        this.gn3 = random(255);
        this.bl3 = 255;
    }

    show() {
        stroke(this.rd, this.gn, this.bl);
        strokeWeight(5);
        fill(this.rd1, this.gn1, this.bl1);
        rectMode(CENTER);
        rect(this.xs2, this.ys2, this.w, this.h);
        stroke(this.rd2, this.gn2, this.bl2);
        fill(this.rd3, this.gn3, this.bl2)
        triangle(this.xt4, this.yt4, this.xt5, this.yt5, this.xt6, this.yt6);
    }
}
