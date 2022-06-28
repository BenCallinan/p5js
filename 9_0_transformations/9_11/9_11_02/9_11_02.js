// Aim: Use namspacing to create a series of canvases across the window

// let w = 0;
// let h = 0;

let rdSketch = function(r) {

    r.setup = function() {
        r.createCanvas(100, 100);
        r.background(100);
    }

    r.draw = function() {
        for (let i = 0; i < 100; i++) {
            r.fill(255, 0, 0, 100);
            r.stroke(0, 100);
            r.ellipse(50, 50, r.random(-100, 100), r.random(-100, 100));
        }
    }
}

let gnSketch = function(g) {

    g.setup = function() {
        g.createCanvas(100, 100);
        g.background(100);
    }

    g.draw = function() {
        for (let i = 0; i < 100; i++) {
            g.fill(0, 255, 0, 100);
            g.stroke(0, 100);
            g.ellipse(50, 50, g.random(-100, 100), g.random(-100, 100));
        }
    }
}

let ywSketch = function(y) {

    y.setup = function() {
        y.createCanvas(100, 100);
        y.background(100);
    }

    y.draw = function() {
        for (let i = 0; i < 100; i++) {
            y.fill(255, 255, 0, 100);
            y.stroke(0, 100);
            y.ellipse(50, 50, y.random(-100, 100), y.random(-100, 100));
        }
    }
}

let blSketch = function(b) {

    b.setup = function() {
        b.createCanvas(100, 100);
        b.background(100);
    }

    b.draw = function() {
        for (let i = 0; i < 100; i++) {
            b.fill(0, 0, 255, 100);
            b.stroke(0, 100);
            b.ellipse(50, 50, b.random(-100, 100), b.random(-100, 100));
        }
    }
}


let red = new p5(rdSketch);
let green = new p5(gnSketch);
let yellow = new p5(ywSketch);
let blue = new p5(blSketch);

// function setup() {
//     createCanvas(100, 100);
//     background(100);
// }
//
// function draw() {
//
//     for (let i = 0; i < 100; i++) {
//         fill(255, 0, 0, 100);
//         stroke(0, 100);
//         ellipse(50, 50, random(-100, 100), random(-100, 100));
//         console.log(i);
//     }
// }
