// GIF Drawing Machine

let button;

let redbtn;
let grnbtn;
let ylwbtn;
let blbtn;
let whtbtn;
let blkbtn;

let slider;
let val;

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

    redbtn = createButton('Red')
    redbtn.position(10, 445);
    redbtn.mousePressed(redGIF);

    grnbtn = createButton('Green')
    grnbtn.position(50, 445);
    grnbtn.mousePressed(grnGIF);

    ylwbtn = createButton('Yellow')
    ylwbtn.position(103, 445);
    ylwbtn.mousePressed(ylwGIF);

    blbtn = createButton('Blue')
    blbtn.position(158, 445);
    blbtn.mousePressed(blGIF);

    whtbtn = createButton('White')
    whtbtn.position(200, 445);
    whtbtn.mousePressed(whtGIF);

    erasebtn = createButton('Black')
    erasebtn.position(252, 445);
    erasebtn.mousePressed(blkGIF);

    slider = createSlider(1, 60, 4, 1);
    slider.position(300, 445);
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

function redGIF() {
    let url = api + apiKey + "red";
    loadJSON(url, gotData);
}

function grnGIF() {
    let url = api + apiKey + "green";
    loadJSON(url, gotData);
}

function ylwGIF() {
    let url = api + apiKey + "yellow";
    loadJSON(url, gotData);
}

function blGIF() {
    let url = api + apiKey + "blue";
    loadJSON(url, gotData);
}

function whtGIF() {
    let url = api + apiKey + "white";
    loadJSON(url, gotData);
}

function blkGIF() {
    let url = api + apiKey + "black";
    loadJSON(url, gotData);
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

    val = slider.value();
}

class Pen {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.gif = random(gifs);
        this.val = val;
    }

    show() {
        image(this.gif, this.x, this.y, this.val, this.val);
    }
}
