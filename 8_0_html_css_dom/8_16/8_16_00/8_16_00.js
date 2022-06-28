// 8.16: The Slider Dance

// https://www.youtube.com/watch?v=CMsD3IigG7g&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=16

var sliders = [];

var angle = 0;

function setup() {
    noCanvas();
    //createCanvas(200, 200);
    for (var i = 0; i < 100; i++) {
        sliders[i] = createSlider(0, 255, 50);
    }
}

function draw() {

    var offset = 0;
    for (var i = 0; i < sliders.length; i++) {
        var x = map(sin(angle+offset), -1, 1, 0, 255);
        sliders[i].value(x);
        offset += 0.1;
    }

    angle += 0.1;
}
