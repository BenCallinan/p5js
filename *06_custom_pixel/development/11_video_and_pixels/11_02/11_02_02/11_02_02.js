// 11.2: Video Photobooth / Muybridge Style Animation - p5.js Tutorial

// https://www.youtube.com/watch?v=oLiaUEKsRws&list=PLRqwX-V7Uu6aKKsDHZdDvN6oCJ2hRY_Ig&index=2

let video;
let button;
let snapshots = [];

function setup() {
    createCanvas(800, 240);
    background(51);
    video = createCapture(VIDEO);
    video.size(320, 240);
    button = createButton('snap');
    button.mousePressed(takesnap);
}

function takesnap() {
    snapshots.push(video.get());
    //image(video, 0, 0);
}

function draw() {
    let w = 80;
    let h = 60;

    let x = 0;
    let y = 0;

    for (let i = 0; i < snapshots.length; i++) {
        tint(255, 50);
        image(snapshots[i], x, y, w, h);
        x = x + w;

        if (x > width) {
            x = 0;
            y = y + h;
        }
    }



    //image(video, 0, 0);
}
