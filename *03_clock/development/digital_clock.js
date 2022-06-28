// Aim: To create a working ditigal clock

// Code: Geeks for Geeks - How to make a digital clock in p5.js

// https://www.geeksforgeeks.org/how-to-make-digital-clock-in-p5-js/

function setup() {
    createCanvas(480, 480);
}

function draw() {
    background(0);

    strokeWeight(4);

    // Get the current second, minute and hours
    // and assign to variables
    var sec = second();
    var min = minute();
    var hrs = hour();

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
