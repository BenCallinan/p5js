// 16.12: Promises Part 2

// https://www.youtube.com/watch?v=AwyoVjVXnLk&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr&index=12

function setup() {
    noCanvas();
    delay(1000)
        .then(() => createP('hello'))
        .catch((err) => console.error(err));
}

function delay(time) {

    return new Promise((resolve, reject) => {
        if (isNaN(time)) {
            reject(new Error('delay requires a valid number.'));
        } else {
            setTimeout(resolve, time);
        }
    });
}

// function sayHello() {
//     createP('hello');
// }
