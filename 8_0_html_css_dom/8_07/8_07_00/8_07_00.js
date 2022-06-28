// 8.7: The Basics of CSS

// https://www.youtube.com/watch?v=zGL8q8iQSQw&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=7

// CSS Reference:

// https://developer.mozilla.org/en-US/docs/Web/CSS

// http://blooberry.com/indexdot/css/index.html

var bgcolor;
var button;
var txt;

function setup() {
    createCanvas(200, 200);
    bgcolor = color(51);
    txt = createP('some text');
    txt.mouseOver(changeStyle);
    txt.mouseOut(revertStyle);

    button = createButton('go');
    //button.mousePressed(changeStyle);
}

function changeStyle() {
    txt.style('background-color', 'pink');
    txt.style('padding', '24px');
}

function revertStyle() {
    txt.style('background-color', 'purple');
    txt.style('padding', '8px');
}

function draw() {
    background(bgcolor);
    fill(255, 0, 175);
    ellipse(100, 100, 50, 50);
}
