// Project idea:
// webcam feed pixels – each have a colour tone to create an image

// but

// each invidual pixel is itself a webcam feed

let video;

let vScale = 16;

function setup() {
    createCanvas(640, 480);
    pixelDensity(1);

    video = createCapture(VIDEO);
    video.size(width / vScale +2, height / vScale + 2);
    video.hide();
}

function draw() {
    background(51);

    video.loadPixels();

    for (let y = 0; y < video.height; y++) {
        for (let x = 0; x < video.width; x++) {

            let index = (video.width + x + 1 + (y * video.width)) * 4;

            let r = video.pixels[index + 0];
            let g = video.pixels[index + 1];
            let b = video.pixels[index + 2];

            let bright = (r + g + b) / 3;

            let t = bright;

            push();
            translate(video.width + 600, 0);
            scale(-1, 1);
            tint(bright);
            image(video, x * vScale, y * vScale, vScale, vScale);
            pop();
        }
    }
}
