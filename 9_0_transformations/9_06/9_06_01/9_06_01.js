// Aim: Create two blocks that change colour using a closure

let timer = 0;
let counter = 0;

let red;
let green;
let blue;

let red1;
let green2;
let blue3;

function setup() {
    createCanvas(400, 400);
    //timer = createP('timer');
    //speed = setInterval(timePass, 500);

    makeTimer(red, 5000);
    makeTimer(green, 1000);
    makeTimer(blue, 2500);
    makeTimer(red1, 5000);
    makeTimer(green2, 1000);
    makeTimer(blue3, 2500);

    red = random(255);
    green = random(255);
    blue = random(255);

    red1 = random(255);
    green2 = random(255);
    blue3 = random(255);
}

function draw() {
    background(0);
    rectMode(CENTER);

    noStroke();
    fill(red, green, blue);
    rect(200, 100, 400, 200);

    noStroke();
    fill(red1, green2, blue3);
    rect(200, 300, 400, 200);
}

function makeTimer(elt, wait) {
    setInterval(timePass, wait);
    function timePass() {
        //timer.html(counter);
        //counter++;
        red++;
        green++;
        blue++;
        red1++;
        green2++;
        blue3++;
    }
}

// function timePass() {
//     timer.html(counter);
//     counter++;
//     red++;
//     green++;
//     blue++;
// }
