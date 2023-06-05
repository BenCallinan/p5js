// Aim: Travel through a mountainous landscape


let tinMount = [];
let litMount = [];
let midMount = [];
let bigMount = [];


function setup() {
	createCanvas(800,500);

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

function draw() {
	background(200, 225, 255);

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

	fill(0, 50, 100, 150);
	rect(0, 0, 800, 500);
}
