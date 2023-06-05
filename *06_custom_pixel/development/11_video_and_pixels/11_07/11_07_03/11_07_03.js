// 11.7: Slit-Scan Video - p5.js Tutorial

// https://www.youtube.com/watch?v=YqVbuMPIRwY&list=PLRqwX-V7Uu6aKKsDHZdDvN6oCJ2hRY_Ig&index=7

let video;

let x = 50;
let y = 50;

function setup() {
    createCanvas(600, 600);
    pixelDensity(1);
    video = createCapture(VIDEO, ready);
    video.size(320, 240);
    video.hide();

    background(255);

    frameRate(20);
}

let go = false;

function ready() {
    go = true;
}


function draw() {

    if (go) {
        let w = video.width;
        let h = video.height;

        copy(video, random(width), random(height), w, h, x, y, w, h);

        x = x + random(-5, 5);

        if (x > width) {
            x = 0;
        }

        y = y + random(-5, 5);

        if (y > height) {
            y = 0;
        }
    }
}
