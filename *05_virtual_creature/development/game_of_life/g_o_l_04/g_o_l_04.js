// Coding Challenge #85: The Game of Life

// https://www.youtube.com/watch?v=FWSR_7kZuYg

// Aim: Populate game of life with perlin noise rather than random

let inc = 0.15;
let scl = 10;
let cols, rows;

let start = 0;

let grid;
let next;

function setup() {
    createCanvas(600, 400);
    cols = floor(width / scl);
    rows = floor(height / scl);

    grid = new Array(cols);
    for (let i = 0; i < cols; i++) {
        grid[i] = new Array(rows);
    }

    next = new Array(cols);
    for (let i = 0; i < cols; i++) {
        next[i] = new Array(rows);
    }

    frameRate(4);

    // for (let i = 0; i < cols; i++) {
    //     grid[i] = [];
    //     for (let j = 0; j < rows; j++) {
    //         grid[i][j];
    //     }
    // }
    //
    // for (let i = 0; i < cols; i++) {
    //     next[i] = [];
    //     for (let j = 0; j < rows; j++) {
    //         next[i][j];
    //     }
    // }

}

function draw() {
    background(0);

    let yoff = start;
    for (let j = 0; j < rows; j++) {
        let xoff = start;
        for (let i = 0; i < cols; i++) {
            let noi = floor(noise(xoff, yoff) * 10);
            xoff += inc;

            grid[i][j] = noi;

            let x = i * scl;
            let y = j * scl;

            if (grid[i][j] >= 5) {
                r = 255;
                g = 0;
                b = 0;
            } else {
                r = 0;
                g = 0;
                b = 0;
            }

            noStroke();
            fill(r, g, b, random(255));
            ellipse(x, y, random(scl / 1, scl / 10));

            // stroke(r, g, b);
            // strokeWeight(random(scl / 1, scl / 10));
            // point(x, y);
        }
        yoff += inc;
    }
    start += random(-10, 10);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let state = grid[i][j] * 2;

            let sum = 0;
            let neigh = countNeigh(grid, i, j);

            if (state <= 4 && neigh == 9) { next[i][j] = 5;}
            else if (state >= 5 && (neigh < 9 || neigh > 9)) {next[i][j] = 4;}

            else { next[i][j] = state;
            console.log(state);

            let x = i * scl;
            let y = j * scl;

            if (next[i][j] <= 4) {
                r = 0;
                g = 255;
                b = 0;
            } else {
                r = 0;
                g = 0;
                b = 0;
            }

            noStroke();
            fill(r, g, b, random(255));
            ellipse(x, y, random(scl / 1, scl / 10));

            // stroke(r, g, b);
            // strokeWeight(random(scl / 1, scl / 10));
            // point(x, y);
            }
        }
    }
    grid = next;
}

function countNeigh(grid, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {

            let col = (x + i + cols) % cols;
            let row = (y + j + rows) % rows;

            sum += grid[col][row];
        }
    }
    sum -= grid[x][y];
    return sum;
}
