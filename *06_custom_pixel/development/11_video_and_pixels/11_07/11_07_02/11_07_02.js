// 11.7: Slit-Scan Video - p5.js Tutorial

// https://www.youtube.com/watch?v=YqVbuMPIRwY&list=PLRqwX-V7Uu6aKKsDHZdDvN6oCJ2hRY_Ig&index=7

let video;

//let x = 0;
let y = 0;

function setup() {
    createCanvas(240, 600);
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

        copy(video, 0, h / 2, w, 1, 0, y, w, 1);

        y++;

        if (y > height) {
            y = 0;
        }
    }
}
