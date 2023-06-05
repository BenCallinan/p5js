// Aim: Sine wave made up of water GIFs

// https://p5js.org/examples/math-sine-wave.html

let xspacing = 32;
let w;
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
    yvalues = new Array(floor(w / xspacing));
}

function draw() {
    background(0);

    for (let i = 0; i < yvalues.length; i++) {
        let x = i * xspacing;
        let y = height / 2 + yvalues[i];
        let w = new Water(x, y);
        waters.push(w);
    }

    for (let i = 0; i < yvalues.length; i++) {
        waters[i].update();
        waters[i].show();
    }
}

class Water {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.gif = random(gifs);
    }

    update() {
        this.x += 0.02;
        this.y = 200 + sin(this.x) * 75.0;

        if (this.x > width) {
            this.x = 0.0;
        }
    }

    show() {
        image(this.gif, this.x, this.y, 16, 16);
    }
}
