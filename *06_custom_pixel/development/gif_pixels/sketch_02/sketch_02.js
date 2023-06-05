// Aim: Display many fire GIFs

let gifs = [];

let x = 0;
let y = 0;

function preload() {
    let url = "https://api.giphy.com/v1/gifs/search?&api_key=3Q17PY2B2je7TxVFmifXYCxO6g82vtJI&q=fire"
    loadJSON(url, gotData);
}

function gotData(giphy) {
    for(let i = 0; i < 5; i++) {
        gifs[i] = loadImage(giphy.data[i].images.original.url);
    }
}

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(0);

    for (let i = 0; i < gifs.length; i++) {
        image(gifs[i], x, y, 100, 100);

        x = width / 6 * i;
        y = height / 6 * i;
    }
}
