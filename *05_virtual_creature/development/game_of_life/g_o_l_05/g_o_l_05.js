// Coding Challenge #85: The Game of Life

// https://www.youtube.com/watch?v=FWSR_7kZuYg

// Aim: Game of live with a 3D webgl object

let grid;
let next;
let cols, rows;

let scl = 10;

function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}



function setup() {
    createCanvas(600, 400, WEBGL);

    cols = floor(width / scl);
    rows = floor(height / scl);

    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = floor(random(2));
        }
    }
    
    frameRate(10);
}

function draw() {
    background(0);


    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {

            let x = i * scl;
            let y = j * scl;

            if (grid[i][j] == 1) {
                push();
                normalMaterial();
                translate(x - 290, y - 190, 0);
                sphere(scl / 2);
                pop();
            }
        }
    }

    let next = make2DArray(cols, rows);

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
