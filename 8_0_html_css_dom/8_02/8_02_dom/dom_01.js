// Use DOM elements on p5.js reference

// https://p5js.org/reference/#group-DOM

let slider;

function setup() {
    createP('These are DOM elements.');
    createDiv('This element uses the DIV tag.');

    createCanvas(600, 300);

    textSize(18);
    text('Click on the button to create' +
        ' <span> elements at random positions.', 20, 20);
    getBtn = createButton('Create span elements').position(30, 40);
    getBtn.mousePressed(spawnSpan);

    slider = createSlider(0, 255, 0);
    slider.position(250, 20);
    slider.style('width', '80px');

    let img = createImg('thumbs_up.png', 'thumbs up');
    img.position(20, 400);

    let a = createA('https://p5js.org/reference/#/p5/createA', 'This is a link');
    a.position(20, 560);
}

function spawnSpan() {
    newSpan = createSpan('This is a <b>span</b> element'+
                        'with custom <i>innerHTML</i>.');
    newSpan.position(random(50, 500), random(50, 300));
}

function draw() {
    let val = slider.value();
    background(val);
}
