// Coding Challenge #24: Perlin Noise Flow Field

// https://www.youtube.com/watch?v=BjoM9oKOAKY&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=6

// Vector in each square of 2D grid
//  - pointing in various directions
//  - direction set by perlin noise
// Ratio of cell to canvas width

let inc = 0.1;
let scl = 10;
let cols, rows;

let zoff = 0;

let fr;

let particles = [];

let flowfield;

function setup() {
    createCanvas(800, 800);
    cols = floor(width / scl);
    rows = floor(height / scl);
    fr = createP('');

    flowfield = new Array(cols * rows);

    for (let i = 0; i < 2500; i++) {
        particles[i] = new Particle();
    }
    background(255);
}

function draw() {
    //background(255);

    let yoff = 0;

    for (let y = 0; y < rows; y++) {
        let xoff = 0;
        for (let x = 0; x < cols; x++) {
            let index = (x + y * cols);
            let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
            let v = p5.Vector.fromAngle(angle);
            v.setMag(1);
            flowfield[index] = v;
            xoff += inc;
            stroke(0, 50);
            // push();
            // translate(x * scl, y * scl);
            // rotate(v.heading());
            // strokeWeight(1);
            // line(0, 0, scl, 0);
            // pop();
        }
        yoff += inc;

        zoff += 0.0003;
    }

    for (let i =0; i < particles.length; i++) {
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].edges();
        particles[i].show();
    }

    fr.html(floor(frameRate()));
}
