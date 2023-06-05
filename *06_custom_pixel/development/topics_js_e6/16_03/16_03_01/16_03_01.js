// 16.3: ES6 Arrow Function

// https://www.youtube.com/watch?v=mrYMzpbFz18&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr&index=3

function setup() {
    createCanvas(600, 400);
    background(0);
    let button = createButton('press');

    // Method 1
    // button.mousePressed(changeBackground);
    //
    // function changeBackground() {
    //     background(random(255));
    // }

    // Method 2 --> anonymous function (has no name)
    // button.mousePressed(function() {
    //     background(random(255));
    // });

    // Method 3 --> arrow function
    button.mousePressed(() => background(random(255)));
}
