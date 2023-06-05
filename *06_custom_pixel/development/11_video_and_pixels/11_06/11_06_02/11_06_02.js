// 11.6: Painting with Pixels - p5.js Tutorial

// https://www.youtube.com/watch?v=0V3uYA1hafk&list=PLRqwX-V7Uu6aKKsDHZdDvN6oCJ2hRY_Ig&index=6

// Last worked on Friday 9 September 2022, 7:10am

// 6 minuntes

let video;
let vScale = 16;

let particles = [];

let slider;

function setup() {
    createCanvas(640, 480);
    pixelDensity(1);

    video = createCapture(VIDEO);
    video.size(width / vScale, height / vScale);
    video.hide();

    for (let i = 0; i < 500; i++) {
        particles[i] = new Particle(random(width), random(height));
    }

    slider = createSlider(0, 255, 128);

    background(255);
}


function draw() {
    //background(51);

    video.loadPixels();

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].show();
    }
}
