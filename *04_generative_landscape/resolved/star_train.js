// Aim: Create a miniature world using a sphere

// Variables for sphere
let cols, rows;
let scl = 20;
let w = 200;
let h = 200;
let flying = 0;
let terrain = [];

// Variables for camera
let sliderGroup = [];
let X;
let Y;
let Z;
let centerX;
let centerY;
let centerZ;
let hgt = 20;

// Variables for train
let train;
let angle = 0;

let wood;

let stars;

function preload() {
	train = loadModel('toon_train.obj');
	wood = loadImage('wood.jpg');
	stars = loadImage('stars_3.jpg');
}

function setup() {
	createCanvas(600, 600, WEBGL);
	angleMode(DEGREES);

	cols = floor(w / scl);
	rows = floor(h / scl);

	for (let x = 0; x < cols; x++) {
		terrain[x] = [];
		for (let y = 0; y < rows; y++) {
			terrain[x][y] = 0;
		}
	}

	// create sliders
	for (let i = 0; i < 6; i++) {
		if (i === 2) {
			sliderGroup[i] = createSlider(10, 400, 200);
		} else {
			sliderGroup[i] = createSlider(-400, 400, 0);
		}
		h = map(i, 0, 6, 5, 85);
		sliderGroup[i].position(10, height + h);
		sliderGroup[i].style('width', '80px');
	}

	fill(random(255), random(255), random(255), 50);
}

function draw() {
	background(10, 5, 30);

	flying -= 0;

	let yoff = flying;
	for (y = 0; y < rows; y++) {
		let xoff = 0;
		for (let x = 0; x < rows; x++) {
			terrain[x][y] = floor(map(noise(xoff, yoff), 0, 1, 0, 24));
			xoff += 0.2;
		}
	yoff += 0.2;
	}

	noStroke();
	ambientLight(255);

	for (let y = 0; y < rows; y++) {
		for (let x = 0; x < cols; x++) {

			push();
			fill(225, 255);
			rotate(200);
			rotateZ(frameCount * 0.001);
			rotateX(frameCount * 0.001);
			rotateY(frameCount * 0.001);
			sphere(199, terrain[x][y], terrain[x][y]);
			pop();

			push();
			rotateZ(frameCount * 0.001);
			rotateX(frameCount * 0.001);
			rotateY(frameCount * 0.001);
			sphere(200, terrain[x][y], terrain[x][y]);
			pop();
		}
	}

	// assigning sliders' value to each paramaters
	X = sliderGroup[0].value();
	Y = sliderGroup[1].value();
	Z = sliderGroup[2].value();
	centerX = sliderGroup[3].value();
	centerY = sliderGroup[4].value();
	centerZ = sliderGroup[5].value();
	camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);

	push();
	rotate(angle);
	strokeWeight(0.05);
	texture(wood);
	translate(-150, 150);
	rotateX(-240);
	rotateY(0);
	rotateZ(-240);
	model(train);
	angle = angle + -0.1;
	pop();
}
