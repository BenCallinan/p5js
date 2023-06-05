// 9.19: Prototypes in Javascript

// https://www.youtube.com/watch?v=hS_WqkyUah8&list=PLRqwX-V7Uu6ZmA-d3D0iFIvgrB5_7kB8H&index=19

let p;
let v;

function Particle() {
    this.x = 100;
    this.y = 99;
    // this.show = function() {
    //     point(this.x, this.y);
    // }
}

Particle.prototype.show = function() {
    point(this.x, this.y);
}

p5.Vector.prototype.double = function() {
    this.x *= 2;
    this.y *= 2;
    this.z *= 2;
}

function setup() {
    createCanvas(600, 300);

    p = new Particle();

    v = createVector(3, 4);
}
