// 11.4: Brightness Mirror - p5.js Tutorial

// https://www.youtube.com/watch?v=rNqaw8LT2ZU&list=PLRqwX-V7Uu6aKKsDHZdDvN6oCJ2hRY_Ig&index=4

let video;

let vScale = 16;

function setup() {
    createCanvas(640, 480);
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(width / vScale + 2, height / vScale + 2);
    video.hide();
}

function draw() {
    background(51);

    //translate(1, 1);

    video.loadPixels();
    loadPixels();

    for (let y = 0; y < video.height; y++) {
        for (let x = 0; x < video.width; x++) {

            let index = (video.width - x + 1 + (y * video.width)) * 4;

            let r = video.pixels[index + 0];
            let g = video.pixels[index + 1];
            let b = video.pixels[index + 2];

            let bright = (r + g + b) / 3;

            let w = map(bright, 0, 255, 0, vScale);

            fill(bright);
            rectMode(CENTER);
            rect(x * vScale, y * vScale, w, w);
        }
    }
}
