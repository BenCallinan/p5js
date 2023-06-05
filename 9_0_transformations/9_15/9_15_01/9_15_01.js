// 9.15: 2D Arrays in JavaScript

// https://www.youtube.com/watch?v=OTNpiLUSiB4&list=PLRqwX-V7Uu6ZmA-d3D0iFIvgrB5_7kB8H&index=15

let cols = 10;
let rows = 10;

let colors = [];

function make2Darray(cols, rows) {
    let arr = new Array(cols)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

function setup() {
    createCanvas(300, 300);
    for (let i = 0; i < cols; i++) {
        colors[i] = [];
        for (let j = 0; j < rows; j++) {
            colors[i][j] = random(255);
        }
    }
}

function draw() {
    background(51);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * 30;
            let y = j * 30;
            fill(colors[i][j]);
            stroke(0);
            rect(x, y, 30, 30);
        }
    }
}
