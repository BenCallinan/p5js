// Face Generator

// Aim: Faces with elements that change when each part is clicked

let bFace1;
let mFace1;
let tFace1;

let bFace2;
let mFace2;
let tFace2;

let bFace3;
let mFace3;
let tFace3;

let onT = 0;
let onM = 0;
let onB = 0;

var button;

function preload() {
    bFace1 = loadImage('face_parts/*version_02/f_01_bot.png');
    mFace1 = loadImage('face_parts/*version_02/f_01_bot.png');
    tFace1 = loadImage('face_parts/*version_02/f_01_bot.png');

    bFace2 = loadImage('face_parts/bottom_third/m_bot_third_01_small.png');
    mFace2 = loadImage('face_parts/middle_third/m_mid_third_01_small.png');
    tFace2 = loadImage('face_parts/top_third/m_top_third_01_small.png');

    bFace3 = loadImage('face_parts/bottom_third/f_bot_third_02_small.png');
    mFace3 = loadImage('face_parts/middle_third/f_mid_third_02_small.png');
    tFace3 = loadImage('face_parts/top_third/f_top_third_02_small.png');
}

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);

    // Top third of face
    if (onT === 0) {
        image(tFace1, 197, 42);
    } else if (onT === 1) {
        image(tFace2, 172, 10);
    } else if (onT === 2) {
        image(tFace3, 197, 42);
    }

    // Middle third of face
    if (onM === 0) {
         image(mFace1, 156, 160);
    } else if (onM === 1) {
        image(mFace2, 132, 150);
    } else if (onM === 2) {
        image(mFace3, 170, 161);
    }

    // Bottom third of face
    if (onB === 0) {
         image(bFace1, 200, 370);
    } else if (onB === 1) {
        image(bFace2, 175, 360);
    } else if (onB === 2) {
        image(bFace3, 200, 302);
    }
}

function mousePressed() {

    // Press the mouse on the top third of the face
    if (onT === 0 && mouseX > 172 && mouseX < 543 && mouseY > 10 && mouseY < 181) {
        onT = onT + 1;
    } else if (onT === 1 && mouseX > 172 && mouseX < 543 && mouseY > 10 && mouseY < 181) {
        onT = onT + 1;
    } else if (onT === 2 && mouseX > 172 && mouseX < 543 && mouseY > 10 && mouseY < 181) {
        onT = onT - 2;
    }

    // Press the mouse on the middle third of the face
    if (onM === 0 && mouseX > 132 && mouseX < 566 && mouseY > 150 && mouseY < 424) {
        onM = onM + 1;
    } else if (onM === 1 && mouseX > 132 && mouseX < 566 && mouseY > 150 && mouseY < 424) {
        onM = onM + 1;
    } else if (onM === 2 && mouseX > 132 && mouseX < 566 && mouseY > 150 && mouseY < 424) {
        onM = onM - 2;
    }

    // Press the mouse on the bottom third of the face
    if (onB === 0 && mouseX > 175 && mouseX < 524 && mouseY > 360 && mouseY < 603) {
        onB = onB + 1;
    } else if (onB === 1 && mouseX > 175 && mouseX < 524 && mouseY > 360 && mouseY < 603) {
        onB = onB + 1;
    } else if (onB === 2 && mouseX > 175 && mouseX < 524 && mouseY > 360 && mouseY < 603) {
        onB = onB - 2;
    }
}
