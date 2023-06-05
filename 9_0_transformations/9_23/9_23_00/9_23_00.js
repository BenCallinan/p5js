// 9.23: createGraphics()

// https://www.youtube.com/watch?v=pNDc8KXWp9E&list=PLRqwX-V7Uu6ZmA-d3D0iFIvgrB5_7kB8H&index=23

let graphics;

function setup() {
	createCanvas(400, 300);
	graphics = createGraphics(400, 300);
	graphics.background(0);
}

function draw() {
	if (mouseIsPressed) {
		graphics.fill(255);
		graphics.stroke(255);
		graphics.ellipse(mouseX, mouseY, 64);
	}

	image(graphics, 0, 0);

	fill(255, 0, 255);
	ellipse(mouseX, mouseY, 32);
}
