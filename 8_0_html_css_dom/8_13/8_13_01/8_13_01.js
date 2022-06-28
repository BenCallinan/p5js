// 8.13: Assigning a CSS Class Dynamically

// https://www.youtube.com/watch?v=KMRgLi2TBhQ&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=13

function setup() {
    for (var i = 0; i < 10; i++) {
        var p = createP('apples');
        var x = floor(random(windowWidth));
        var y = floor(random(windowHeight));
        p.position(x, y);
        p.class('apple');
    }

    for (var i = 0; i < 10; i++) {
        var p = createA('#', 'blueberries');
        var x = floor(random(windowWidth));
        var y = floor(random(windowHeight));
        p.position(x, y);
        p.class('blueberry');
        p.mousePressed(becomeApple);
    }
}

function becomeApple() {
    this.removeClass('blueberry');
    this.addClass('apple');
}
