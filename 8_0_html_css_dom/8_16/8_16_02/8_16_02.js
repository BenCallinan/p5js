// Aim: Use DOM elements in original ways

var slider1;
var slider2;
var slider3;
var slider4;

function setup() {
    noCanvas();

    slider1 = createSlider(10, 750);

    slider2 = createSlider(10, 750);

    slider3 = createSlider(10, 750);

    slider4 = createSlider(10, 750);
}

function draw() {
    slider1.style('position', 'absolute');
    slider1.style('left', slider4.value() + 'px');
    slider1.style('top', slider2.value() + 'px');

    slider2.style('position', 'absolute');
    slider2.style('left', slider3.value() + 'px');
    slider2.style('top', slider3.value() + 'px');

    slider3.style('position', 'absolute');
    slider3.style('left', slider2.value() + 'px');
    slider3.style('top', slider4.value() + 'px');

    slider4.style('position', 'absolute');
    slider4.style('left', slider1.value() + 'px');
    slider4.style('top', slider1.value() + 'px');

}

// function sl2move() {
//     slider2.style('position', 'absolute');
//     slider2.style('left', slider3.value() + 'px');
//     slider2.style('top', slider3.value() + 'px');
// }
//
// function sl3move() {
//     slider3.style('position', 'absolute');
//     slider3.style('left', slider4.value() + 'px');
//     slider3.style('left', slider4.value() + 'px');
// }
//
// function sl4move() {
//     slider4.style('position', 'absolute');
//     slider4.style('left', slider1.value() + 'px');
//     slider4.style('left', slider1.value() + 'px');
// }
