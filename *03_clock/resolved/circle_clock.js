// Aim: Create a clock where circles are used to represent hours, minutes
// and seconds

let hours = [];
let minutes = [];
let seconds = [];

function setup() {
    createCanvas(720, 300);
}

function draw() {
    background(0);

    // Loops 1 time per second
    frameRate(1);

    // Assign variables to the current
    // hours, minutes and seconds
    var hrs = hour();
    var min = minute();
    var sec = second();

    // Generates the hour circles
    for (let h = 0; h < hrs; h++ ) {
        let x = 15 + 30 * h;
        hours[h] = new Hour(x, 50);
        hours[h].show();
        if (h <= hrs) {
            hours.splice(h);
        }
    }

    // Generates the minute circles
    for (let m = 0; m < min; m++ ) {
        let x = 6 + 12 * m;
        minutes[m] = new Minute(x, 150);
        minutes[m].show();
        if (m <= min) {
            minutes.splice(m);
        }
    }

    // Generates the second circles
    for (let s = 0; s < sec; s++ ) {
        let x = 6 + 12 * s;
        seconds[s] = new Second(x, 250);
        seconds[s].show();
        if (s <= sec) {
            seconds.splice(s);
        }
    }
}

// Circles that will represent hours
class Hour {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {
        stroke(255);
        noStroke();
        fill(255, 0, 0);
        ellipse(this.x, this.y, 30, 30);
    }
}

// Circles that will represent minutes
class Minute {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {
        stroke(255);
        noStroke();
        fill(255, 255, 0);
        ellipse(this.x, this.y, 12, 12);
    }
}

// Circles that will represent seconds
class Second {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {
        stroke(255);
        noStroke();
        fill(255);
        ellipse(this.x, this.y, 12, 12);
    }
}
