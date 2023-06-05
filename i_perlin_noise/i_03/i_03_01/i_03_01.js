// I.3: noise() vs random() - Perlin Noise and p5.js Tutorial

// https://www.youtube.com/watch?v=YcdldZ1E9gU&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=2

let xoff = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(51);
    //let x = random(width);

    let x = map(noise(xoff), 0, 1, 0, width);

    xoff += 0.01;

    ellipse(x, 200, 24, 24);
}
