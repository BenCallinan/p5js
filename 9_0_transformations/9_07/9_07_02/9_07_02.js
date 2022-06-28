// 9.7: Drawing Object Trails

// https://www.youtube.com/watch?v=vqE8DMfOajk&list=PLRqwX-V7Uu6ZmA-d3D0iFIvgrB5_7kB8H&index=7

var particles = [];

function setup() {
    createCanvas(600, 600);
}

function mousePressed() {
    particles.push(new Particle(mouseX, mouseY));
}

function draw() {
    background(200);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].show();
    }

line(frameCount, 0, frameCount, height);

}
