// Arrays 11

// Aim: Create a pile of boxes using arrays of objects

let rectangles = [];

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

        rectangles[i] = new Rectangle(x, y, w, h, r, g, b);
    }
}

function draw() {
    background(0);

    for(let i =0; i < rectangles.length; i++) {
    rectangles[i].show();
    }
}
