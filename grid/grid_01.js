var canvasWidth = 400;
var canvasHeight = 400;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    stroke(255, 0, 0);
    strokeWeight(5.0);

    beginShape();
        var width = canvasWidth/50;
        var height = canvasHeight/50;

    for(var i=0; i <= height; i++) {
        vertex(0, i*50);
        vertex(canvasWidth, i*50);
        vertex(0, i*50);
    }

    for(var i=0; i <= width; i++) {
        vertex(i*50, 0);
        vertex(i*50, canvasHeight);
        vertex(i*50, 0);
    }

    endShape();
}
