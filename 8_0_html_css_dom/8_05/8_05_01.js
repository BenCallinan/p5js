// Aim: Use DOM to generate shapes then change their size and colours

var canvas;

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(8, 290);

    // User can change the size of the square
    sizeSlide = createSlider(10, 400, 200, 0);
    sizeSlide.position(78, 112);

    // Changes red colour
    redSlide = createSlider(10, 255, 76, 0);
    redSlide.position(78, 147);

    // Changes green colour
    grnSlide = createSlider(10, 255, 0);
    grnSlide.position(78, 182);

    // Changes blue colour
    bluSlide = createSlider(10, 255, 153, 0);
    bluSlide.position(78, 217);

    // Changes opacity
    opaSlide = createSlider(10, 255, 255, 0);
    opaSlide.position(78, 252);

}

function draw() {
    background(255);

    rectMode(CENTER);
    fill(redSlide.value(), grnSlide.value(), bluSlide.value(), opaSlide.value());
    rect(200, 200, sizeSlide.value(), sizeSlide.value());
}
