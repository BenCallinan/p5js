// Coding Challenge #57: Mapping Earthquake Data

// https://www.youtube.com/watch?v=ZiYdOwOrGyc&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=11

let clat = 0;
let clon = 0;

let lat = 0;
let lon = 0;

let zoom = 1;
let earthquakes;

function preload() {
    earthquakes = loadStrings("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv");
}

function mercX(lon) {
    lon = radians(lon);
    let a = (256 / PI) * pow(2, zoom);
    let b = lon + PI;
    return a * b;
}

function mercY(lat) {
    lat = radians(lat);
    let a = (256 / PI) * pow(2, zoom);
    let b = tan(PI / 4 + lat / 2);
    let c = PI - log(b);
    return a * c;
}

function setup() {
    createCanvas(1024, 512);
}

function draw() {
    background(0);

    translate(width / 2, height / 2);
    imageMode(CENTER);

    let cx = mercX(clon);
    let cy = mercY(clat);

    for (let i = 0; i < earthquakes.length; i++) {
        let data = earthquakes[i].split(/,/);

        let lat = data[1];
        let lon = data[2];

        let mag = data[4];

        let x = mercX(lon) - cx;
        let y = mercY(lat) - cy;

        x = x + random(-5, 5);
        y = y + random(-5, 5);

        mag = pow(10, mag);
        mag = sqrt(mag);

        let magmax = sqrt(pow(10, 10));

        let d = map(mag, 0, magmax, 0, 180);

        let r = 0;
        let g = 0;
        let b = 0;

        if (mag > 170) {
            r = 255;
            g = 0;
            b = 0;
        } else if (mag > 85 && mag < 170) {
            r = 0;
            g = 255;
            b = 0;
        } else if (mag < 85) {
            r = 0;
            g = 0;
            b = 255;
        }

        stroke(r, g, b);
        fill(r, g, b, 200);
        rect(x, y, d, d);
    }

}
