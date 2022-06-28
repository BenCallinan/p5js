// Aim: Create a list of European cities with images

function setup() {
    noCanvas();

    var lonImg = select('#lonImg');
    lonImg.parent('london');

    var parImg = select('#parImg');
    parImg.parent('paris');

    var romImg = select('#romImg');
    romImg.parent('rome');

    var berImg = select('#berImg');
    berImg.parent('berlin');

    var amsImg = select('#amsImg');
    amsImg.parent('amsterdam');

    var button = select('#button');
    button.mousePressed(addItem);
    button.style('margin-bottom', '20px');

}

function addItem() {
    var r = floor(random(0, city.length));
    var li = createElement('li', city[r]);
    li.style('list-style-type', 'numbers');
    li.style('margin-left', '20pt');
}
