// Sin Wave

// https://p5js.org/examples/math-sine-wave.html

let xspacing = 32; // distance between each horizontal location
let w; // width of the entire wave
let theta = 0.0; // start angle at theta 0
let amplitude = 185.0 // height of wave
let period = 250.0; // how many pixels before the wave repeats
let dx; // value for incrementing x
let yvalues; // using an array to store height values for the wave

function setup() {
	createCanvas(710, 400);
	w = width + 1;
	dx = (TWO_PI / period) * xspacing;
	yvalues = new Array(floor(w / xspacing));
}

function draw() {
	background(0, 255, 255);
	calcWave();
	renderWave();
}

function calcWave() {
	// increment theta (try different values for 'angular velocity' here)
	theta += 0.01;

	// for every x values, calculate a y value with sine function
	let x = theta;
	for (let i = 0; i < yvalues.length; i++) {
		yvalues[i] = sin(x) * amplitude;
		x += dx;
	}
}

function renderWave() {
	stroke(0, 200, 100);
	strokeWeight(2);
	fill(255, 100, 100);
	// A simple way to draw the wave with an ellipse at each location
	for (let x = 0; x < yvalues.length; x++) {
		//ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
		arc(x * xspacing, height / 2 + yvalues[x], 32, 32, 0, PI + QUARTER_PI);
	}
}
