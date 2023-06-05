// Aim: Create a clock where lines are used to represent hours, minutes
// and seconds

let hours = [];
let minutes = [];
let seconds = [];

function setup() {
    createCanvas(944, 300);
}

function draw() {
    background(200);

    // Loops 1 time per second
    frameRate(1);

    // Assign variables to the current
    // hours, minutes and seconds
    var hrs = hour();
    var min = minute();
    var sec = second();

    // Genrates the hour lines
    for (let h = 0; h < hrs; h++ ) {
        let x = 0 + 40 * h;
        hours[h] = new Hour(x, 0);
        hours[h].show();
        if (h <= hrs) {
            hours.splice(h);
        }
    }

    // Generates the minute lines
    for (let m = 0; m < min; m++ ) {
        let x = 8 + 16 * m;
        minutes[m] = new Minute(x, 100);
        minutes[m].show();
        if (m <= min) {
            minutes.splice(m);
        }
    }

    // Generates the second lines
    for (let s = 0; s < sec; s++ ) {
        let x = 0 + 16 * s;
        seconds[s] = new Second(x, 200);
        seconds[s].show();
        if (s <= sec) {
            seconds.splice(s);
        }
    }
}

// Lines that will represent hours
class Hour {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    show() {
        stroke(255);
        noStroke();
        fill(255, 0, 0);
        rect(this.x, this.y, 20, 100);
    }
}

// Lines that will represent minutes
class Minute {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    show() {
        stroke(255);
        noStroke();
        fill(255, 0, 0);
        rect(this.x, this.y, 8, 100);
    }
}

// Lines that will represent seconds
class Second {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    show() {
        stroke(255);
        noStroke();
        fill(255, 0, 0);
        rect(this.x, this.y, 8, 100);
    }
}
