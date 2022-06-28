// Happy Coding: Arrays

// https://happycoding.io/tutorials/p5js/arrays

let circleY = [50, 100, 150, 200, 250];

function setup() {
    createCanvas(300, 300);
}

function draw() {
    background(50);

    for (let i = 0; i < 5; i++) {
        let circleX = 50 * (i+1);
        circle(circleX, circleY[i], 25);

        circleY[i] += 50;

        if (circleY[i] > height) {
            circleY[i] = 1;
        }
    }

}
