// 8.14: parent() and child() again with Variables

// https://www.youtube.com/watch?v=4OAG_BkQcPE&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=14

var images = [];

function setup() {
    noCanvas();

    for (var i = 0; i < 5; i++) {
        var p = createP('This is a link: ');
        p.style('background-color', '#CCC');
        p.style('padding', '24px');

        var a = createA('#', 'apples');
        a.mousePressed(addPhoto);
        a.parent(p);
    }

    var button = select('#clear');
    button.mousePressed(clearStuff);
}

function clearStuff() {
    for (var i = 0; i < images.length; i++) {
        images[i].remove();
    }
    images = [];
}

function addPhoto() {
    var img = createImg('apples2.jpg', 'apple');
    images.push(img);
    img.size(100, 100);

    // Finds p as the parent of a
    var paragraph = this.parent();

    img.parent(paragraph);
}
