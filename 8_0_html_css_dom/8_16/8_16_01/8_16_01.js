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

    sliders[0].input(adjustSliders);

}

function adjustSliders() {

    for (var i = 1; i < sliders.length; i++) {
        sliders[i].value(sliders[0].value());
    }
}
