// 18.5: Camera and Perspective - WebGL and p5.js Tutorial

// https://www.youtube.com/watch?v=BW3D9WwalQE&list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_&index=6

let angle = 0;

function setup() {
    createCanvas(400, 300, WEBGL);
}


function draw() {
    background(175);

    //translate(0, 0, mouseX);

    // let camX = random(-5, 5);
    // let camY = random(-5, 5);
    // let camZ = random(-5, 5);
    // camera(camX, camY, camZ + (height / 2) / tan(PI / 6), camY, camZ, camX, 0, 1, 0);

    // let fov = PI / 3;
    // let cameraZ = (height / 2.0) / tan(fov / 2.0);
    // perspective(fov, width / height, cameraZ / 10.0, cameraZ * 10.0);

    // let fov = PI / 3;
    // let cameraZ = (height / 2.0) / tan(fov / 2.0);
    // perspective(fov, width / height, cameraZ / 10.0, mouseX);

    // let fov = map(mouseX, 0, width, 0, PI);
    // let cameraZ = (height / 2.0) / tan((PI / 3) / 2.0);
    // perspective(fov, width / height, cameraZ /10.0, cameraZ * 10.0);

    ortho(-200, 200, 200, -200, 0, 1000);

    pointLight(255, 255, 255, 0, -200, 200);

    //ambientLight(255);

    for (let x = -200; x < 200; x += 50) {
        push();
        translate(x, 0, x - 200);
        rotateX(angle);
        rotateY(angle * 0.3);
        rotateZ(angle * 1.2);
        noStroke();
        ambientMaterial(255);
        box(50);
        pop();
    }

    translate(0, 100);
    rotateX(HALF_PI);
    noStroke();
    normalMaterial();
    fill(100);
    plane(500, 500);

    angle += 0.01;
}
