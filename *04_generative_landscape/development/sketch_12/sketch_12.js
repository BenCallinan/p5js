// Aim: Use a pixels and perlin noise to make terrain

let inc = 0.01;

let flying = 0;

function setup() {
	createCanvas(600, 600);
	pixelDensity(1);
}

function draw() {

	flying += 0.05;

	let yoff = flying;

	loadPixels();
	for (let x = 0; x < width; x++) {
		let xoff = 0;
		for (let y = 0; y < height; y++) {
			let index = (x + y * width) * 4;
			let noi = noise(xoff, yoff) * 255;
			// // Red
			// pixels[index+0] = noi;
			// // Green
			// pixels[index+1] = noi;
			// // Blue
			// pixels[index+2] = noi;
			// Alpha
			pixels[index+3] = 255;

			//mountains
			if (noi <= 60) {
				pixels[index+0] = 200;
				pixels[index+1]= 175;
				pixels[index+2] = 100;
			} else if (noi > 60 && noi <= 70) {
				pixels[index+0] = 200;
				pixels[index+1]= 150;
				pixels[index+2] = 50;

			// land
			} else if (noi > 70 && noi <= 80) {
				pixels[index+0] = 100;
				pixels[index+1]= 200;
				pixels[index+2] = 0;
			} else if (noi > 80 && noi <= 90) {
				pixels[index+0] = 0;
				pixels[index+1]= 150;
				pixels[index+2] = 0;
			} else if (noi > 90 && noi <= 120) {
				pixels[index+0] = 0;
				pixels[index+1]= 100;
				pixels[index+2] = 0;

			// ocean
			} else if (noi > 120 && noi <= 160) {
				pixels[index+0] = 50;
				pixels[index+1]= 200;
				pixels[index+2] = 255;
			} else if (noi > 160 && noi <= 180) {
				pixels[index+0] = 0;
				pixels[index+1]= 125;
				pixels[index+2] = 255;
			} else if (noi > 180) {
				pixels[index+0] = 0;
				pixels[index+1]= 100;
				pixels[index+2] = 200;
			}

			else {pixels[index+0] = 255; pixels[index+1]= 255; pixels[index+2] = 255;}

			xoff += inc;
			console.log(noi);
		}
		yoff += inc;
	}
	updatePixels();
}
