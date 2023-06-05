// 9.15: 2D Arrays in JavaScript

// https://www.youtube.com/watch?v=OTNpiLUSiB4&list=PLRqwX-V7Uu6ZmA-d3D0iFIvgrB5_7kB8H&index=15

let rdCols = 300;
let rdRows = 300;
let reds = [];

let blCols = 100;
let blRows = 100;
let blues = [];


function setup() {
    createCanvas(300, 300);

    for (let i = 0; i < rdCols; i++) {
        reds[i] = [];
        for (let j = 0; j < rdRows; j++) {
            reds[i][j] = random(255);
        }
    }

    for (let i = 0; i < blCols; i++) {
        blues[i] = [];
        for (let j = 0; j < blRows; j++) {
            blues[i][j] = random(255);
        }
    }
}

function draw() {
    background(51);

    for (let i = 0; i < rdCols; i++) {
        for (let j = 0; j < rdRows; j++) {
            let x = i * 2;
            let y = j * 2;
            fill(reds[i][j], 0, 0);
            stroke(0);
            rect(x, y, 2, 2);
        }
    }

    translate(50, 50);
    for (let i = 0; i < blCols; i++) {
        for (let j = 0; j < blRows; j++) {
            let x = i * 2;
            let y = j * 2;
            fill(0, 0, blues[i][j]);
            stroke(0);
            rect(x, y, 2, 2);
        }
    }
}
