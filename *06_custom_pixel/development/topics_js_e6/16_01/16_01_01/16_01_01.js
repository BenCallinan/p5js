// 16.1: let vs var

// https://www.youtube.com/watch?v=q8SHaDQdul0&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr

function setup() {
    // console.log(x);
    // var x = 100;
    // console.log(x);

    // console.log(x);
    // let x = 100;
    // console.log(x);

    // let x;
    // console.log(x);
    // x = 100;
    // console.log(x);

    // HOISTING (pre-ES6) --> functionscope
    // Declares variables and deleted your variable declarations
    // Variable declared for the entire function

    // Issue: Variable available to a broader scope than they are declared
    // Can introduce errors
    // var i, x, y;
    // console.log(y);
    //
    // for (i =0; i < 100; i++) {
    //     // some stuff will happen
    // }
    // x = mouseX + 100;
    // if (x > 50) {
    //     y = 20;
    //     ellipse(x, y, 100, 100);
    // }
    // console.log(i);

    // blockscope (ES6) --> variables only available when declared
    for (let i = 0; i < 100; i++) {
        // some stuff will happen
        if (mouseX > 20) {
            let j = 20;
        }
        console.log(j);
    }
    console.log(i);
}
