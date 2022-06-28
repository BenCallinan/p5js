// 8.10: select() and selectAll() with CSS Selectors

// https://www.youtube.com/watch?v=sSQPLIHIzmg&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=10

var paragraphs;

function setup() {
    createCanvas(100, 100);
    background(0);

    //paragraph = select('#unicorn');
    //paragraphs = selectAll('p');
    paragraphs = selectAll('.rainbow');
    for (var i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style('font-size', '24pt');
    }

    var button = select('#button');
    button.mousePressed(canvasBg);
}

function canvasBg() {
    background(random(255));
}

function changeBackground() {
    paragraphs.style('background-color', '#F0F');
}
