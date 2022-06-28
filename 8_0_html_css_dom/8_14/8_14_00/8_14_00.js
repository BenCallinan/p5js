// 8.14: parent() and child() again with Variables

// https://www.youtube.com/watch?v=4OAG_BkQcPE&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=14

var p;

function setup() {
    noCanvas();
    p = createP('This is a link: ');
    p.style('background-color', '#CCC');
    p.style('padding', '24px');

    var a = createA('#', 'apples');
    a.mousePressed(addPhoto);

    a.parent(p);
}

function addPhoto() {
    var img = createImg('apples2.jpg');
    img.size(100, 100);
    img.parent(p);
}
