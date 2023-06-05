// 11.8: Video Effects with Seriously.js - p5.js Tutorial

// https://www.youtube.com/watch?v=jdKep6jo7b0&list=PLRqwX-V7Uu6aKKsDHZdDvN6oCJ2hRY_Ig&index=8

let video;
let slider;
let colorPicker

function setup() {
    canvas = createCanvas(640, 480, WEBGL);
    canvas.id('p5canvas');
    pixelDensity(1);

    video = createCapture(VIDEO);
    video.size(640, 480);
    video.id('p5video');
    video.hide();

    //let slider = createSlider(0, 1, 0.5, 0.01);
    //slider.id('blur-slider');

    colorPicket = createColorPicker();

    let seriously = new Seriously();

    let src = seriously.source('#p5video');
    let target = seriously.target('#p5canvas');

    // let blur = seriously.effect('blur');
    // blur.amount = '#blur-slider';
    // blur.source = src;
    // target.source = blur;

    let chroma = seriously.effect('chroma');
    chroma.source = src;
    target.source = chroma;
    let r = 3 / 255;
    let g = 5 / 255;
    let b = 9 / 255;
    chroma.screen = [r, g, b, 1];

    seriously.go();
}
