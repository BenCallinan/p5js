// 10.4: Loading JSON data from a URL (Asynchronous Callbacks!)

// https://www.youtube.com/watch?v=6mT3r8Qn1VY&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=4

let x = 0;

let spaceData;

function setup() {
    createCanvas(200, 200);

    loadJSON("http://api.open-notify.org/astros.json", gotData, 'jsonp');

}

function gotData(data) {
    spaceData = data;
}

function draw() {
    background(0);

    stroke(255);
    line(x, 0, x, height);

    x = x + 1;

    if (x > width) {
        x = 0;
    }

    if (spaceData) {
        randomSeed(4);
        for (let i = 0; i < spaceData.number; i++) {
            fill(255);
            ellipse(random(width), random(height), 16, 16);
        }
    }
}
