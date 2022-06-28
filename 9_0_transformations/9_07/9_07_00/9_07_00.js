// 9.7: Drawing Object Trails

// https://www.youtube.com/watch?v=vqE8DMfOajk&list=PLRqwX-V7Uu6ZmA-d3D0iFIvgrB5_7kB8H&index=7

let particle;

function setup() {
    createCanvas(400, 300);
    particle = new Particle(100, 100);
}

function draw() {
    background(200);
    particle.update();
    particle.show();
}
