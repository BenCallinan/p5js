let circleCirc = 10;
let circleX = 0;

function setup() {
    createCanvas(400, 300);
}

function mousePressed() {
    circleCirc = 0;
    circleX = 0;
    //circleCol = color(255, 0, 0);
}

function draw() {
    background(255);

    let circleCol = color(255, 0, 0, 100);

    noStroke();
    fill(circleCol);
    circle(circleX, 0, circleCirc);

    noStroke();
    fill(circleCol);
    circle(circleX, 150, circleCirc);

    noStroke();
    fill(circleCol);
    circle(circleX, 300, circleCirc);

    circleCirc = circleCirc + 10;
    circleX = circleX + 10;
    circleCol = circleCol + color(5, 5, 5);
}
