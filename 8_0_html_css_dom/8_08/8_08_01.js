// Use input events to change text

var textbox;
var paragraph;
var sizeSlide;
var redSlide;
var grnSlide;
var bluSlide;

function setup() {
    noCanvas();

    textbox = createInput('enter text');
    textbox.input(updateText);

    paragraph = createP('Font Size: ');
    sizeSlide = createSlider(10, 64, 16);
    sizeSlide.position(95, 43);
    sizeSlide.input(sizeStyle);

    paragraph = createP('Red: ');
    redSlide = createSlider(10, 255, 76, 0);
    redSlide.position(95, 78);
    redSlide.input(colorStyle);
    //redSlide.input(redStyle);

    paragraph = createP('Green: ');
    grnSlide = createSlider(10, 255, 0);
    grnSlide.position(95, 113);
    grnSlide.input(colorStyle);

    paragraph = createP('Blue: ');
    bluSlide = createSlider(10, 255, 153, 0);
    bluSlide.position(95, 148);
    bluSlide.input(colorStyle);

    paragraph = createP('X Position: ');
    xSlide = createSlider(10, 750);
    xSlide.position(95, 183);
    xSlide.input(posStyle);

    paragraph = createP('Y Position: ');
    ySlide = createSlider(250, 750);
    ySlide.position(95, 218);
    ySlide.input(posStyle);

    paragraph = createP('Text will show here');

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
