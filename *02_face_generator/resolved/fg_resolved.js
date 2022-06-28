// Face Generator Resolved

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
    tFace1 = loadImage('face_parts/f_01_top.png');
    mFace1 = loadImage('face_parts/f_01_mid.png');
    bFace1 = loadImage('face_parts/f_01_bot.png');

    tFace2 = loadImage('face_parts/m_01_top_l_57pc.png');
    mFace2 = loadImage('face_parts/m_01_mid_l_57pc.png');
    bFace2 = loadImage('face_parts/m_01_bot_l_57pc.png');

    tFace3 = loadImage('face_parts/f_02_top_l_25pc.png');
    mFace3 = loadImage('face_parts/f_02_mid_l_25pc.png');
    bFace3 = loadImage('face_parts/f_02_bot_l_25pc.png');

    tFace4 = loadImage('face_parts/m_03_top_30pc.png');
    mFace4 = loadImage('face_parts/m_03_mid_30pc.png');
    bFace4 = loadImage('face_parts/m_03_bot_30pc.png');
}

function setup() {
    createCanvas(500, 600);
}

function draw() {
    background(0);

    // Top third of face
    if (onT === 0) {
        image(tFace1, 80, 75);
    } else if (onT === 1) {
        image(tFace4, 75, 55);
    } else if (onT === 2) {
        image(tFace2, 110, 85);
    } else if (onT === 3) {
        image(tFace3, 75, 43);
    }

    // Middle third of face
    if (onM === 0) {
        image(mFace2, 83, 208);
    } else if (onM === 1) {
        image(mFace3, 68, 200);
    } else if (onM === 2) {
        image(mFace1, 72, 200);
    } else if (onM === 3) {
        image(mFace4, 67, 207);
    }

    // Bottom third of face
    if (onB === 0) {
        image(bFace3, 87.5, 400);
    } else if (onB === 1) {
        image(bFace2, 85, 400);
    } else if (onB === 2) {
        image(bFace4, 84, 400);
    } else if (onB === 3) {
        image(bFace1, 88, 400);
    }

    // Separates the parts into a tryptych

    noStroke();
    rect(0, 200, 500, 10);

    noStroke();
    rect(0, 400, 500, 10);
}

function mousePressed() {

    // Press the mouse on the top third of the face
    if (onT === 0 && mouseX > 0 && mouseX < 500 && mouseY > 0 && mouseY < 200) {
        onT = onT + 1;
    } else if (onT === 1 && mouseX > 0 && mouseX < 500 && mouseY > 0 && mouseY < 200) {
        onT = onT + 1;
    } else if (onT === 2 && mouseX > 0 && mouseX < 500 && mouseY > 0 && mouseY < 200) {
        onT = onT + 1;
    } else if (onT === 3 && mouseX > 0 && mouseX < 500 && mouseY > 0 && mouseY < 200) {
        onT = onT - 3;
    }

    // Press the mouse on the middle third of the face
    if (onM === 0 && mouseX > 0 && mouseX < 500 && mouseY > 200 && mouseY < 400) {
        onM = onM + 1;
    } else if (onM === 1 && mouseX > 0 && mouseX < 500 && mouseY > 200 && mouseY < 400) {
        onM = onM + 1;
    } else if (onM === 2 && mouseX > 0 && mouseX < 500 && mouseY > 200 && mouseY < 400) {
        onM = onM + 1;
    } else if (onM === 3 && mouseX > 0 && mouseX < 500 && mouseY > 200 && mouseY < 400) {
        onM = onM - 3;
    }

    // Press the mouse on the bottom third of the face
    if (onB === 0 && mouseX > 0 && mouseX < 500 && mouseY > 400 && mouseY < 600) {
        onB = onB + 1;
    } else if (onB === 1 && mouseX > 0 && mouseX < 500 && mouseY > 400 && mouseY < 600) {
        onB = onB + 1;
    } else if (onB === 2 && mouseX > 0 && mouseX < 500 && mouseY > 400 && mouseY < 600) {
        onB = onB + 1;
    } else if (onB === 3 && mouseX > 0 && mouseX < 500 && mouseY > 400 && mouseY < 600) {
        onB = onB - 3;
    }
}
