// https://p5js.org/examples/simulate-game-of-life.html

let w;
let columns;
let rows;
let board;
let next;

function setup() {
    createCanvas(720, 400);

    w = 20;

    // Calculate columns and rows
    columns = floor(width / w);
    rows = floor(height / w);

    // Wacky was to make a 2D array in JS
    board = new Array(columns);
    for (let i = 0; i < columns; i++) {
        board[i] = new Array(rows);
    }

    // Going to use multiple 2D arrays and swap them
    next = new Array(columns);
    for (i = 0; i < columns; i++) {
        next[i] = new Array(rows);
    }
    init();
}

function draw() {
    background(255);

    generate();

    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            if ((board[i][j] == 1)) {
                fill(0);
            } else {
                fill(255);
            }
            stroke(0);
            rect(i * w, j * w, w - 1, w - 1 );
        }
    }
}

// Fill board randomnly
function init() {
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {

            // Lining the edges with 0s
            if (i == 0 || j == 0 || i == columns - 1 || j == rows - 1) {
                board[i][j] = 0;
            }

            // Filling the rest randomnly
            else {
                board[i][j] = floor(random(2));
                next[i][j] = 0;
            }
        }
    }
}

function generate() {

    // Loop through every spot the our 2D array and check neighbours
    for (let x = 1; x < columns - 1; x++) {
        for (let y = 1; y < rows - 1; y++) {

            // Add up all the states in a 3x3 surrounding grid
            let neighbours = 0;
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    neighbours += board[x + i][y + j];
                }
            }

            // A little trick to subtract the current cell's state since
            // we added it in the above loop
            neighbours -= board[x][y];

            // Rules of life
            if ((board[x][y] == 1) && (neighbours < 2)) {
                next[x][y] = 0;
            } else if ((board[x][y] == 1) && (neighbours > 3)) {
                next[x][y] = 0;
            } else if ((board[x][y] == 0) && (neighbours == 3)) {
                next[x][y] = 1;
            } else {
                next[x][y] = board[x][y]
            }
        }
    }
    // Swap
    let temp = board;
    board = next;
    next = temp;
}
