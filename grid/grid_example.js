var canvasWidth = 1200;
var canvasHeight = 1024;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  stroke("#DCA6A6");
  strokeWeight(0.1);

  beginShape();
  	var width = canvasWidth/8;
    var height = canvasHeight/8;

  	for(var i=0; i <= height; i++) {
      vertex(0,    i*8);
      vertex(canvasWidth, i*8);
      vertex(0,    i*8);
    }

  	for(var i=0; i <= width; i++) {
      vertex(i*8,    0);
      vertex(i*8, canvasHeight);
      vertex(i*8,    0);
    }

	endShape();
}
