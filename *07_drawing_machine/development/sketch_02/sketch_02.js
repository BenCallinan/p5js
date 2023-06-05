// Record shape data using vertices

// https://www.geeksforgeeks.org/p5-js-beginshape-function/

let vertices = [];

function setup() {
    createCanvas(600, 400);
    background(0);
}

function mouseDragged() {
    vertices.push({x: mouseX, y: mouseY});

    noFill();
    stroke(255);
    strokeWeight(4);
    beginShape();
    for (let i = 0; i < vertices.length; i++) {
        vertex(vertices[i].x, vertices[i].y);
    }
    endShape();
}
