// Aim: Use createGraphics to make a class of particles

let pg;

let x = 50;
let y = 50;

let circleY = [];
let circleX = [];

function setup() {
	createCanvas(710, 400);

	pg = createGraphics(710, 400);

	for (let i = 0; i < 5; i++) {
		circleY[i] = random(height);
		circleX[i] = random(width);
	}
}

function draw() {
	background(0);

	for (i = 0; i < 5; i++) {
		image(pg, circleX[i], circleY[i]);

		circleY[i] = circleY[i] + random(-1, 1);
		circleX[i] = circleX[i] + random(-1, 1);

		if (circleY[i] > height) {
			circleY[i] = 0;
		}

		if (circleX[i] > width) {
			circleX[i] = 0;
		}
	}

	pg.stroke(random(255), random(255), random(255));
	pg.strokeWeight(6);
	pg.point(mouseX - 150, mouseY - 75);
}
