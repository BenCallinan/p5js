// 16.10: Particle System with JS Array Functions

// https://www.youtube.com/watch?v=m9bRVQ_-DXY&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr&index=10

// Coding Challenge #78: Simple Particle System

// https://www.youtube.com/watch?v=UcdigVaIYAk

particles = [];

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);

    for (let i = 0; i < 5; i++) {
        let p = new Particle();
        particles.push(p);
    }

    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();

        if (particles[i].finished()) {
            // remove this particle
            particles.splice(i, 1);
        }
    }
}

class Particle {
    constructor() {
        this.x = 300;
        this.y = 380;
        this.vx = random(-1, 1);
        this.vy = random(-5, -1);
        this.alpha = 255;
    }

    finished() {
        return this.alpha < 0;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 5;
    }

    show() {
        noStroke();
        //stroke(255);
        fill(255, this.alpha);
        ellipse(this.x, this.y, 16);
    }
}
