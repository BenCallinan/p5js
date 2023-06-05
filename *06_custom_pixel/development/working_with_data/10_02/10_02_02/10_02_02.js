// 10.2: What is JSON? Part I

// https://www.youtube.com/watch?v=_NFkzw6oFtQ&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=2

let data;

function preload() {
    data = loadJSON("rainbow.json");
}

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);

    for (i = 0; i < 6; i++) {

        rectMode(CENTER);

        let y = 50 + i * 50;

        fill(255);
        text(data.rainbow[i].color, 10, y);

        fill(data.rainbow[i].r, data.rainbow[i].g, data.rainbow[i].b);
        rect(100, y, 20, 20);
    }
}
