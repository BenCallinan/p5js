// 8.8: Events "changed" and "input"

// https://www.youtube.com/watch?v=ZEy0_NLhdSE&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=8

var textbox;
var slider;
var paragraph;

function setup() {
    noCanvas();

    textbox = createInput('enter text');
    slider = createSlider(10, 64, 16);
    paragraph = createP('starting text');

    // changed --> when the user hits enter
    //textbox.changed(updateText);

    // input --> updates in real time
    textbox.input(updateText);
    slider.input(updateSize);
}

function updateSize() {
    paragraph.style('font-size', slider.value() + 'pt');
}

function updateText() {
    paragraph.html(textbox.value());
}
