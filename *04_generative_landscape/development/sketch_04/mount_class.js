// Aim: Create a mountain class

class Mountain {
    constructor(x) {
        this.x = x;
        this.mountY = random(350, 425)

        this.mount1X = random(0);
    	this.mount1Y = random(350, 400);

    	this.mount2X = random(50, 100);
    	this.mount2Y = random(350, 400);

    	this.mount3X = random(100, 150);
    	this.mount3Y = random(350, 400);

    	this.mount4X = random(150, 200);
    	this.mount4Y = random(350, 400);
    }

    move() {
        this.x = this.x - 1;
    }

    show() {
        //stroke(255);
        noStroke();
    	fill(51);

    	beginShape();

    	// bottom left
    	vertex(this.x, 500);

    	vertex(this.x + this.mount1X, this.mount1Y);
    	vertex(this.x + this.mount2X, this.mount2Y);
    	vertex(this.x + this.mount3X, this.mount3Y);
    	vertex(this.x + this.mount4X, this.mount4Y);

    	// bottom right
    	vertex(this.x + 200, 500);

    	endShape();
    }
}
