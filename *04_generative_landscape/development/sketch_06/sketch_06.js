// Aim: Travel through a mountainous landscape


let tinMount = [];
let litMount = [];
let midMount = [];
let bigMount = [];

let lightnings = [];

let start = 0;
let change = 5000;
let colors = [];

let time = 0;

function setup() {
	createCanvas(800,500);

	colors[0] = color('#FFFFFF');
	colors[1] = color('#FF0000');

	background(colors[parseInt(random(-1, 2))]);

	setInterval(flash, 5000);

    for (let i = 0; i < 20; i++) {
		let x = 0 + i * 100;
		bigMount[i] = new BigM(x);
	}

	for (let i = 0; i < 20; i++) {
		let x = 0 + i * 100;
		midMount[i] = new MidM(x);
	}

	for (let i = 0; i < 20; i++) {
		let x = 0 + i * 100;
		litMount[i] = new LittleM(x);
	}

	for (let i = 0; i < 20; i++) {
		let x = 0 + i * 100;
		tinMount[i] = new TinyM(x);
    }
}

function flash() {
	for (let i = 0; i < 1; i++) {
		lightnings[i] = new Lightning(random(width), 0);
	}
}

function draw() {
	background(200, 225, 255);

	if (millis() - start > change) {
		background(colors[parseInt(random(-1, 2))]);
		start = millis();
	}

	for (let i = 0; i < lightnings.length; i++) {
		lightnings[i].update();
		lightnings[i].show();
		lightnings[i].move();
	}

    for (let i = 0; i < bigMount.length; i++) {
		bigMount[i].show();
		bigMount[i].move();

		if (bigMount[i].x < -200) {
			bigMount[i].x = width;
		}
    }

	for (let i = 0; i < midMount.length; i++) {
		midMount[i].show();
		midMount[i].move();

		if (midMount[i].x < -200) {
			midMount[i].x = width;
		}
    }

	for (let i = 0; i < litMount.length; i++) {
		litMount[i].show();
		litMount[i].move();

		if (litMount[i].x < -200) {
			litMount[i].x = width;
		}
    }

	for (let i = 0; i < tinMount.length; i++) {
		tinMount[i].show();
		tinMount[i].move();

		if (tinMount[i].x < -200) {
			tinMount[i].x = width;
		}
    }

	fill(0, 50, 100, 200);
	rect(0, 0, 800, 500);
}
