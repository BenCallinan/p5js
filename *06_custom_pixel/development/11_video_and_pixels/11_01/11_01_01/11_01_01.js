// 11.1: Live Video and createCapture() - p5.js Tutorial

// https://www.youtube.com/watch?v=bkGf4fEHKak&list=PLRqwX-V7Uu6aKKsDHZdDvN6oCJ2hRY_Ig&index=2

let video;

function setup() {
    createCanvas(320, 240);
    background(51);
    video = createCapture(VIDEO);
    video.size(320, 240);
    video.hide();
}

function draw() {
    tint(255, 0, 150);
    image(video, 0, 0, mouseX, mouseY);
}
