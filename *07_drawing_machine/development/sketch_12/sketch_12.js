// Draw with GIFs

let button;

let gifs = [];
let pens = [];

let api = "https://api.giphy.com/v1/gifs/search?";
let apiKey = "&api_key=3Q17PY2B2je7TxVFmifXYCxO6g82vtJI&q=";

function preload() {
    let url = "https://api.giphy.com/v1/gifs/search?&api_key=3Q17PY2B2je7TxVFmifXYCxO6g82vtJI&q=flower"
    loadJSON(url, gotData);
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.position(10, 40);

    input = createInput('Find gifs');
    input.position(10, 10);

    button = createButton('submit');
    button.mousePressed(gifAsk);
    button.position(205, 10);
}

function gifAsk() {
    let url = api + apiKey + input.value();
    loadJSON(url, gotData);
}

function gotData(giphy) {
    for (let i = 0; i < 3; i++) {
        gifs[i] = loadImage(giphy.data[i].images.original.url);
    }
}

function mouseDragged() {
    let p = new Pen(mouseX, mouseY);
    pens.push(p);
}

function draw() {
    background(0);

    for(let i = 0; i < pens.length; i++) {
        pens[i].show();
    }
}

class Pen {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.gif = random(gifs);
    }

    show() {
        image(this.gif, this.x, this.y, 16, 16);
        // fill(255);
        // noStroke();
        // strokeWeight(4);
        // rectMode(CENTER);
        // rect(this.x, this.y, 16);
    }
}
