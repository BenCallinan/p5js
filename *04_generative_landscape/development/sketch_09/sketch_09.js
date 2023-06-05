// Aim: Move the terrain to create the effect of flying above it

// This doesn't work!

// Try again at a smaller scale?

let inc = 0.04;
let scl = 5;
let cols, rows;

let r = 0;
let g = 0;
let b = 0;

let flying = 0;

function setup() {
	createCanvas(600, 600);
	cols = floor(width / scl);
	rows = floor(height / scl);
}

function draw() {

	flying -= 0.1;

	let yoff = flying;
	for (let y = 0; y < rows; y++) {
		let xoff = 0;
		for (let x = 0; x < cols; x++) {
			let index = (x + y * width) * 4;
			let noi = noise(xoff, yoff) * 255;
			xoff += inc;

			// mountains
			if (noi <= 60) {r = 200; g= 175; b = 100;}
			else if (noi > 60 && noi <= 70) {r = 200; g= 150; b = 50;}

			// land
			else if (noi > 70 && noi <= 80) {r = 100; g= 200; b = 0;}
			else if (noi > 80 && noi <= 90) {r = 0; g= 150; b = 0;}
			else if (noi > 90 && noi <= 120) {r = 0; g= 100; b = 0;}

			// ocean
			else if (noi > 120 && noi <= 160) {r = 50; g= 200; b = 255;}
			else if (noi > 160 && noi <= 180) {r = 0; g= 125; b = 255;}
			else if (noi > 180) {r = 0; g= 100; b = 200;}

			else {r = 255; g= 255; b = 255;}

			//noStroke();
			fill(r, g, b);
			noStroke();
			rect(x * scl, y * scl, scl, scl);
			console.log(noi);
		}
		yoff += inc;
	}
	//noLoop();
}
