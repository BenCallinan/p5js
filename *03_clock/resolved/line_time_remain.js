// Aim: Create a clock where lines are used to count down how many hours
// remain in the day

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

    // Variables for hour, minutes and seconds
    // remaining in the day
    var hrsRem = 23 - hour();
    var minRem = 59 - minute();
    var secRem = 59 - second();

    // Counts down the hours remaining in the day
    for (let h = 0; h < hrsRem; h++ ) {
        let x = 924 - 40 * h;
        hours[h] = new Hour(x, 0);
        hours[h].show();
        if (h <= hrsRem) {
            hours.splice(h);
        }
    }

    // Counts down the minutes remaining in the hour
    for (let m = 0; m < minRem; m++ ) {
        let x = 944 - 16 * m;
        minutes[m] = new Minute(x, 100);
        minutes[m].show();
        if (m <= minRem) {
            minutes.splice(m);
        }
    }

    // Counts down the seconds remaing in the minute
    for (let s = 0; s < secRem; s++ ) {
        let x = 936 - 16 * s;
        seconds[s] = new Second(x, 200);
        seconds[s].show();
        if (s <= secRem) {
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
