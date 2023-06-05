// Tile Based Map

// by Richard Hernandez

// https://www.youtube.com/watch?v=l4nAdEntGf8

// https://editor.p5js.org/RHG101997/sketches/LVSxiJY9z

// Scale
let tileSize = 10;
let mapSize = 20;

// Rotation
let angle;
let RotationPreview = true;

// Moving
let allowMove = true;
let xPos = 0;
let yPos = 0;
let speed = 0.1;

// Terrain level [max 10]
let mountain = 7 // up
let grass = 5 // 5 and up
let sand = 4 // between 4 and grass
let water = 4 // below 4

function setup() {
    createCanvas(800, 800, WEBGL);
    angle = PI / 4;
}

function draw() {
    background(255);
    directionalLight(255, 255, 255, 0, 1, -1);
    // Rotation
    rotateX(PI / 3);
    rotateZ(angle);

    // Rendering
    createWorld();
    translate((mapSize * tileSize) / 2, - (mapSize * tileSize) / 2, 0);

    // default = true
    if (RotationPreview) {
        rotateAround()
    } else {
        angle = 0;
    }

    // default = false
    if(allowMove) {
        move();
    }
}

function createWorld() {
    let noiseValue = 0;

    // Centering world
    translate(-(mapSize * tileSize) / 2, -(mapSize * tileSize) / 2, 0);

    // Creating grid of tiles
    noStroke();

    let xnoise = xPos; // map the perlin offset

    // Grid x
    for (let i = 0; i < mapSize; i++) {
        let ynoise = yPos // perline offset

    // Grid Y
    for (let j = 0; j < mapSize; j++) {
        // Noise to generate water and land
        let h = 10 * noise(xnoise, ynoise);
        if (h < water) {
            // Water
            fill(156, 211, 219);
            h = 2;
        } else if ( h < grass && h > sand) {
            // Sand
            fill(248, 222, 126);
            h = 4;

        } else if (h > mountain) {
            fill(171, 149, 132);
            h = 10;
        } else {
            // Grass
            fill(126, 200, 80);
            h = 7;
        }

        // Drawing each tile as a box
        // Translate after each box to right
        translate(tileSize, 0, h / 2);
        box(tileSize, tileSize, h);
        translate(0, 0, -h / 2);
        // Perlin noise
        ynoise += 0.15;
    }

    xnoise += 0.15;
    // translate back to beginning but 1 tile down
    translate(-tileSize * mapSize, tileSize, 0);
    }
}

function move() {
    if (keyIsDown(UP_ARROW)) {
        xPos += -speed;
    }
    if (keyIsDown(DOWN_ARROW)) {
        xPos += speed;
    }
    if (keyIsDown(LEFT_ARROW)) {
        yPos += -speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        yPos += speed;
    }
}

function rotateAround() {
    if (mouseX > width / 2) {
        angle += 0.01;
    }
    if (mouseX < width / 2) {
        angle += 0.001;
    }
}
