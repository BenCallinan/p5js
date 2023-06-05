// Aim: Create mountains of different heights


let tinMount = [];
let litMount = [];
let midMount = [];
let bigMount = [];


function setup() {
	createCanvas(800,500);

    for (let i = 0; i < 8; i++) {
		let x = 0 + i * 100;
		bigMount[i] = new BigM(x);
	}

	for (let i = 0; i < 8; i++) {
		let x = 0 + i * 100;
		midMount[i] = new MidM(x);
	}

	for (let i = 0; i < 8; i++) {
		let x = 0 + i * 100;
		litMount[i] = new LittleM(x);
	}

	for (let i = 0; i < 8; i++) {
		let x = 0 + i * 100;
		tinMount[i] = new TinyM(x);
    }
}

function draw() {
	background(200, 225, 255);

    for (let i = 0; i < bigMount.length; i++) {
		bigMount[i].show();
    }

	for (let i = 0; i < midMount.length; i++) {
		midMount[i].show();
    }

	for (let i = 0; i < litMount.length; i++) {
		litMount[i].show();
    }

	for (let i = 0; i < tinMount.length; i++) {
		tinMount[i].show();
    }


}
