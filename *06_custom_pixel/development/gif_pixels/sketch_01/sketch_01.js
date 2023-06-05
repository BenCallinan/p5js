// Aim: Show a GIF on p5.js canvas

let gif;

function preload() {
    let url = "https://api.giphy.com/v1/gifs/search?&api_key=3Q17PY2B2je7TxVFmifXYCxO6g82vtJI&q=fire"
    loadJSON(url, gotData);
}

function gotData(giphy) {
    gif = loadImage(giphy.data[0].images.original.url);
}

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(0);
    image(gif, 0, 0);
}
