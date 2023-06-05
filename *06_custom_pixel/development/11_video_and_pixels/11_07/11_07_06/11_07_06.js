// Combine slit-scan with a sine wave

let xspacing = 20; // distance between each horizontal location
let w; //width of entire wave
let theta = 0.0; // start angle at 0
let amplitude = 75.0; // height of wave
let period = 500.0; // how many pixels before the wave repeats
let dx; // value for incrementing x
let yvalues; // using an array to store height values for the wave

let video;

function setup() {
    createCanvas(710, 400);
    pixelDensity(1);

    video = createCapture(VIDEO, ready);
    video.size(320, 240);
    video.hide();

    w = width + 16;
    dx = (TWO_PI / period) * xspacing;
    yvalues = new Array(floor( w / xspacing));

    //background(255);

}

let go = false;

function ready() {
    go = true;
}

function draw() {
    background(255);

    calcWave();
    renderWave();
}

function calcWave() {
    // increment theta (try different values for 'angula velocity' here)
    theta += 0.02;

    // For every x value, calculate a y value with sin function
    let x = theta;
    for (let i = 0; i < yvalues.length; i++) {
        yvalues[i] = sin(x) * amplitude;
        x += dx;
    }
}

function renderWave() {

    // A simple way to draw the wave with an ellipse at each location
    if (go) {

        for (x = 0; x < yvalues.length; x++) {

            let w = video.width;
            let h = video.height;

            let waveX = floor(x * xspacing);
            let waveY = floor(height / 5 + yvalues[x]);

            copy(video, w / 2, 0, 1, h, waveX, waveY, 20, h);

            // Remove x++; for a alternative affect
            x++;
        }

    }
}
