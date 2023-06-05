// 9.22: Custom Shapes

// https://www.youtube.com/watch?v=76fiD5DvzeQ&list=PLRqwX-V7Uu6ZmA-d3D0iFIvgrB5_7kB8H&index=22

function setup() {
	createCanvas(400, 400);
	background(0);
	angleMode(DEGREES);
}

function draw() {
	background(0);

	stroke(255);
	noFill()
	beginShape();

	let spacing = map(mouseX, 0, width, 5, 100);

	for (let a = 0; a < 360; a += spacing) {
		let x = 100 * sin(a) + 200;
		let y = 100 * cos(a) + 200;
		vertex(x, y);
	}

	// vertex(100, 50);
	// vertex(200, 20);
	// vertex(200, 100);
	// vertex(50, 75);
	// vertex(25, 50);
	endShape(CLOSE);

}
