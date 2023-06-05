// Aim: Wecam feed but the picture is made of other pictures

let video;

let vScale = 16;

let slider;

let blueFlwr;
let whiteFlwr;

function preload() {
    blueFlwr = loadImage('blue_flower.jpg');
    whiteFlwr = loadImage('white_flower.jpg');
}

function setup() {
    createCanvas(640, 480);
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(width / vScale + 2, height / vScale + 2);
    video.hide();

    slider = createSlider(0, 255, 77);
}

function draw() {
    background(51);

    video.loadPixels();
    loadPixels();

    for (let y = 0; y < video.height; y++) {
        for (let x = 0; x < video.width; x++) {

            let index = (video.width - x + 1 + (y * video.width)) * 4;

            let r = video.pixels[index + 0];
            let g = video.pixels[index + 1];
            let b = video.pixels[index + 2];

            let bright = (r + g + b) / 3;

            let threshold = slider.value();

            if (bright > threshold) {
                image(whiteFlwr, x * vScale, y * vScale, vScale, vScale);
            } else {
                image(blueFlwr, x * vScale, y * vScale, vScale, vScale);
            }
        }
    }
}
