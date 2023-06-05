// Aim: Sine wave made up of water GIFs

// https://p5js.org/examples/math-sine-wave.html

let xspacing = 16;
let w;
let theta = 0.0;
let amplitude = 75.0;
let period = 500.0;
let dx;
let yvalues = 0;

let gifs = [];
let waters = [];

function preload() {
    let url = "https://api.giphy.com/v1/gifs/search?&api_key=3Q17PY2B2je7TxVFmifXYCxO6g82vtJI&q=water"
    loadJSON(url, gotData);
}

function gotData(giphy) {
    for(let i = 0; i < 4; i++) {
        gifs[i] = loadImage(giphy.data[i].images.original.url);
    }
}

function setup() {
    createCanvas(710, 400);
    w = width + 16;
    dx = (TWO_PI / period) * xspacing;
    yvalues = new Array(floor(w / xspacing));
}

function draw() {
    background(0);
    calcWave();
    renderWave();
}

function calcWave() {
    theta += 0.02;

    let x = theta;
    for (let i = 0; i < yvalues.length; i++) {
        yvalues[i] = sin(x) * amplitude;
        x += dx;
    }
}

function renderWave() {

    for (let i = 0; i < yvalues.length; i++) {
        let w = new Water(i * xspacing, height / 2 + yvalues[i]);
        waters.push(w);
    }

    for (let i = 0; i < yvalues.length; i++) {
        waters[i].show();
    }
}

class Water {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.gif = random(gifs);
    }

    show() {
        image(this.gif, this.x, this.y, 16, 16);
    }
}
