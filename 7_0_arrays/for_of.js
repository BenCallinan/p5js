// 16.4: for...of loop - Topics of JavaScript/ES6

// https://www.youtube.com/watch?v=Y8sMnRQYr3c&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=30

let bubbles = [];

function setup() {
    createCanvas(600, 400);
}

function mouseDragged() {
    let r = random(10, 50);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
}

function draw() {
    background(0);

    // Calls every element (bubble) in the array (bubbles)
    for (let bubble of bubbles) {
        bubble.move();
        bubble.show();
    }
}
