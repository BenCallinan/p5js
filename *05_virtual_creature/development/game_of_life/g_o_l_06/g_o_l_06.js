// Coding Challenge #85: The Game of Life

// https://www.youtube.com/watch?v=FWSR_7kZuYg

// Aim: Game of life on a 3D grid

// function setup(){
//   createCanvas(400, 400, WEBGL);
//
//   background(51);
//
//   camera(-200, -200, -200,   // camera position (x, y, z)
//          0   , -100,    0,   // camera target (look at position) (x, y, z)
//          0   ,    1,    0);  // camera up axis: Y axis here
//
//   for (let x=0; x < width; x +=20){
//     for (let y = 0; y < height; y += 20) {
//         for (let z= 0; z < height; z +=20){
//             push();
//             // ground plane is XZ, not XY (front plane)
//             translate(x, y, z);
//             normalMaterial();
//             sphere(20);
//             pop();
//         }
//     }
//   }
// }

let grid = [];
let next = [];

let cols, rows, plane;

let scl = 20;

// function make2DArray(cols, rows) {
//     let arr = new Array(cols);
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = new Array(rows);
//     }
//     return arr;
// }



function setup() {
    createCanvas(200, 200, WEBGL);

    cols = floor(width / scl);
    rows = floor(height / scl);
    plane = floor(200 / scl);

    // grid = make2DArray(cols, rows);
    // for (let i = 0; i < cols; i++) {
    //     for (let j = 0; j < rows; j++) {
    //         grid[i][j] = floor(random(2));
    //     }
    // }

    for (let i = 0; i < cols; i++) {
        grid[i] = [];
        for (let j = 0; j < rows; j++) {
            grid[i][j] = [];
            for (let k = 0; k < plane; k++) {
                grid[i][j][k] = floor(random(2));
            }
        }
    }

    for (let i = 0; i < cols; i++) {
        next[i] = [];
        for (let j = 0; j < rows; j++) {
            next[i][j] = [];
            for (let k = 0; k < plane; k++) {
                next[i][j][k];
            }
        }
    }


    frameRate(10);
}

function draw() {
    background(0);


    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            for (let k = 0; k < rows; k++) {

                let x = i * scl;
                let y = j * scl;
                let z = k * scl;

                if (grid[i][j][k] == 1) {
                    push();
                    normalMaterial();
                    translate(x - 90, y - 90, z - 200);
                    sphere(scl / 2);
                    pop();
                }
            }
        }
    }

    //let next = make2DArray(cols, rows);

    // for (let i = 0; i < cols; i++) {
    //     for (let j = 0; j < rows; j++) {
    //         for (let k = 0; k < plane; k++) {
    //             let state = grid[i][j][k];
    //
    //             let sum = 0;
    //             let neigh = countNeigh(grid, i, j, k);
    //
    //             if (state == 0 && neigh == 3) {
    //                 next[i][j][k] = 1;
    //             } else if (state == 1 && (neigh < 2 || neigh > 3)) {
    //                 next[i][j][k] = 0;
    //             } else {
    //                 next[i][j][k] = state;
    //             }
    //         }
    //     }
    // }
    // grid = next;
}

function countNeigh(grid, x, y, z) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            for (let k = -1; k < 2; k++) {

                let col = (x + i + cols) % cols;
                let row = (y + j + rows) % rows;
                let pln = (z + k + plane) % plane;

                sum += grid[col][row][pln];
            }
        }
    }

    sum -= grid[x][y][z];
    return sum;
}
