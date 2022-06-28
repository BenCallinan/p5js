// 9.8: Random Circles with No Overlap

// https://www.youtube.com/watch?v=XATr_jdh-44&list=PLRqwX-V7Uu6ZmA-d3D0iFIvgrB5_7kB8H&index=8

let circles = [];

function setup() {
    createCanvas(640, 360);

    let protection = 0;

    // Creates circle object
    while (circles.length < 1000) {
    //for (let i = 0; i < 25; i++) {

        let circle = {
            x: random(width),
            y: random(height),
            r: random(1, 36)
    };

        // Checks if circle object are overlapping
        let overlapping = false;
        for (let j = 0; j < circles.length; j++) {
            let other = circles[j];
            let d = dist(circle.x, circle.y, other.x, other.y);
            if (d < circle.r + other.r) {
                // They are overlapping
                overlapping = true;
                break;
            }
        }

        if (!overlapping) {
            circles.push(circle);
        }

        protection++;
        if (protection > 10000) {
            break;
        }
    }

    // Draws circles that are NOT overlapping
    for (let i = 0; i < circles.length; i++) {
        fill(255, 0, 150, 100);
        noStroke();
        ellipse(
            circles[i].x,
            circles[i].y,
            circles[i].r*2,
            circles[i].r*2
        );
    }
}

function draw() {
}
