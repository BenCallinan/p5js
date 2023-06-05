// Aim: Create an ecosystem of different shapes

// Add sliders to change numbers of predators, creatures and food

// Add button to run program

// Add button to stop program

let predators = [];
let males = [];
let females = [];
let foods = [];

let offspring = 0;

let startBut;
let stopBut;
let resetBut;

let predSlide;
let malSlide;
let femSlide;
let fooSlide;

let predNum = 5;
let malNum = 50;
let femNum = 50;
let fooNum = 500;

let progGo = false;
let progStop = false;
let progRun = false;

let butName;

function setup() {
    createCanvas(800, 600);

    prog();

    // if (progRun = true) {
    //     prog();
    // }

    startBut = createButton("start");
    startBut.mousePressed(startProg);

    stopBut = createButton("stop");
    stopBut.mousePressed(stopProg);

    resetBut = createButton("reset");
    resetBut.mousePressed(resetProg);

    predSlide = createSlider(0, predNum, 1, 1);
    predSlide.changed(predChange);

    malSlide = createSlider(0, malNum, 5, 5);
    malSlide.changed(malChange);

    femSlide = createSlider(0, femNum, 5, 5);
    femSlide.changed(femChange);

    fooSlide = createSlider(0, fooNum, 100, 50);
    fooSlide.changed(fooChange);
}

// Runs program (runs same program IF stopped)
function startProg() {
    if (progGo = true) {
        loop();
        progRun = true;
    }
}

// Stops program
function stopProg() {
    if (progStop = true) {
        noLoop();
    }
}

// Resets program (resets to a new program)
function resetProg() {
    prog();
}

function predChange() {
    if (predNum != predNum) {
        predNum = predNum;
    }
}

function malChange() {
    if (malNum != malNum) {
        malNum = malNum;
    }
}

function femChange() {
    if (femNum != femNum) {
        femdNum = femNum;
    }
}

function fooChange() {
    if (fooNum != fooNum) {
        fooNum = fooNum;
    }
}

function prog() {

    // Predators (grey squares)
    for (let i = 0; i < predNum; i++) {
        let x = random(width);
        let y = random(height);
        let w = random(10, 20);

        predators[i] = new Predator(x, y, w);
    }

    // Males (blue circles)
    for (let j = 0; j < malNum; j++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 20);

        males[j] = new Male(x, y, r);
    }

    // Females (red circles)
    for (let k = 0; k < femNum; k++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 20);

        females[k] = new Female(x, y, r);
    }

    // Food (green triangles)
    for (let l = 0; l < fooNum; l++) {
        let x1 = random(width);
        let y1 = random(height);
        let x2 = x1 + random(10, 20);
        let y2 = y1;
        let x3 = x1 + random(5, 10);
        let y3 = y1 - random(10, 20);

        foods[l] = new Food(x1, y1, x2, y2, x3, y3);
    }

    frameRate(10);
}


function draw() {
    background(220, 215, 210);

    let predVal = predSlide.value();
    console.log(predVal);

    let malVal = malSlide.value();
    let femVal = femSlide.value();
    let foodVal = fooSlide.value();

    // Predators
    for (let i = 0; i < predVal; i++) {
        predators[i].show();
        predators[i].move();

        if (predators[i].x < 0 || predators[i].y < 0 ||
        predators[i].x > width || predators[i].y > height) {
            predators[i].x = random(width);
            predators[i].y = random(height);
        }
    }

    // Males
    for (let j = 0; j < malVal; j++) {
        males[j].show();
        males[j].move();

        if (males[j].x < 0 || males[j].y < 0 ||
        males[j].x > width || males[j].y > height) {
            males[j].x = random(width);
            males[j].y = random(height);
        }
    }

    // Females
    for (let k = 0; k < femVal; k++) {
        females[k].show();
        females[k].move();

        if (females[k].x < 0 || females[k].y < 0 ||
        females[k].x > width || females[k].y > height) {
            females[k].x = random(width);
            females[k].y = random(height);
        }
    }

    // Food
    for (let l = 0; l < foodVal; l++) {
        foods[l].show();
    }

    // Predator eat males
    for (let i = 0; i < predVal; i++) {
        for (let j = 0; j < malVal; j++) {

            if (predators[i].intersects(males[j])) {
                males.splice(j, 1);
                predators[i].r = predators[i].r + 2;
            }
        }
    }

    // Predator eats females
    for (let i = 0; i < predVal; i++) {
        for (k = 0; k < femVal; k++) {

            if (predators[i].intersects(females[k])) {
                females.splice(k, 1);
                predators[i].r = predators[i].r + 2;
            }
        }
    }

    // Males and females reproduce
    for (let j = 0; j < malVal; j++) {
        for (let k = 0; k < femVal; k++) {
            if (males[j].cirIntersects(females[k])) {

                for (let j = 0; j < offspring; j++) {
                    let x = random(width);
                    let y = random(height);
                    let r = random(20);

                    m = new Male(x, y, r);

                    males.splice(j, 1, m);
                }
                offspring++;
            }
        }
    }
    // Limits the number of offspring
    if (offspring >= 10) {
        offspring = 0;
    }

    // Males eat food and grow
    for (let j = 0; j < malVal; j++) {
        for (let l = 0; l < foodVal; l++) {

            if (males[j].triIntersects(foods[l])) {
                foods.splice(l, 1);
                males[j].r = males[j].r + 1;
            }
        }
    }

    // Females eat food and grow
    for (let k = 0; k < femVal; k++) {
        for (let l = 0; l < foodVal; l++) {

            if (females[k].triIntersects(foods[l])) {
                foods.splice(l, 1);
                females[k].r = females[k].r + 1;
            }
        }
    }
}
