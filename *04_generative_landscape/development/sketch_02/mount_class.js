// Aim: Create a mountain class

class TinyM {
    constructor(x) {
        this.x = x;

        this.mount1X = x + random(0);
    	this.mount1Y = random(350, 450);

    	this.mount2X = x + random(50, 100);
    	this.mount2Y = random(350, 450);

    	this.mount3X = x + random(100, 150);
    	this.mount3Y = random(350, 450);

    	this.mount4X = x + random(150, 200);
    	this.mount4Y = random(350, 450);
    }

    show() {
        noStroke();
    	fill(0, 25, 50);

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

class LittleM {
    constructor(x) {
        this.x = x;

        this.mount1X = x + random(0);
    	this.mount1Y = random(200, 400);

    	this.mount2X = x + random(50, 100);
    	this.mount2Y = random(200, 400);

    	this.mount3X = x + random(100, 150);
    	this.mount3Y = random(200, 400);

    	this.mount4X = x + random(150, 200);
    	this.mount4Y = random(200, 400);
    }

    show() {
        noStroke();
    	fill(0, 75, 150);

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

class MidM {
    constructor(x) {
        this.x = x;

        this.mount1X = x + random(0);
    	this.mount1Y = random(100, 300);

    	this.mount2X = x + random(50, 100);
    	this.mount2Y = random(100, 300);

    	this.mount3X = x + random(100, 150);
    	this.mount3Y = random(100, 300);

    	this.mount4X = x + random(150, 200);
    	this.mount4Y = random(100, 300);
    }

    show() {
        noStroke();
    	fill(50, 150, 255);

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

class BigM {
    constructor(x) {
        this.x = x;

        this.mount1X = x + random(0);
    	this.mount1Y = random(0, 200);

    	this.mount2X = x + random(50, 100);
    	this.mount2Y = random(0, 200);

    	this.mount3X = x + random(100, 150);
    	this.mount3Y = random(0, 200);

    	this.mount4X = x + random(150, 200);
    	this.mount4Y = random(0, 200);
    }

    show() {
        noStroke();
    	fill(150, 200, 255);

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
