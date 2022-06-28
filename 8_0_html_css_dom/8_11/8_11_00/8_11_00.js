// 8.11: Callbacks on Multiple DOM Elements

// https://www.youtube.com/watch?v=KeZBpeH59Q4&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=11

var paragraphs;

var paragraph;

function setup() {
    createCanvas(100, 100);
    background(0);

    // paragraph = select('#unicorn');
    // paragraph.mouseOver(highlight);
    // paragraph.mouseOut(unhighlight);

    for (var i = 0; i < 100; i++) {
        var par = createP('rainbow!');
        par.position(random(500), random(500));
    }

    paragraphs = selectAll('p');
    //paragraphs = selectAll('.rainbow');
    for (var i = 0; i < paragraphs.length; i++) {
            paragraphs[i].mouseOver(highlight);
            paragraphs[i].mouseOut(unhighlight);
    }

    // var button = select('#button');
    // button.mousePressed(canvasBg);
}

function highlight() {
    this.style('padding','16pt');
    this.style('background-color', '#F0F');
}

function unhighlight() {
    this.style('padding','0pt');
    this.style('background-color', '#FFF');
}

function canvasBg() {
    background(random(255));
}
