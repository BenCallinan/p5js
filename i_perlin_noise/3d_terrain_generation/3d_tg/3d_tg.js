// Live Stream #37: 3D Terrain Generation

// https://www.youtube.com/watch?v=ELpZW62HGVs&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=7
// Processing

// https://github.com/CodingTrain/website-archive/blob/main/CodingChallenges/CC_011_PerlinNoiseTerrain/P5/index.html
// P5.js version

// Notes:
// -Terrain should be lots of shapes attached to each other
//  -use a TRIANGLE_STRIP - connect all vertices with triangle polygons
//  -creates the apperance of a mesh
//  -some points pulled out to different extents - creates 3D mountainous quality

let cols, rows;
let scl = 20;

let w = 1400;
let h = 1000;

let flying = 0;

let terrain = [];

function setup() {
    createCanvas(600, 600, WEBGL);

    cols = floor(w / scl);
    rows = floor(h / scl);

    for (let x = 0; x < cols; x++) {
            terrain[x] = [];
        for (let y = 0; y < rows; y++) {
            terrain[x][y] = 0;
        }
    }
}

function draw() {

    flying -= 0.1;

    let yoff = flying;
    for (let y = 0; y < rows; y++) {
        let xoff = 0;
        for (let x = 0; x < cols; x++) {
            terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
            xoff += 0.2;
        }
    yoff += 0.2;
    }

    background(0);
    translate(0, 50);
    rotateX(PI / 3);
    fill(200, 200, 200, 50);
    translate(-w /2, -h / 2);

    for (let y = 0; y < rows; y++) {
        beginShape(TRIANGLE_STRIP);
        for (let x = 0; x < cols; x++) {
            vertex(x * scl, y * scl, terrain[x][y]);
            vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
        }
        endShape();
    }
}
