// Draw in 3D

let sliderGroup = [];
let x;
let y;
let z;
let centreX;
let centreY;
let centreZ;
let h = 20;

let pens = [];

function setup() {
    createCanvas(600, 400, WEBGL);

    for (let i = 0; i < 6; i++) {
        if (i === 2) {
            sliderGroup[i] = createSlider(10, 400, 200);
        } else {
            sliderGroup[i] = createSlider(-400, 400, 0);
        }
        h = map(i, 0, 6, 5, 85);
        sliderGroup[i].position(10, height + h);
        sliderGroup[i].style('width', '80px');
    }
}

function draw() {
    background(0);

    translate(-300, -200);

    for (let i = 0; i < pens.length; i++) {
        pens[i].show();
    }

    x = sliderGroup[0].value();
    y = sliderGroup[1].value();
    z = sliderGroup[2].value();
    centreX = sliderGroup[3].value();
    centreY = sliderGroup[4].value();
    centreZ = sliderGroup[5].value();
    camera(x, y, z, centreX, centreY, centreZ, 0, 1, 0);
}

function mouseDragged() {
    let p = new Pen(mouseX, mouseY, pmouseX, pmouseY);
    pens.push(p);
}

class Pen {
    constructor(x, y, px, py) {
        this.x = x;
        this.y = y;
        this.px = px;
        this.py = py;
    }

    show() {
        noFill();
        stroke(255);
        strokeWeight(4);
        beginShape();
        vertex(this.x, this.y);
        vertex(this.px, this.py);
        endShape();
    }
}
