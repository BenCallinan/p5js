// 7.3 Arrays of Objects - p5.js Tutorial

// https://www.youtube.com/watch?v=fBqaA7zRO58&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=29

let bubbles = [];

function setup() {
    createCanvas(600, 400);

    for(let i = 0; i < 1000; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 40);
        bubbles[i] = new Bubble(x, y, r);
    }
}

function draw() {
    background(0);

    for(let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}
