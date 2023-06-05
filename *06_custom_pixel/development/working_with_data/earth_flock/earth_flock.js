// Coding Challenge #124: Flocking Simulation

// https://www.youtube.com/watch?v=mhjuuHl6qHM

const flock = [];

let alignSlider, cohesionSlider, separationSlider;

function setup() {
    createCanvas(1024, 512);
    alignSlider = createSlider(0, 5, 1, 0.1);
    cohesionSlider = createSlider(0, 5, 1, 0.1);
    separationSlider = createSlider(0, 5, 1, 0.1);
    for (let i = 0; i < 10; i++) {
        flock.push(new Boid(512, 256));
    }
}

function draw() {
    background(51);

    for (let boid of flock) {
        //boid.edges();
        boid.flock(flock);
        boid.update();
        boid.show();
    }
}
