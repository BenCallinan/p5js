// Aim: Create a list of cities of Europe

function setup() {
    noCanvas();

    var lonBut = select('#lonBut');
    lonBut.mousePressed(addLon);

    var parBut = select('#parBut');
    parBut.mousePressed(addPar);

    var romBut = select('#romBut');
    romBut.mousePressed(addRom);

    var berBut = select('#berBut');
    berBut.mousePressed(addBer);

    var amsBut = select('#amsBut');
    amsBut.mousePressed(addAms);
}

function addLon() {
    var lonP = createP('London');
    lonP.addClass('text');
    var lonImg = createImg('london.png', 'london');
    lonImg.size(200, 200);
    lonBut.disabled = true;
    lonP.child(lonImg)
}

function addPar() {
    var parP = createP('Paris');
    parP.addClass('text');
    var parImg = createImg('paris.png', 'paris');
    parImg.size(200, 200);
    parBut.disabled = true;
    parP.child(parImg)
}

function addRom() {
    var romP = createP('Rome');
    romP.addClass('text');
    var romImg = createImg('rome.jpg', 'rome');
    romImg.size(200, 200);
    romBut.disabled = true;
    romP.child(romImg)
}

function addBer() {
    var berP = createP('Berlin');
    berP.addClass('text');
    var berImg = createImg('berlin.jpg', 'berlin');
    berImg.size(200, 200);
    berBut.disabled = true;
    berP.child(berImg)
}

function addAms() {
    var amsP = createP('Amsterdam');
    amsP.addClass('text');
    var amsImg = createImg('amsterdam.png', 'amsterdam');
    amsImg.size(200, 200);
    amsBut.disabled = true;
    amsP.child(amsImg)
}
