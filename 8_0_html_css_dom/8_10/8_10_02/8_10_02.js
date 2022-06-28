// Use input events to change text

var textbox;
var paragraph;
var sizeSlide;
var redSlide;
var grnSlide;
var bluSlide;

function setup() {
    noCanvas();

    var font = selectAll('p');
    for (var i = 0; i < font.length; i++) {
        font[i].style('font-family','arial');
    }

    var adjustText = selectAll('.adjust');
    for (var i = 0; i < adjustText.length; i++) {
        adjustText[i].style('background-color','LightGray');
        adjustText[i].style('font-size','12pt');
        adjustText[i].style('position','relative');
    }

    textbox = select('#textB');
    textbox.input(updateText);

    sizeSlide = select('#sizeSld');
    sizeSlide.input(sizeStyle);
    sizeSlide.style('position', 'sticky');
    sizeSlide.position(95, 50);

    redSlide = select('#redSld');
    redSlide.style('position', 'sticky');
    redSlide.position(95, 85);
    redSlide.input(colorStyle);

    grnSlide = select('#grnSld');
    grnSlide.style('position', 'sticky');
    grnSlide.position(95, 120);
    grnSlide.input(colorStyle);

    bluSlide = select('#bluSld');
    bluSlide.style('position', 'sticky');
    bluSlide.position(95, 155);
    bluSlide.input(colorStyle);

    xSlide = select('#xSld');
    xSlide.style('position', 'sticky');
    xSlide.position(95, 190);
    xSlide.input(posStyle);

    ySlide = select('#ySld');
    ySlide.style('position', 'sticky');
    ySlide.position(95, 225);
    ySlide.input(posStyle);

    paragraph = select('#para');
    paragraph.style('font-size', '44pt');

}

function updateText() {
    paragraph.html(textbox.value());
}

function sizeStyle() {
    paragraph.style('font-size', sizeSlide.value() + 'pt');
}

function colorStyle() {
    paragraph.style('color', 'rgb(' + redSlide.value() + ',' + grnSlide.value()+ ',' + bluSlide.value() +')')
}

function posStyle() {
    paragraph.style('position', 'absolute');
    paragraph.style('left', xSlide.value() + 'px');
    paragraph.style('top', ySlide.value() + 'px');
}
