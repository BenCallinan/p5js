// Face Generator Version 2.0

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

let bFace4;
let mFace4;
let tFace4;

let onT = 0;
let onM = 0;
let onB = 0;

var button;

function preload() {
    bFace1 = loadImage('face_parts/*version_02/f_01_bot.png');
    mFace1 = loadImage('face_parts/*version_02/f_01_mid.png');
    tFace1 = loadImage('face_parts/*version_02/f_01_top.png');

    bFace2 = loadImage('face_parts/*version_02/m_01_bot.png');
    mFace2 = loadImage('face_parts/*version_02/m_01_mid.png');
    tFace2 = loadImage('face_parts/*version_02/m_01_top.png');

    bFace3 = loadImage('face_parts/*version_02/f_02_bot.png');
    mFace3 = loadImage('face_parts/*version_02/f_02_mid.png');
    tFace3 = loadImage('face_parts/*version_02/f_02_top.png');

    bFace4 = loadImage('face_parts/*version_02/m_02_bot.png');
    mFace4 = loadImage('face_parts/*version_02/m_02_mid.png');
    tFace4 = loadImage('face_parts/*version_02/m_02_top.png');
}

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(0);

    // image(tFace4, 80, 3);
    // image(mFace4, 74, 143);
    // image(bFace4, 94, 332);

    // Top third of face
    if (onT === 0) {
        image(tFace1, 80, 7);
    } else if (onT === 1) {
         image(tFace2, 125, 32);
    } else if (onT === 2) {
         image(tFace3, 110, 42);
    } else if (onT === 3) {
        image(tFace4, 80, 3);
    }

    // Middle third of face
    if (onM === 0) {
         image(mFace1, 72, 127);
    } else if (onM === 1) {
        image(mFace2, 100, 127);
    } else if (onM === 2) {
        image(mFace3, 101, 166);
    } else if (onM === 3) {
        image(mFace4, 74, 143);
    }

    // Bottom third of face
    if (onB === 0) {
         image(bFace1, 88, 334);
    } else if (onB === 1) {
        image(bFace2, 102.5, 294);
    } else if (onB === 2) {
        image(bFace3, 119, 322);
    } else if (onB === 3) {
        image(bFace4, 94, 332);
    }
}

function mousePressed() {

    // Press the mouse on the top third of the face
    if (onT === 0 && mouseX > 172 && mouseX < 543 && mouseY > 10 && mouseY < 181) {
        onT = onT + 1;
    } else if (onT === 1 && mouseX > 172 && mouseX < 543 && mouseY > 10 && mouseY < 181) {
        onT = onT + 1;
    } else if (onT === 2 && mouseX > 172 && mouseX < 543 && mouseY > 10 && mouseY < 181) {
        onT = onT + 1;
    } else if (onT === 3 && mouseX > 172 && mouseX < 543 && mouseY > 10 && mouseY < 181) {
        onT = onT - 3;
    }

    // Press the mouse on the middle third of the face
    if (onM === 0 && mouseX > 132 && mouseX < 566 && mouseY > 150 && mouseY < 424) {
        onM = onM + 1;
    } else if (onM === 1 && mouseX > 132 && mouseX < 566 && mouseY > 150 && mouseY < 424) {
        onM = onM + 1;
    } else if (onM === 2 && mouseX > 132 && mouseX < 566 && mouseY > 150 && mouseY < 424) {
        onM = onM + 1;
    } else if (onM === 3 && mouseX > 132 && mouseX < 566 && mouseY > 150 && mouseY < 424) {
        onM = onM - 3;
    }

    // Press the mouse on the bottom third of the face
    if (onB === 0 && mouseX > 175 && mouseX < 524 && mouseY > 360 && mouseY < 603) {
        onB = onB + 1;
    } else if (onB === 1 && mouseX > 175 && mouseX < 524 && mouseY > 360 && mouseY < 603) {
        onB = onB + 1;
    } else if (onB === 2 && mouseX > 175 && mouseX < 524 && mouseY > 360 && mouseY < 603) {
        onB = onB + 1;
    } else if (onB === 3 && mouseX > 175 && mouseX < 524 && mouseY > 360 && mouseY < 603) {
        onB = onB - 3;
    }
}
