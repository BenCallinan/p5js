// Aim: Create elements that change between being big and being small

var txt = [];

let hugeBut;
var txtBig;
var txtSmall;
var txtHuge;

function setup() {
    for (var i = 0; i < 50; i++) {
        txtBig = createP('big');
        var x = floor(random(windowWidth));
        var y = floor(random(windowHeight));
        txtBig.position(x, y);
        txtBig.class('big');
        txtBig.mousePressed(getSmall);
        txt.push(txtBig);
    }

    for (var i = 0; i < 50; i++) {
        txtSmall = createP('small');
        var x = floor(random(windowWidth));
        var y = floor(random(windowHeight));
        txtSmall.position(x, y);
        txtSmall.class('small');
        txtSmall.mousePressed(getBig);
        txt.push(txtSmall);
    }

    var hugeBut = select('#hugeBut');
    hugeBut.mousePressed(makeHuge);

}

function getSmall() {
    this.removeClass('big');
    this.addClass('small');
}

function getBig() {
    this.removeClass('small');
    this.addClass('big');
}

function makeHuge() {
    for (var i = 0; i < txt.length; i++) {
        txt[i].addClass('huge');
    }
}
