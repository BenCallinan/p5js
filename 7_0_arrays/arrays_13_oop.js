// Arrays 13

// Aim: Rectangles are added by the clicking of the mouse

let rectMove = [];

function setup() {
    createCanvas(500, 500);
}

function mousePressed() {
    let w = random(10, 100);
    let h = random(10, 100);
    let r = random(255);
    let g = random(255);
    let b = random(255);
    let box = new RectMove(mouseX, mouseY, w, h, r, g, b);
    rectMove.push(box)
}

function draw() {
    background(0);

    for(let i =0; i < rectMove.length; i++) {
    rectMove[i].show();
    rectMove[i].move();
    }
}
