// 16.18: Polymorphism in JavaScript

// https://www.youtube.com/watch?v=8a5BkwuZRK0&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr&index=20

let particles = [];

function setup() {
    createCanvas(600, 600);

    for (let i = 0; i < 10; i++) {
        if (random(1) < 0.5) {
            particles[i] = new Particle(300, 300);
        } else {
            particles[i] = new Confetti(300, 300);
        }
    }
}

function draw() {
    background(0);

    for (let p of particles) {
        p.update();
        p.show();
    }
}
