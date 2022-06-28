// 8.12: parent() and child()

// https://www.youtube.com/watch?v=eoXLD0Aw1YI&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=12

var happy = ['rainbow', 'unicorn', 'purple', 'bacteria']

function setup() {
    noCanvas();

    var button = select('#button');
    button.mousePressed(addItem);
}

function addItem() {
    var r = floor(random(0, happy.length));
    var li = createElement('li', happy[r]);
    li.parent('happylist');
}
