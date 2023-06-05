// Aim: Create a mountain class

class TinyM {
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
        noStroke();
    	fill(25, 25, 10);

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

class LittleM {
    constructor(x) {
        this.x = x;

        this.mount1X = random(0);
    	this.mount1Y = random(200, 350);

    	this.mount2X = random(40, 50);
    	this.mount2Y = random(200, 350);

    	this.mount3X = random(80, 100);
    	this.mount3Y = random(200, 350);

    	this.mount4X = random(120, 150);
    	this.mount4Y = random(200, 350);

    	this.mount5X = random(160, 200);
    	this.mount5Y = random(200, 350);
    }

    move() {
        this.x = this.x - 1;
    }

    show() {
        noStroke();
    	fill(40, 40, 20);

    	beginShape();

    	// bottom left
    	vertex(this.x, 500);

    	vertex(this.x + this.mount1X, this.mount1Y);
    	vertex(this.x + this.mount2X, this.mount2Y);
    	vertex(this.x + this.mount3X, this.mount3Y);
    	vertex(this.x + this.mount4X, this.mount4Y);
        vertex(this.x + this.mount5X, this.mount5Y);


    	// bottom right
    	vertex(this.x + 200, 500);

    	endShape();
    }
}

class MidM {
    constructor(x) {
        this.x = x;

        this.mount1X = random(0);
    	this.mount1Y = random(100, 300);

    	this.mount2X = random(40, 50);
    	this.mount2Y = random(100, 300);

    	this.mount3X = random(80, 100);
    	this.mount3Y = random(100, 300);

    	this.mount4X = random(120, 150);
    	this.mount4Y = random(100, 300);

        this.mount5X = random(160, 200);
    	this.mount5Y = random(100, 300);
    }

    move() {
        this.x = this.x - 1;
    }

    show() {
        noStroke();
    	fill(75, 75, 60);

    	beginShape();

    	// bottom left
    	vertex(this.x, 500);

    	vertex(this.x + this.mount1X, this.mount1Y);
    	vertex(this.x + this.mount2X, this.mount2Y);
    	vertex(this.x + this.mount3X, this.mount3Y);
    	vertex(this.x + this.mount4X, this.mount4Y);
        vertex(this.x + this.mount5X, this.mount5Y);

    	// bottom right
    	vertex(this.x + 200, 500);

    	endShape();
    }
}

class BigM {
    constructor(x) {
        this.x = x;

        this.mount1X = random(0);
    	this.mount1Y = random(0, 250);

    	this.mount2X = random(40, 50);
    	this.mount2Y = random(0, 250);

    	this.mount3X = random(80, 100);
    	this.mount3Y = random(0, 300);

    	this.mount4X = random(120, 150);
    	this.mount4Y = random(0, 250);

        this.mount4X = random(160, 200);
    	this.mount4Y = random(0, 250);
    }

    move() {
        this.x = this.x - 1;
    }

    show() {
        noStroke();
    	fill(100, 100, 80);

    	beginShape();

    	// bottom left
    	vertex(this.x, 500);

    	vertex(this.x + this.mount1X, this.mount1Y);
    	vertex(this.x + this.mount2X, this.mount2Y);
    	vertex(this.x + this.mount3X, this.mount3Y);
    	vertex(this.x + this.mount4X, this.mount4Y);
        vertex(this.x + this.mount5X, this.mount5Y);

    	// bottom right
    	vertex(this.x + 200, 500);

    	endShape();
    }
}
