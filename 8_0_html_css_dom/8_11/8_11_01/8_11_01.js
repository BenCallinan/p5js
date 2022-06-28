// Use input events to change text

var head;
var byline;
var headp;
var content;
var poem;

function setup() {
    noCanvas();

    head = select('#head');
    head.style('font-size', '24pt');
    head.style('color', 'red');
    head.style('font-weight', 'bold');

    byline = select('#byline');
    byline.style('font-size', '12pt');
    byline.style('color', '#660000');
    byline.style('font-weight', 'normal');

    headp = selectAll('.top');
    for (var i = 0; i < headp.length; i++) {
        headp[i].mouseOver(graybg);
        headp[i].mouseOut(whitebg);
    }

    content = selectAll('p');
    for (var i = 0; i < content.length; i++) {
        content[i].style('font-family', 'sans-serif');
    }

    poem = selectAll('.poem');
    for (var i = 0; i < poem.length; i++) {
        poem[i].style('padding', '5pt');
        poem[i].mouseOver(blackbg);
        poem[i].mouseOut(bltextbg);
    }
}

function graybg() {
    this.style('background-color', '#E0E0E0')
}

function whitebg() {
    this.style('background-color', '#FFFFFF')
}

function blackbg() {
    this.style('background-color', '#000000')
    this.style('color', '#FFFFFF')
}

function bltextbg() {
    this.style('background-color', '#FFFFFF')
    this.style('color', '#000000')
}
