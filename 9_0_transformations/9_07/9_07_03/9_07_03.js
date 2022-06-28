// Aim: Create a glass window that cracks when the mouse is pressed

let cracks = [];
let red = 25;
let green = 0;
let blue = 50;

function setup() {
    createCanvas(600, 600);
}

function mousePressed() {
    cracks.push(new Crack(mouseX, mouseY));
}

function draw() {
    background(red, green, blue);

    for (let i = 0; i < cracks.length; i++) {
        cracks[i].update();
        cracks[i].show();
    }

    stroke(0);
    fill(0);
    rect(0, 550, 600, 50);

    if (mouseIsPressed === true) {
        red = 200;
        green = 225;
        blue = 255;
    } else {
        red = 25;
        green = 0;
        blue = 50;
    }
}
