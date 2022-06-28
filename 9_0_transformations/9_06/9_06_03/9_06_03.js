let circleW = [];

let button;

function setup() {
    createCanvas(400, 400);

    button = createButton('Fireworks!')
    button.mousePressed(fireWorks);
}

function draw() {
    background(0);

    for (let i = 0; i < circleW.length; i++) {
        fill(random(255), random(255), random(255));
        circle(random(400), random(400), circleW[i]);
    }
}

function fireWorks() {
    for (let i = 0; i < 10; i++) {
        makeTimer(circleW[i], 1000);
        circleW[i] = random(50);
    }
}

function makeTimer(elt, wait) {
    setInterval(timePass, wait);
    function timePass() {
        circleW++;
    }
}
