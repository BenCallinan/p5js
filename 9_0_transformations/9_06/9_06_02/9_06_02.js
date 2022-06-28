var counts = [];

var timer = 0;


function setup() {
    noCanvas();

    for (let i = 0; i < 50; i++) {
        counts[i] = createP('timer');
        makeTimer(counts[i], random(5000));
    }
}

function makeTimer(elt, wait) {
    var counter = 0;
    setInterval(timePass, wait);
    function timePass() {
        elt.html(counter);
        counter++;
    }
}
