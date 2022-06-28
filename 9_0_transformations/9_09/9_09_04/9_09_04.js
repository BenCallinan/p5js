let vertices = [];

function setup() {
    createCanvas(400, 400);

    // for (let i = 0; i < 10; i++) {
    //     let v = createVector(random(width), random(height));
    //     vertices.push(v);
    // }
}

function mousePressed() {
    let v = createVector(mouseX, mouseY);
    vertices.push(v);
}

function draw() {
    background(0);

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
        let d;
        let rd = 0;
        let gn = 0;
        let bl = 0;

        for (let i = 0; i < reached.length; i++) {
            for(let j = 0; j < unreached.length; j++) {
                let v1 = reached[i];
                let v2 = unreached[j];
                d = dist(v1.x, v1.y, v2.x, v2.y);
                console.log(d);

                if (d < record) {
                    record = d;
                    rIndex = i;
                    uIndex = j;
                }
            }
        }

        if (d > 200) {
            rd = 255;
            gn = 0;
            bl = 0;
        } else if (d > 100 && d < 200 ) {
            rd = 0;
            gn = 255;
            bl = 0;
        } else if (d < 100) {
            rd = 0;
            gn = 0;
            bl = 255;
        } else {
            rd = 0;
            gn = 0;
            bl = 0;
        }

        stroke(rd, gn, bl);
        strokeWeight(2);
        line(
            reached[rIndex].x,
            reached[rIndex].y,
            unreached[uIndex].x,
            unreached[uIndex].y
        );

        reached.push(unreached[uIndex]);
        unreached.splice(uIndex, 1);
    }

    for (let i = 0; i < vertices.length; i++) {
        noFill();
        noStroke();
        ellipse(vertices[i].x, vertices[i].y, 16, 16);
        vertices[i].x = vertices[i].x + random(-1, 1);
        vertices[i].y = vertices[i].y + random(-1, 1);
    }
}
