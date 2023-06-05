// Aim: Create a clock where lines are used to count down how many
// hours, minutes and seconds remain in the day

let hours = [];
let minutes = [];
let seconds = [];

function setup() {
    createCanvas(1440, 300);
}

function draw() {
    background(200);

    // Loops 1 time per second
    frameRate(1);

    // Variables for hour, minutes and seconds
    // remaining in the day
    var hrsRem = 23 - hour();
    var minRem = ((23 - hour()) * 60) + (60 - minute());
    var secRem = ((23 - hour()) * 3600) + ((60 - minute()) * 60) + (60 - second());

    console.log(hrsRem)
    console.log(minRem)
    console.log(secRem)

    // Counts down the hours remaining in the day
    for (let h = 0; h < hrsRem; h++ ) {
        let x = 1380 - 60 * h;
        hours[h] = new Hour(x, 0);
        hours[h].show();
        if (h <= hrsRem) {
            hours.splice(h);
        }
    }

    // Counts down the minutes remaining in the day
    for (let m = 0; m < minRem; m++ ) {
        let x = 1440 - 1 * m;
        minutes[m] = new Minute(x, 100);
        minutes[m].show();
        if (m <= minRem) {
            minutes.splice(m);
        }
    }

    // Counts down the seconds remaing in the day
    for (let s = 0; s < secRem; s++ ) {
        let x = 1440 - 0.016 * s;
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
        fill(0, 0, 0);
        rect(this.x, this.y, 30, 100);
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
        fill(0, 0, 0);
        rect(this.x, this.y, 0.5, 100);
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
        fill(0, 0, 0);
        rect(this.x, this.y, 0.0083, 100);
    }
}
