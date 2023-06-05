// 10.7: API Query with JavaScript setInterval()

// https://www.youtube.com/watch?v=UNtqhnhD-wo&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=7

let lineX = 0;
let url = 'http://api.open-notify.org/iss-now.json';

let issX = 0;
let issY = 0;

let earth;

function preload() {
    earth = loadImage('earth.jpg');
    iss = loadImage('iss.png');
}

function setup() {
    createCanvas(853, 480);

    setInterval(askISS, 10);
}

function askISS() {
    loadJSON(url, gotData);
}

function gotData(data) {
    let lat = data.iss_position.latitude;
    let long = data.iss_position.longitude;

    issX = map(lat, -90, 90, 0, width);
    issY = map(long, -180, 180, 0, height);

    console.log(issX);
    console.log(issY);
}

function draw() {
    background(51);

    image(earth, 0, 0);
    image(iss, issX, issY);
}
