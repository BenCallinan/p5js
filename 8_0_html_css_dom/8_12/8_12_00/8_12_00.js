// 8.12: parent() and child()

// https://www.youtube.com/watch?v=eoXLD0Aw1YI&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=12



function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('canvasp');
}

function draw() {
    background(0);
    ellipse(200, 200, random(100), random(100));
}
