// Aim: Create a list of European cities with images

var lonTxt;
var parTxt;
var romTxt;
var berTxt;
var amsTxt;

function setup() {
    noCanvas();

    var lonBut = select('#lonbutton');
    lonBut.mousePressed(lonChange);

    var parBut = select('#parbutton');
    parBut.mousePressed(parChange);

    var romBut = select('#rombutton');
    romBut.mousePressed(romChange);

    var berBut = select('#berbutton');
    berBut.mousePressed(berChange);

    var amsBut = select('#amsbutton');
    amsBut.mousePressed(amsChange);

    lonTxt = select('#london');
    parTxt = select('#paris');
    romTxt = select('#rome');
    berTxt = select('#berlin');
    amsTxt = select('#amsterdam');

    lonImg = select('#lonImg');
    lonImg.parent('london');

    var parImg = select('#parImg');
    parImg.parent('paris');

    var romImg = select('#romImg');
    romImg.parent('rome');

    var berImg = select('#berImg');
    berImg.parent('berlin');

    var amsImg = select('#amsImg');
    amsImg.parent('amsterdam');
}

function lonChange() {
    lonTxt.style('background-color', 'gray');
}

function parChange() {
    parTxt.style('background-color', 'gray');
}

function romChange() {
    romTxt.style('background-color', 'gray');
}

function berChange() {
    berTxt.style('background-color', 'gray');
}

function amsChange() {
    amsTxt.style('background-color', 'gray');
}
