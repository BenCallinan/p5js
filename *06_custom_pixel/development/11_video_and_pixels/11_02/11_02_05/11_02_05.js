// 11.2: Video Photobooth / Muybridge Style Animation - p5.js Tutorial

// https://www.youtube.com/watch?v=oLiaUEKsRws&list=PLRqwX-V7Uu6aKKsDHZdDvN6oCJ2hRY_Ig&index=2

// Aim: Use webcam feed as a custom pixel

let video;

let feedX = [];
let feedY = [];

let x, y;

let rd = 0;
let gn = 0;
let bl = 0;

function setup() {
    createCanvas(600, 400);
    background(150);

    video = createCapture(VIDEO);
    video.size(60, 40);
    video.hide();

    for (let i = 0; i < 5; i++) {
        feedX[i] = random(width);
        feedY[i] = random(height);
    }
}

function draw() {

    for (let i = 0; i < feedX.length; i++) {

        image(video, feedX[i], feedY[i]);
        feedX[i] = feedX[i] + 2;
        feedY[i] = feedY[i] + random(-4, 4);

        if (feedX[i] > width || feedY[i] > height) {
            feedX[i] = random(width);
            feedY[i] = random(height);
        }

        if (feedX[i] <= 200) {
            rd = 255;
            gn = 0;
            bl = 0;
        } else if (feedX[i] > 200 && feedX[i] <= 400) {
            rd = 0;
            gn = 255;
            bl = 0;
        } else if (feedX[i] > 400 && feedX[i] <= width) {
            rd = 0;
            gn = 0;
            bl = 255;
        }

        tint(rd, gn, bl);
    }


}
