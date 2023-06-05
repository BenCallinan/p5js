// 11.2: Video Photobooth / Muybridge Style Animation - p5.js Tutorial

// https://www.youtube.com/watch?v=oLiaUEKsRws&list=PLRqwX-V7Uu6aKKsDHZdDvN6oCJ2hRY_Ig&index=2

let video;
let button;

function setup() {
    createCanvas(320, 240);
    background(51);
    video = createCapture(VIDEO);
    video.size(320, 240);
    button = createButton('snap');
    button.mousePressed(takesnap);
}

function takesnap() {
    image(video, 0, 0);
}

function draw() {
    //image(video, 0, 0);
}
