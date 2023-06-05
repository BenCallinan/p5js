// 18.6: createGraphics() as WebGL Texture - WebGL and p5.js Tutorial

// https://www.youtube.com/watch?v=3tTZlTq4Cxs&list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_&index=6

// Aim: Create floating minimim spanning trees

let angle = 0;
let flowers;

function setup() {
    createCanvas(800, 600, WEBGL);

    flowers = createGraphics(400, 400);

    flowers.stroke(0);
    flowers.fill(255, 155, 200);

    let flowerX = 200;
    let flowerY = 200;
    let petalSize = 50;
    let petalDistance = petalSize / 2;

    flowers.circle(flowerX - petalDistance,
        flowerY - petalDistance,
        petalSize);

    flowers.circle(flowerX + petalDistance,
        flowerY - petalDistance,
        petalSize);

    flowers.circle(flowerX - petalDistance,
        flowerY + petalDistance,
        petalSize);

    flowers.circle(flowerX + petalDistance,
        flowerY + petalDistance,
        petalSize);

    flowers.fill(255, 0, 125);
    flowers.circle(flowerX, flowerY, petalSize);

}

function draw() {
    background(0);

    // flowers = createGraphics(400, 400);
    //
    // flowers.fill(255, 128, 0);
    //
    // let flowerX = random(0, width);
    // let flowerY = random(0, height);
    // let petalSize = random(25, 50);
    // let petalDistance = petalSize / 2;
    //
    // flowers.circle(flowerX - petalDistance,
    //     flowerY - petalDistance,
    //     petalSize);
    //
    // flowers.circle(flowerX + petalDistance,
    //     flowerY - petalDistance,
    //     petalSize);
    //
    // flowers.circle(flowerX - petalDistance,
    //     flowerY + petalDistance,
    //     petalSize);
    //
    // flowers.circle(flowerX + petalDistance,
    //     flowerY + petalDistance,
    //     petalSize);
    //
    // flowers.fill(255, 0, 0);
    // flowers.circle(flowerX, flowerY, petalSize);

    ambientLight(100);
    directionalLight(255, 255, 255, 0, 0, -1);

    rotateX(angle);
    rotateY(angle * 1.3);
    rotateZ(angle * 0.7);

    noStroke();
    texture(flowers);
    box(400);

    angle += 0.01;
}
