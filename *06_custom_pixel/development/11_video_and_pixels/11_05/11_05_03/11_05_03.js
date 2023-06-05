// 11.5: Checkbox Mirror - p5.js Tutorial

// https://www.youtube.com/watch?v=m1G6WBvrOBE&list=PLRqwX-V7Uu6aKKsDHZdDvN6oCJ2hRY_Ig&index=5

let video;

let vScale = 16;

let cols = 40;
let rows = 20;

let sliders = [];

function setup() {
    noCanvas();
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(cols, rows);
    video.hide();

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {

            let slider = createSlider(0, 255, 127);
            slider.style('display', 'inline');
            slider.size(10);
            slider.parent('mirror');
            sliders.push(slider);
        }
        let linebreak = createSpan('<br/>');
        linebreak.parent('mirror');
    }
}

function draw() {

    video.loadPixels();

    for (let y = 0; y < video.height; y++) {
        for (let x = 0; x < video.width; x++) {

            let index = (video.width - x + 1 + y * video.width) * 4;

            let r = video.pixels[index + 0];
            let g = video.pixels[index + 1];
            let b = video.pixels[index + 2];

            let bright = (r + g + b) / 3;

            let threshold = 77;

            let checkIndex = x + y * cols;

            if (bright > threshold) {
                sliders[checkIndex].value(0);
            } else {
                sliders[checkIndex].value(255);
            }

            noStroke();
            rectMode(CENTER);
            rect(x * vScale, y * vScale, vScale, vScale);
        }
    }
}
