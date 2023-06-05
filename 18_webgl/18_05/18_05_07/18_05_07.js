// 18.5: Camera and Perspective - WebGL and p5.js Tutorial

// https://www.youtube.com/watch?v=BW3D9WwalQE&list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_&index=6

// Aim: Create an array of spheres and move the camera angle

let angle = 0;

let sphereY = [];

function setup() {
    createCanvas(600, 600, WEBGL);
    for (let i = 0; i < 25; i++) {
        sphereY[i] = random(height);
    }
}

function draw() {
    background(175);

    // let cX = random(-600, 600);
    // let cY = random(-600, 600);
    // let cZ = random(-600, 600);

    camera(0, 600, -400 + (height / 2) / tan(PI / 6), 0, 0, 0, 0, 100, 0);

    pointLight(255, 255, 255, 0, -200, 200);

    for (let i = 0; i < sphereY.length; i++) {
        let sphereX = width * i / sphereY.length;
        push();
        translate(sphereX - 300, sphereY[i] - 300);
        rotateX(angle);
        rotateY(angle * 0.3);
        rotateZ(angle * 1.2);
        noStroke();
        ambientMaterial(100, 155, 255);
        sphere(25);
        pop();

        sphereY[i]++;

        if (sphereY[i] > height) {
            sphereY[i] = 0;
        }

        angle += 0.03;
    }

    // translate(0, 100);
    // rotateX(HALF_PI);
    // noStroke();
    // normalMaterial();
    // fill(100);
    // plane(500, 500);
}
