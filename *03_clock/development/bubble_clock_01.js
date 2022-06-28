// Aim: Create a clock where objects are used to represent hours, minutes
// and seconds

let hours = [];
let minutes = [];
let seconds = [];

function setup() {
    createCanvas(900, 400);

    var sec = second();
    var min = minute();
    var hrs = hour();

    for (let h = 0; h < hrs; h++) {
        hours[h] = new Hour(random(0, 300), random(0, 400));
    }

    for (let m = 0; m < min; m++) {
        minutes[m] = new Minute(random(300, 600), random(0, 400));
    }

    for (let s = 0; s < sec; s++) {
        seconds[s] = new Second(random(600, 900), random(0, 400));
    }
}

function draw() {
    background(0);

    // Get the current second, minute and hours
    // and assign to variables
    var sec = second();
    var min = minute();
    var hrs = hour();

    for (let h = 0; h < hrs; h++) {
        hours[h].move();
        hours[h].show();
    }

    for (let m = 0; m < min; m++) {
        minutes[m].move();
        minutes[m].show();
    }

    for (let s = 0; s < sec; s++) {
        seconds[s].move();
        seconds[s].show();
    }

    strokeWeight(4);

    // Check for AM or PM based on the hours
    // and storke in a variable
    var mer = hrs < 12 ? "AM":"PM";

    // Format the time so leading 0s are
    // added when needed
    sec = formatting(sec);
    min = formatting(min);
    hrs = formatting(hrs % 12);

    // Set the colour of the text
    fill(255);

    // Set the font size
    textSize(48);

    // Centre the text
    textAlign(CENTER, CENTER);

    // Display the time
    text(hrs + ":" + min + ":" + sec + " " + mer, width/2, height/2);
}

// Function to show leading 0s
function formatting(num) {

    // Convert to int and check if less than 10
    if (int(num) < 10) {

        // Return the number with 0s
        return "0" + num;
    }

    // Return the origianl number if no 0s are required
    return num;
}

// Circles that will represent hours
class Hour {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(255, 0, 0);
        ellipse(this.x, this.y, 50, 50);
    }
}

// Circles that will represent minutes
class Minute {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(0, 255, 0);
        ellipse(this.x, this.y, 50, 50);
    }
}

// Circles that will represent minutes
class Second {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(0, 0, 255);
        ellipse(this.x, this.y, 50, 50);
    }
}
