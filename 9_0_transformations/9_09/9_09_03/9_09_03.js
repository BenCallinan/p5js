// 9.9: Minimum Spanning Tree (Prim's Algorithm)

// https://www.youtube.com/watch?v=BxabnKrOjT0&list=PLRqwX-V7Uu6ZmA-d3D0iFIvgrB5_7kB8H&index=9

let vertices = [];

function setup() {
    createCanvas(640, 320);

    for (let i = 0; i < 50; i++) {
        let v = createVector(320, 160);
        vertices.push(v);
    }
}

function mousePressed() {
    let v = createVector(mouseX, mouseY);
    vertices.push(v);
}

function draw() {
    background(200, 230, 255);

    let reached = [];
    let unreached = [];

    for (let i = 0; i < vertices.length; i++) {
        unreached.push(vertices[i]);
    }

    reached.push(unreached[0]);
    unreached.splice(0, 1);

    while(unreached.length > 0) {
        let record = 100000
        let rIndex;
        let uIndex;

        for (let i = 0; i < reached.length; i++) {

            for (let j = 0; j < unreached.length; j++) {
                let v1 = reached[i];
                let v2 = unreached[j];
                let d = dist(v1.x, v1.y, v2.x, v2.y);

                if (d < record) {
                    record = d;
                    rIndex = i;
                    uIndex = j;
                }
            }
        }

        beginShape();
        stroke(0, 150, 0);
        vertex(reached[rIndex].x, reached[rIndex].y);
        vertex(unreached[uIndex].x, unreached[uIndex].x)
        endShape();

        reached[rIndex].x = reached[rIndex].x + random(-1, 1);
        reached[rIndex].y = reached[rIndex].y + random(-1, 1);
        unreached[uIndex].x = unreached[uIndex].x + random(-1, 1);
        unreached[uIndex].y = unreached[uIndex].y + random(-1, 1);

        reached.push(unreached[uIndex]);
        unreached.splice(uIndex, 1);
    }

    for(let i = 0; i < vertices.length; i++) {
        fill(255, 255, 0);
        stroke(225, 225, 0);
        ellipse(vertices[i].x, vertices[i].y, 16, 16);
    }
}
