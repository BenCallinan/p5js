// 11.7: Slit-Scan Video - p5.js Tutorial

// https://www.youtube.com/watch?v=YqVbuMPIRwY&list=PLRqwX-V7Uu6aKKsDHZdDvN6oCJ2hRY_Ig&index=7

let video;

let x = 0;
let y = 0;

function setup() {
    createCanvas(400, 400);
    pixelDensity(1);
    video = createCapture(VIDEO, ready);
    video.size(320, 240);
    video.hide();

    background(255);

    frameRate(5);
}

let go = false;

function ready() {
    go = true;
}


function draw() {
    background(255);

    if (go) {

        for (let i = 0; i < 20; i++) {
            let w = video.width;
            let h = video.height;

            x = floor(random(width));
            y = floor(random(height));

            copy(video, floor(random(width)), floor(random(height)), w, h, x, y, w, h);

            x = x + random(-1, 1);

            if (x > width) {
                x = 0;
            }

            y = y + random(-1, 1);

            if (y > height) {
                y = 0;
            }
        }
        console.log(x);
        console.log(y);
    }
}
