// Aim: Move the mountain to create a scrolling effect

let mountains = [];

function setup() {
	createCanvas(800,500);

	for (let i = 0; i < 20; i++) {
		let x = i * 100;
		mountains[i] = new Mountain(x);
    }
}

function draw() {
	background(0);

    for (let i = 0; i < mountains.length; i++) {
        mountains[i].show();
		mountains[i].move();

		if (mountains[i].x < -200) {
			mountains[i].x = width;
		}

		console.log(mountains[i].x);
    }
}
