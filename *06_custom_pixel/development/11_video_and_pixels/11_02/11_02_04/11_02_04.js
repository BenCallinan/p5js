// 11.2: Video Photobooth / Muybridge Style Animation - p5.js Tutorial

// https://www.youtube.com/watch?v=oLiaUEKsRws&list=PLRqwX-V7Uu6aKKsDHZdDvN6oCJ2hRY_Ig&index=2

// Last worked on Tuesday 6 September 2022, 7:47pm

let video;
let button;
let snapshots = [];
let counter = 0;
let total = 43;

function setup() {
    createCanvas(800, 240);
    background(51);
    video = createCapture(VIDEO, ready);
    video.size(320, 240);
    //button = createButton('snap');
    //button.mousePressed(takesnap);
}

let go = false;

function ready() {
    go = true;
}

function draw() {

    if (go) {
        snapshots[counter] = video.get();
        counter++;

        if (counter == total) {
            counter = 0;
        }
    }

    let w = 80;
    let h = 60;

    let x = 0;
    let y = 0;

    for (let i = 0; i < snapshots.length; i++) {
        //tint(255, 50);
        let index = (i + frameCount) % snapshots.length;
        image(snapshots[index], x, y, w, h);
        x = x + w;

        if (x > width) {
            x = 0;
            y = y + h;
        }
    }



    //image(video, 0, 0);
}
