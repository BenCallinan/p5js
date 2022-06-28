// Aim: Use DOM elements in original ways

var slider1 = [];
var slider2 = [];
var slider3 = [];
var slider4 = [];

var angle = 0;

function setup() {
    noCanvas();

    for (var i = 0; i < 50; i++) {
        slider1[i] = createSlider(0, 500);
    }

    for (var i = 0; i < 50; i++) {
        slider2[i] = createSlider(0, 500);
    }

    for (var i = 0; i < 50; i++) {
        slider3[i] = createSlider(0, 500);
    }

    for (var i = 0; i < 50; i++) {
        slider4[i] = createSlider(0, 500);
    }
}

function draw() {

    var offset = 0;
    for (var i = 0; i < slider1.length; i++) {
        slider1[i].style('position', 'relative');
        slider1[i].style('left', slider4[i].value() + 'px');
        slider1[i].style('top', slider2[i].value() + 'px');
        var x = map(sin(angle+offset), -1, 1, 0, 255);
        slider1[i].value(x);
        offset += 0.1;
    }

    for (var i = 0; i < slider1.length; i++) {
        slider2[i].style('position', 'relative');
        slider2[i].style('left', slider1[i].value() + 'px');
        slider2[i].style('top', slider3[i].value() + 'px');
        var x = map(sin(angle+offset), -1, 1, 0, 255);
        slider2[i].value(x);
        offset += 0.1;
    }

    for (var i = 0; i < slider1.length; i++) {
        slider3[i].style('position', 'relative');
        slider3[i].style('left', slider2[i].value() + 'px');
        slider3[i].style('top', slider4[i].value() + 'px');
        var x = map(sin(angle+offset), -1, 1, 0, 255);
        slider3[i].value(x);
        offset += 0.1;
    }

    for (var i = 0; i < slider1.length; i++) {
        slider4[i].style('position', 'relative');
        slider4[i].style('left', slider3[i].value() + 'px');
        slider4[i].style('top', slider1[i].value() + 'px');
        var x = map(sin(angle+offset), -1, 1, 0, 255);
        slider4[i].value(x);
        offset += 0.1;
    }

    angle += 0.1;
}
