// 10.7: API Query with JavaScript setInterval()

// https://www.youtube.com/watch?v=UNtqhnhD-wo&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=7

let lineX = 0;
let url = 'http://api.open-notify.org/iss-now.json';

let issX = 0;
let issY = 0;

function setup() {
    createCanvas(600, 400);

    setInterval(askISS, 1000);
}

function askISS() {
    loadJSON(url, gotData);
}

function gotData(data) {
    let lat = data.iss_position.latitude;
    let long = data.iss_position.longitude;

    issX = map(lat, -90, 90, 0, width);
    issY = map(long, -180, 180, 0, height);

    // issX = (width / 360) * (180 + long);
    // issY = (height / 180) * (90 - lat);

    console.log(issX);
    console.log(issY);
}

function draw() {
    background(51);

    fill(255);
    ellipse(issX, issY, 24, 24);

    stroke(255);
    line(lineX, 0, lineX, height);
    lineX = lineX + 5;

    if (lineX > width) {
        lineX = 0;
    }
}
