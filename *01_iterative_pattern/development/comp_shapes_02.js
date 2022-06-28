// Complex Shapes 2

// Aim: Use classes to turn compex shapes into a pattern

let circTri = [];
let sqrLne = [];
let circLne = [];
let sqrTri = [];

function setup() {
    createCanvas(450, 450);

    for (let i = 0; i < 4; i++) {
        let yc1 = 60 + 110 * i;
        let yt1 = 90 + 110 * i;
        let yt2 = 90 + 110 * i;
        let yt3 = 15 + 110 * i;
        circTri[i] = new CircTri(60, yc1, 25, yt1, 95, yt2, 60, yt3);

        let ys1 = 60 + 110 * i;
        let yl1 = 60 + 110 * i;
        let yl2 = 60 + 110 * i;
        sqrLne[i] = new SqrLne(170, ys1, 125, yl1, 215, yl2)

        let yc2 = 60 + 110 * i;
        let yl3 = 60 + 110 * i;
        let yl4 = 60 + 110 * i;
        circLne[i] = new CircLne(280, yc2, 235, yl3, 325, yl4);

        let ys2 = 60 + 110 * i;
        let yt4 = 90 + 110 * i;
        let yt5 = 90 + 110 * i;
        let yt6 = 15 + 110 * i;
        sqrTri[i] = new SqrTri(390, ys2, 345, yt4, 435, yt5, 390, yt6);
    }
}

function draw() {
    background(0);

    for (let i = 0; i < circTri.length; i++) {
        circTri[i].show();
        sqrLne[i].show();
        circLne[i].show();
        sqrTri[i].show();
    }
}

class CircTri {
    constructor(xc1, yc1, xt1, yt1, xt2, yt2, xt3, yt3) {
        this.xc1 = xc1;
        this.yc1 = yc1;
        this.r = 100;
        this.xt1 = xt1;
        this.yt1 = yt1;
        this.xt2 = xt2;
        this.yt2 = yt2;
        this.xt3 = xt3;
        this.yt3 = yt3;
    }

    show() {
        stroke(255);
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
        this.w = 100;
        this.h = 100;
        this.xl1 = xl1;
        this.yl1 = yl1;
        this.xl2 = xl2;
        this.yl2 = yl2;
    }

    show() {
        stroke(255);
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
        this.r = 100;
        this.xl3 = xl3;
        this.yl3 = yl3;
        this.xl4 = xl4;
        this.yl4 = yl4;
    }

    show() {
        stroke(255);
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
        this.w = 100;
        this.h = 100;
        this.xt4 = xt4;
        this.yt4 = yt4;
        this.xt5 = xt5;
        this.yt5 = yt5;
        this.xt6 = xt6;
        this.yt6 = yt6;
    }

    show() {
        stroke(255);
        strokeWeight(5);
        noFill();
        rectMode(CENTER);
        rect(this.xs2, this.ys2, this.w, this.h);
        triangle(this.xt4, this.yt4, this.xt5, this.yt5, this.xt6, this.yt6);
    }
}
