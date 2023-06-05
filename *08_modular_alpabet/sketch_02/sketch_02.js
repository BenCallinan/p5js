// Aim: Create a alphabet out of two elements - a curve and a line
// Alphabet position must not be hard coded

function setup() {
    createCanvas(800, 400);

    // Letter A
    aX = 20;
    aY = 120;
    acurve = new Curve(aX, aY, aX, aY, aX + 12.5, aY - 90, aX + 37.5, aY - 90, aX + 50, aY, aX + 50, aY);
    aline = new Line(aX + 6.25, aY - 50, aX + 43.75, aY - 50);

    // Letter B
    bX = 90;
    bY = 20;
    bline = new Line(bX, bY, bX, bY + 100);
    bcurve1 = new Curve(bX, bY, bX, bY, bX + 50, bY + 12.5, bX + 50, bY + 37.5, bX, bY + 50, bX, bY + 50);
    bcurve2 = new Curve(bX, bY + 50, bX, bY + 50, bX + 50, bY + 62.5, bX + 50, bY + 87.5, bX, bY + 100, bX, bY + 100);

    // Letter C
    cX = 220;
    cY = 20;
    ccurve = new Curve(cX, cY, cX, cY, cX - 50, cY + 25, cX - 50, cY + 75, cX, cY + 100, cX, cY + 100);

    // Letter D
    dX = 240;
    dY = 20;
    dline = new Line(dX, dY, dX, dY + 100);
    dcurve = new Curve(dX, dY, dX, dY, dX + 50, dY + 25, dX + 50, dY + 75, dX, dY + 100, dX, dY + 100);

    // Letter E
    eX = 370;
    eY = 20;
    ecurve = new Curve(eX, eY, eX, eY, eX - 50, eY + 25, eX - 50, eY + 75, eX, eY + 100, eX, eY + 100);
    eline = new Line(eX - 50, eY + 50, eX, eY + 50);

    // Letter F
    fX = 390;
    fY = 120;
    fline1 = new Line(fX, fY, fX, fY - 50);
    fline2 = new Line(fX, fY - 50, fX + 50, fY - 50);
    fcurve = new Curve(fX, fY - 50, fX, fY - 50, fX + 12.5, fY - 87.5, fX + 50, fY - 100, fX + 50, fY - 100);

    // Letter G
    gX = 510;
    gY = 20;
    gcurve = new Curve(gX, gY, gX, gY, gX - 50, gY + 25, gX - 50, gY + 75, gX, gY + 100, gX, gY + 100);
    gline = new Line(gX, gY + 50, gX, gY + 100);

    // Letter H
    hX = 530;
    hY = 20;
    hline1 = new Line(hX, hY, hX, hY + 100);
    hline2 = new Line(hX + 50, hY, hX + 50, hY + 100);
    hcurve = new Curve(hX, hY + 50, hX, hY + 50, hX + 12.5, hY + 62.5, hX + 37.5, hY + 62.5, hX + 50, hY + 50, hX + 50, hY + 50);

    // Letter I
    iX = 620;
    iY = 20;
    iline = new Line(iX, iY, iX, iY + 100);
    icurve1 = new Curve(iX - 25, iY + 6.25, iX - 25, iY + 6.25, iX - 12.5, iY, iX + 12.5, iY, iX + 25, iY + 6.25, iX + 25, iY + 6.25);
    icurve2 = new Curve(iX - 25, iY + 93.75, iX - 25, iY + 93.75, iX - 12.5, iY + 100, iX + 12.5, iY + 100, iX + 25, iY + 93.75, iX + 25, iY + 93.75);

    // Letter J
    jX = 710;
    jY = 20;
    jline = new Line(jX, jY, jX, jY + 50);
    jcurve = new Curve(jX, jY + 50, jX, jY + 50, jX - 6.25, jY + 93.75, jX - 43.75, jY + 93.75, jX - 50, jY + 50, jX - 50, jY + 50);
    
    // Letter K
    kX = 730;
    kY = 20;
    kline = new Line(kX, kY, kX, kY + 100);
    kcurve = new Curve(kX + 50, kY, kX + 50, kY, kX + 6.25, kY + 37.5, kX + 6.25, kY + 62.5, kX + 50, kY + 100, kX + 50, kY + 100);
    
    // Letter L
    lX = 20;
    lY = 140;
    lline = new Line(lX, lY, lX, lY + 100);
    lcurve = new Curve(lX, lY + 100, lX, lY + 100, lX + 43.75, lY + 100, lX + 50, lY + 87.5, lX + 50, lY + 87.5);
    
    // Letter M
    mX = 90;
    mY = 240;
    mcurve1 = new Curve(mX, mY, mX, mY, mX + 6.75, mY - 90, mX + 18.25, mY - 90, mX + 25, mY, mX + 25, mY);
    mcurve2 = new Curve(mX + 25, mY, mX + 25, mY, mX + 31.75, mY - 90, mX + 43.25, mY - 90, mX + 50, mY, mX + 50, mY);
    
    // Letter N
    nX = 160;
    nY = 140;
    ncurve = new Curve(nX, nY, nX, nY, nX + 12.5, nY + 12.5, nX + 37.5, nY + 87.5, nX + 50, nY + 100, nX + 50, nY + 100);
    nline1 = new Line(nX, nY, nX, nY + 100);
    nline2 = new Line(nX + 50, nY, nX + 50, nY + 100);
    
    // Letter O
    oX = 230;
    oY = 190;
    ocurve1 = new Curve(oX, oY, oX, oY, oX + 6.25, oY - 43.25, oX + 43.25, oY - 43.25, oX + 50, oY, oX + 50, oY);
    ocurve2 = new Curve(oX, oY, oX, oY, oX + 6.25, oY + 43.25, oX + 43.25, oY + 43.25, oX + 50, oY, oX + 50, oY);
    
    pX = 300;
    pY = 140;
    pline = new Line(pX, pY, pX, pY + 100);
    pcurve = new Curve(pX, pY, pX, pY, pX + 43.75, pY + 12.5, pX + 43.75, pY + 37.5, pX, pY + 50, pX, pY + 50);
    
    // Letter Q
    qX = 370;
    qY = 190;
    qcurve1 = new Curve(qX, qY, qX, qY, qX + 6.25, qY - 43.25, qX + 43.25, qY - 43.25, qX + 50, qY, qX + 50, qY);
    qcurve2 = new Curve(qX, qY, qX, qY, qX + 6.25, qY + 43.25, qX + 43.25, qY + 43.25, qX + 50, qY, qX + 50, qY);
    qline = new Line(qX + 25, qY, qX + 50, qY + 50);
    
    // Letter R
    rX = 440;
    rY = 140;
    rline1 = new Line(rX, rY, rX, rY + 100);
    rline2 = new Line(rX, rY + 50, rX + 50, rY + 100);
    rcurve = new Curve(rX, rY, rX, rY, rX + 43.75, rY + 12.5, rX + 43.75, rY + 37.5, rX, rY + 50, rX, rY + 50);

    // Letter S
    sX = 560;
    sY = 140;
    scurve1 = new Curve(sX, sY, sX, sY, sX - 50, sY + 12.5, sX - 50, sY + 37.5, sX - 25, sY + 50, sX - 25, sY + 50);
    scurve2 = new Curve(sX - 25, sY + 50, sX - 25, sY + 50, sX, sY + 62.5, sX, sY + 87.5, sX - 50, sY + 100, sX - 50, sY + 100);
    
    // Letter T
    tX = 600;
    tY = 140;
    tline = new Line(tX, tY, tX, tY + 100);
    tcurve = new Curve(tX - 25, tY + 6.25, tX - 25, tY + 6.25, tX - 12.5, tY, tX + 12.5, tY, tX + 25, tY + 6.25, tX + 25, tY + 6.25);
    
    // Letter U
    uX = 640;
    uY = 140;
    ucurve = new Curve(uX, uY, uX, uY, uX + 12.5, uY + 90, uX + 37.5, uY + 90, uX + 50, uY, uX + 50, uY);
    
    // Letter V
    vX = 710;
    vY = 140;
    vline = new Line(vX, vY, vX + 25, vY + 100);
    vcurve = new Curve(vX + 25, vY + 100, vX + 25, vY + 100, vX + 37.5, vY + 37.5, vX + 50, vY, vX + 50, vY);
    
    // Letter W
    wX = 20;
    wY = 260;
    wcurve1 = new Curve(wX, wY, wX, wY, wX + 6.75, wY + 90, wX + 18.25, wY + 90, wX + 25, wY, wX  + 25, wY);
    wcurve2 = new Curve(wX +25, wY, wX + 25, wY, wX + 31.75, wY + 90, wX + 43.25, wY + 90, wX + 50, wY, wX + 50, wY);
    
    // Letter X
    xX = 90;
    xY = 260;
    xcurve1 = new Curve(xX, xY, xX, xY, xX + 12.5, xY + 43.75, xX + 37.5, xY + 43.75, xX + 50, xY, xX + 50, xY);
    xcurve2 = new Curve(xX, xY + 100, xX, xY + 100, xX + 12.5, xY + 56.25, xX + 37.5, xY + 56.25, xX + 50, xY + 100, xX + 50, xY + 100);
    
    // Letter Y
    yX = 160;
    yY = 260;
    ycurve = new Curve(yX, yY, yX, yY, yX + 12.5, yY + 43.75, yX + 37.5, yY + 43.75, yX + 50, yY, yX + 50, yY);
    yline = new Line(yX + 25, yY + 50, yX + 25, yY + 100);
    
    // Letter Z
    zX = 230;
    zY = 260;
    zline = new Line(zX, zY, zX + 50, zY);
    zcurve = new Curve(zX + 50, zY, zX + 50, zY, zX, zY + 87.5, zX + 50, zY + 100, zX + 50, zY + 100);

}

function draw() {
    background(255);

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
    icurve1.show();
    icurve2.show();

    jline.show();
    jcurve.show();

    kline.show();
    kcurve.show();

    lline.show();
    lcurve.show();

    mcurve1.show();
    mcurve2.show();

    ncurve.show();
    nline1.show();
    nline2.show();

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
        stroke(0);
        //stroke(0, 0, 255);
        //strokeWeight(5);
        strokeWeight(10);
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
        stroke(0);
        //stroke(255, 0, 0);
        //strokeWeight(5);
        strokeWeight(5);
        line(this.x1, this.y1, this.x2, this.y2);
    }
}
