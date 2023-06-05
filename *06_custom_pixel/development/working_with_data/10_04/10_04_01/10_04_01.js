// 10.4: Loading JSON data from a URL (Asynchronous Callbacks!)

// https://www.youtube.com/watch?v=6mT3r8Qn1VY&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=4

function setup() {
    createCanvas(200, 200);

    loadJSON("http://api.open-notify.org/astros.json", gotData, 'jsonp');

}

function gotData(data) {
    background(0);

    for (let i = 0; i < data.number; i++) {
        fill(255);
        ellipse(random(width), random(height), 16, 16);
    }
}
