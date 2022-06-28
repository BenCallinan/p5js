// Functions 5

// Aim: Convert degrees fahrenheit to degrees celsius

// Run code in p5.js web editor (https://editor.p5js.org/)

function setup() {
    var cel = fahToCel(100);
    print("100 degrees fahrenheit is", cel, "degrees celsius.");
}

function fahToCel(fah) {
    var cel = (fah - 32) / 1.8;
    return(cel);
}
