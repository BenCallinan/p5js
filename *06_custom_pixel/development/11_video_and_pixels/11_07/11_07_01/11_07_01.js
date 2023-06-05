// 11.7: Slit-Scan Video - p5.js Tutorial

// https://www.youtube.com/watch?v=YqVbuMPIRwY&list=PLRqwX-V7Uu6aKKsDHZdDvN6oCJ2hRY_Ig&index=7

let video;

let x = 0;

function setup() {
    createCanvas(800, 240);
    pixelDensity(1);
    video = createCapture(VIDEO, ready);
    video.size(320, 240);
    video.hide();

    background(51);

    //frameRate(20);
}

let go = false;

function ready() {
    go = true;
}


function draw() {

    if (go) {
        let w = video.width;
        let h = video.height;

        copy(video, w / 2, 0, 1, h, x, 0, 1, h);

        x++;

        if (x > width) {
            x = 0;
        }
    }
}
