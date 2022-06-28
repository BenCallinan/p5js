// Arrays 12

// Aim: Move rectangles around

let rectMove = [];

function setup() {
    createCanvas(500, 500);

    for(let i = 0; i < 25; i++) {
        let x = 0 + 30 * i;
        let y = 500 - 30 * i;
        let w = random(10, 100);
        let h = random(10, 100);
        let r = random(255);
        let g = random(255);
        let b = random(255);

        rectMove[i] = new RectMove(x, y, w, h, r, g, b);
    }
}

function draw() {
    background(0);

    for(let i =0; i < rectMove.length; i++) {
    rectMove[i].show();
    rectMove[i].move();
    }
}
