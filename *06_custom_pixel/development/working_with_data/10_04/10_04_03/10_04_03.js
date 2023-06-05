// 10.4: Loading JSON data from a URL (Asynchronous Callbacks!)

// https://www.youtube.com/watch?v=6mT3r8Qn1VY&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=4

let x = 0;

let spaceData;

function setup() {
    createCanvas(800, 600);

    loadJSON("http://api.open-notify.org/astros.json", gotData, 'jsonp');

}

function gotData(data) {
    spaceData = data;
}

function draw() {
    background(0);

    if (spaceData) {
        randomSeed(3);
        for (let i = 0; i < spaceData.number; i++) {

            x = random(width);
            y = random(height)

            fill(255);
            ellipse(x, y, 16, 16);

            fill(255)
            text(spaceData.people[i].craft, x, y + 20);
            text(spaceData.people[i].name, x, y + 40);

        }
    }
}
