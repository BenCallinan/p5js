// Aim: Create a digital clock that counts down
// how much time is left in the day

function setup() {
    createCanvas(480, 480);
}

function draw() {
    background(0);

    strokeWeight(4);

    // Get the current second, minute and hours
    // and assign to variables
    var secRem = 59 - second();
    var minRem = 59 - minute();
    var hrsRem = 23 - hour();

    // Check for AM or PM based on the hours
    // and storke in a variable
    //var mer = hrsRem < 12 ? "AM":"PM";

    // Format the time so leading 0s are
    // added when needed
    secRem = formatting(secRem);
    minRem = formatting(minRem);
    hrsRem = formatting(hrsRem);

    // Set the colour of the text
    fill(255);

    // Set the font size
    textSize(48);

    // Centre the text
    textAlign(CENTER, CENTER);

    // Display the time
    text(hrsRem + ":" + minRem + ":" + secRem, width/2, height/2);
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
