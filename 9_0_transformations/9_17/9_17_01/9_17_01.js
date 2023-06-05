// 9.17: Arguments Array in JavaScript

// https://www.youtube.com/watch?v=4Sw6OUXjHsk&list=PLRqwX-V7Uu6ZmA-d3D0iFIvgrB5_7kB8H&index=17

let particles = [];

function setup() {
    createCanvas(200, 200);
    particles[0] = new Particle();
    particles[1] = new Particle(150, 50);
    let v = createVector(150, 100);
    particles[2] = new Particle(v);
    particles[3] = new Particle('100, 150');
}

function draw() {
    background(0);
    for (let i = 0; i < particles.length; i++) {
        particles[i].show();
    }
}

function Particle(a, b) {
    if (a instanceof p5.Vector) {
        this.x = a.x;
        this.y = a.y;
    } else if (typeof(a) === 'string') {
        let nums = a.split(',');
        this.x = Number(nums[0]);
        this.y = Number(nums[1]);
    } else {
        this.x = a || 100;
        this.y = b || 100;
    }

    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, 16, 16);
    }
}

// function sum(arr) {
//     if (arr instanceof Array) {
//         let val = 0;
//         for (let i = 0; i < arr.length; i++) {
//             val += arr[i];
//         }
//         return val;
//     }
//
//     let val = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         val += arguments[i];
//     }
//     return val;
// }
