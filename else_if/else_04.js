// Else 4

// Last worked on Tuesday 4 January 2022, 7:10am

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(255, 0, 0);

    if (mouseX < 200) {
        background(255, 0, 0);
    } else if (mouseX > 200 && mouseX < 400) {
        background(0, 255, 0);
    } else if (mouseX > 400) {
        background(0, 0, 255);
    }
}
