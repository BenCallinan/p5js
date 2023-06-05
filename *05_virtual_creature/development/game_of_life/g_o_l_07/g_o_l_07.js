// Coding Challenge #85: The Game of Life

// https://www.youtube.com/watch?v=FWSR_7kZuYg

// Aim: Game of life on a 3D grid

let grid = [];
let next = [];

let cols, rows;

let scl = 10;

function setup() {
    createCanvas(600, 400);

    cols = width / scl;
    rows = height / scl;

    for (let i = 0; i < cols; i++) {
        grid[i] = [];
        for (let j = 0; j < rows; j++) {
            grid[i][j] = floor(random(2));
        }
    }

    // for (let i = 0; i < cols; i++) {
    //     next[i] = [];
    //     for (let j = 0; j < rows; j++) {
    //         next[i][j];
    //     }
    // }
}

function draw() {
    background(0);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {

            let x = i * scl;
            let y = j * scl;

            if (grid[i][j] == 1) {
                fill(255);
                stroke(0);
                rect(x, y, scl - 1, scl - 1);
            }
        }
    }

    //let next = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        next[i] = [];
        for (let j = 0; j < rows; j++) {
            next[i][j];
        }
    }

    // Compute next based on grid
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let state = grid[i][j];

        // Count live neighbours
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
