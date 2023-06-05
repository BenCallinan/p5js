// Aim: Sketch landscape shapes

let mountains = [];

function setup() {
	createCanvas(800,500);

    for (let i = 0; i < 10; i++) {
		let x = random(width);
        mountains[i] = new Mountain(x);
    }
}

function draw() {
	background(0);

    for (let i = 0; i < mountains.length; i++) {
        mountains[i].show();
    }
}
