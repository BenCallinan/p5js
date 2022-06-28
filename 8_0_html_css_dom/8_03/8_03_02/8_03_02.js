// Aim: Create rainy weather using html text elements

var canvas;
var rain;

y = 50;

function setup() {
    canvas = createCanvas(200, 200);
    canvas.position(0, 200);

    rain = createElement('rain','rain');
}

function draw() {
    background(255);
    rain.position(20, y);

    y = y + 1;

    if (y > 220) {
        y = 50;
    }

    if (y > 210) {
        fill(0, 0, 255);
        ellipse(40, 30, 50, 50);
    }


}
