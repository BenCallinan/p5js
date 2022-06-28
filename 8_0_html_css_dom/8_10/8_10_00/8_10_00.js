// 8.10: select() and selectAll() with CSS Selectors

// https://www.youtube.com/watch?v=sSQPLIHIzmg&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=10

var paragraph;

function setup() {
    createCanvas(100, 100);
    background(0);

    paragraph = select('#unicorn');
    paragraph.mouseOver(changeBackground);

    var button = select('#button');
    button.mousePressed(canvasBg);
}

function canvasBg() {
    background(random(255));
}

function changeBackground() {
    paragraph.style('background-color', '#F0F');
}
