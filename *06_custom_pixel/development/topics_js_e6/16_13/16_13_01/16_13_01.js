// 16.13: async/await Part 1

// https://www.youtube.com/watch?v=XO77Fib9tSI&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr&index=13

function setup() {
    noCanvas();
    delayES8(1000)
        .then(() => createP('hello'))
        .catch((err) => console.error(err));
}

async function delayES8(time) {

        // This function returns a promise!
        await delay(time);

        return;
}

function delay(time) {

    return new Promise((resolve, reject) => {
        if (isNaN(time)) {
            reject(new Error('delay requires a valid number.'));
        }
        setTimeout(resolve, time);
    });
}
