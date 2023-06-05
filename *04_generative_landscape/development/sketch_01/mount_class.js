// Aim: Create a mountain class

class Mountain {
    constructor(x) {
        this.x = x;

        this.mount1X = x + random(0, 50);
    	this.mount1Y = random(200, 500);

    	this.mount2X = x + random(50, 100);
    	this.mount2Y = random(200, 450);

    	this.mount3X = x + random(100, 150);
    	this.mount3Y = random(200, 450);

    	this.mount4X = x + random(150, 200);
    	this.mount4Y = random(200, 450);
    }

    show() {
        stroke(255);
    	fill(51);

    	beginShape();

    	// bottom left
    	vertex(this.x, 500);

    	vertex(this.mount1X, this.mount1Y);
    	vertex(this.mount2X, this.mount2Y);
    	vertex(this.mount3X, this.mount3Y);
    	vertex(this.mount4X, this.mount4Y);

    	// bottom right
    	vertex(this.x + 200, 500);

    	endShape();
    }
}

// class Mountain {
//     constructor(x, y) {
//         this.x;
//         this.y;
//         this.mount1X = random(0, 50);
//     	this.mount1Y = random(200, 500);
//
//     	this.mount2X = random(50, 100);
//     	this.mount2Y = random(200, 450);
//
//     	this.mount3X = random(100, 150);
//     	this.mount3Y = random(200, 450);
//
//     	this.mount4X = random(150, 200);
//     	this.mount4Y = random(200, 450);
//     }
//
//     show() {
//         stroke(255);
//     	fill(51);
//
//     	beginShape();
//
//     	// bottom left
//     	vertex(0, 500);
//
//     	vertex(this.mount1X, this.mount1Y);
//     	vertex(this.mount2X, this.mount2Y);
//     	vertex(this.mount3X, this.mount3Y);
//     	vertex(this.mount4X, this.mount4Y);
//
//     	// bottom right
//     	vertex(200, 500);
//
//     	endShape();
//     }
// }
