// Coding Challenge #85: The Game of Life

// https://www.youtube.com/watch?v=FWSR_7kZuYg

// Aim: Populate game of life with perlin noise rather than random

let inc = 0.1;
let scl = 10;
let cols, rows;

let grid = [];
let next = [];

function setup() {
    createCanvas(600, 400);

    cols = floor(width / scl);
    rows = floor(height / scl);

    for (let i = 0; i < cols; i++) {
        grid[i] = [];
        for (let j = 0; j < rows; j++) {
            grid[i][j];
        }
    }

    for (let i = 0; i < cols; i++) {
        next[i] = [];
        for (let j = 0; j < rows; j++) {
            next[i][j];
        }
    }

}

function draw() {
    background(255);

    let yoff = 0;
    for (let j = 0; j < rows; j++) {
        let xoff = 0;
        for (let i = 0; i < cols; i++) {
            let noi = noise(xoff, yoff) * 10;
            grid[i][j] = noi;
            xoff += inc;

            let x = i * scl;
            let y = j * scl;

            if (grid[i][j] >= 5) {
                r = 0;
                g = 0;
                b = 0;
            } else {
                r = 255;
                g = 255;
                b = 255;
            }

            fill(r, g, b);
            rect(x, y, scl - 1 , scl - 1);
        }
        yoff += inc;
    }

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let state = grid[i][j];

            let sum = 0;
            let neigh = countNeigh(grid, i, j);

            if (state == 0 && neigh == 3) {
                next[i][j] = 1;
            } else if (state == 1 && (neigh < 2 || neigh > 3)) {
                next[i][j] = 0;
            } else {
                next[i][j] = state;
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
