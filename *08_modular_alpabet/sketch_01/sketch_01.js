// Aim: Create a alphabet out of two elements - a curve and a line

function setup() {
    createCanvas(800, 400);

    // Letter A
    acurve = new Curve(5, 110, 5, 110, 17.5, 20, 47.5, 20, 55, 110, 55, 110);
    aline = new Line(10, 60, 50, 60);

    // Letter B
    bline = new Line(90, 10, 90, 110);
    bcurve1 = new Curve(90, 10, 90, 10, 140, 22.5, 140, 47.5, 90, 60, 90, 60);
    bcurve2 = new Curve(90, 60, 90, 60, 140, 72.5, 140, 97.5, 90, 110, 90, 110);

    // Letter C
    ccurve = new Curve(215, 10, 215, 10, 165, 35, 165, 85, 215, 110, 215, 110);

    // Letter D
    dline = new Line(230, 10, 230, 110);
    dcurve = new Curve(230, 10, 230, 10, 280, 35, 280, 85, 230, 110, 230, 110);

    // Letter E
    ecurve = new Curve(355, 10, 355, 10, 305, 35, 305, 85, 355, 110, 355, 110)
    eline = new Line(300, 60, 360, 60);

    // Letter F
    fline1 = new Line(375, 60, 375, 110);
    fline2 = new Line(375, 60, 425, 60);
    fcurve = new Curve(375, 60, 375, 60, 387.5, 22.5, 412.5, 10, 425, 22.5, 425, 22.5);

    // Letter G
    gcurve = new Curve(490, 10, 490, 10, 440, 35, 440, 85, 490, 110, 490, 110);
    gline = new Line(490, 60, 490, 110);

    // Letter H
    hline1 = new Line(505, 10, 505, 110);
    hline2 = new Line(555, 10, 555, 110);
    hcurve = new Curve(505, 60, 505, 60, 517.5, 70, 542.5, 70, 555, 60, 555, 60);

    // Letter I
    iline = new Line(570, 10, 570, 110);

    // Letter J
    jline = new Line(635, 10, 635, 60);
    jcurve = new Curve(585, 60, 585, 60, 597.5, 105, 622.5, 105, 635, 60, 635, 60);

    // Letter K
    kline = new Line(650, 10, 650, 110);
    kcurve = new Curve(700, 10, 700, 10, 659, 35, 659, 85, 700, 110, 700, 110);

    // Letter L
    lline = new Line(715, 10, 715, 60);
    lcurve = new Curve(715, 60, 715, 60, 727.5, 105, 752.5, 105, 765, 85, 765, 85);

    // Letter M
    mcurve1 = new Curve(5, 225, 5, 225, 11.25, 135, 23.75, 135, 30, 225, 30, 225);
    mcurve2 = new Curve(30, 225, 30, 225, 36.25, 135, 48.75, 135, 55, 225, 55, 225);

    // Letter N
    ncurve = new Curve(70, 225, 70, 225, 82.5, 135, 117.5, 135, 120, 225, 120, 225);

    // Letter O
    ocurve1 = new Curve(135, 175, 135, 175, 147.5, 130, 172.5, 130, 185, 175, 185, 175)
    ocurve2 = new Curve(135, 175, 135, 175, 147.5, 220, 172.5, 220, 185, 175, 185, 175);

    // Letter P
    pline = new Line(200, 125, 200, 225);
    pcurve = new Curve(200, 125, 200, 125, 245, 137.5, 245, 162.5, 200, 175, 200, 175);

    // Letter Q
    qcurve1 = new Curve(265, 175, 265, 175, 277.5, 130, 302.5, 130, 315, 175, 315, 175)
    qcurve2 = new Curve(265, 175, 265, 175, 277.5, 220, 302.5, 220, 315, 175, 315, 175);
    qline = new Line(290, 175, 315, 225);

    // Letter R
    rline1 = new Line(330, 125, 330, 225);
    rline2 = new Line(330, 175, 380, 225);
    rcurve = new Curve(330, 125, 330, 125, 375, 137.5, 375, 162.5, 330, 175, 330, 175);

    // Letter S
    scurve1 = new Curve(445, 125, 445, 125, 395, 132.5, 395, 162.5, 420, 175, 420, 175);
    scurve2 = new Curve(420, 175, 420, 175, 445, 187.5, 445, 212.5, 395, 225, 395, 225);

    // Letter T
    tline = new Line(485, 125, 485, 225);
    tcurve = new Curve(460, 135, 460, 135, 472.5, 125, 497.5, 125, 510, 135, 510, 135);

    // Letter U
    ucurve = new Curve(525, 125, 525, 125, 537.5, 215, 562.5, 215, 575, 125, 575, 125);

    // Letter V
    vline = new Line(590, 125, 615, 225);
    vcurve = new Curve(615, 225, 615, 225, 627.5, 160, 640, 125, 640, 125);

    // Letter W
    wcurve1 = new Curve(655, 125, 655, 125, 661.25, 215, 673.75, 215, 680, 125, 680, 125);
    wcurve2 = new Curve(680, 125, 680, 125, 686.25, 215, 698.75, 215, 705, 125, 705, 125);

    // Letter X
    xcurve1 = new Curve(720, 125, 720, 125, 732.5, 170, 757.5, 170, 770, 125, 770, 125);
    xcurve2 = new Curve(720, 225, 720, 225, 732.5, 180, 757.5, 180, 770, 225, 770, 225);

    // Letter Y
    yline = new Line(30, 290, 30, 340);
    ycurve = new Curve(5, 240, 5, 240, 17.5, 285, 42.5, 285, 55, 240, 55, 240);

    // Letter Z
    zline = new Line(70, 240, 120, 240);
    zcurve = new Curve(120, 240, 120, 240, 70, 315, 120, 340, 120, 340);

}

function draw() {
    background(0);

    acurve.show();
    aline.show();

    bline.show();
    bcurve1.show();
    bcurve2.show();

    ccurve.show();

    dline.show();
    dcurve.show();

    ecurve.show();
    eline.show();

    fline1.show();
    fline2.show();
    fcurve.show();

    gcurve.show();
    gline.show();

    hline1.show();
    hline2.show();
    hcurve.show();

    iline.show();

    jline.show();
    jcurve.show();

    kline.show();
    kcurve.show();

    lline.show();
    lcurve.show();

    mcurve1.show();
    mcurve2.show();

    ncurve.show();

    ocurve1.show();
    ocurve2.show();

    pline.show();
    pcurve.show();

    qcurve1.show();
    qcurve2.show();
    qline.show();

    rline1.show();
    rline2.show();
    rcurve.show();

    scurve1.show();
    scurve2.show();

    tline.show();
    tcurve.show();

    ucurve.show();

    vline.show();
    vcurve.show();

    wcurve1.show();
    wcurve2.show();

    xcurve1.show();
    xcurve2.show();

    yline.show();
    ycurve.show();

    zline.show();
    zcurve.show();
}

class Curve {
    constructor(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
        this.x4 = x4;
        this.y4 = y4;
        this.x5 = x5;
        this.y5 = y5;
        this.x6 = x6;
        this.y6 = y6;
    }

    show() {
        noFill();
        stroke(255);
        //stroke(0, 0, 255);
        //strokeWeight(5);
        strokeWeight(8);
        beginShape();
        curveVertex(this.x1, this.y1);
        curveVertex(this.x2, this.y2);
        curveVertex(this.x3, this.y3);
        curveVertex(this.x4, this.y4);
        curveVertex(this.x5, this.y5);
        curveVertex(this.x6, this.y6);
        endShape();
    }
}

class Line {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    show() {
        stroke(255);
        //stroke(255, 0, 0);
        //strokeWeight(5);
        strokeWeight(8);
        line(this.x1, this.y1, this.x2, this.y2);
    }
}
