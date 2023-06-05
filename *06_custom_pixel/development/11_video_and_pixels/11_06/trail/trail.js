// Example Trail

// https://happycoding.io/tutorials/p5js/array-functions

let trail = [];
let particles = [];

let trialX;
let trailY;

let speedX = 2;
let speedY = 2;

function setup() {
    createCanvas(300, 300);
    noStroke();

    trailX = random(width);
    trailY = random(height);

}

function draw() {
    background(50);

    trail.push(new p5.Vector(trailX, trailY));

    trailX = trailX + speedX;
    trailY = trailY + speedY;

    if (trailX < 0 || trailX > width) {
        speedX = speedX * -1;
    }

    if (trailY < 0 || trailY > height) {
        speedY = speedY * -1;
    }

    if (trail.length > 32) {
        trail.shift();
    }

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < trail.length; j++) {
            let p = trail[j];

            let size = 32.0 * j / trail.length;

            fill(255, 0, 0);
            particles[i] = circle(p.x, p.y, size);
            console.log(particles[i]);
        }
    }
}
