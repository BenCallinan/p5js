// 10.6: API Query with User Input

// https://www.youtube.com/watch?v=4UoUqnjUC2c&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=6

let weather;

let api = 'https://api.weatherbit.io/v2.0/current?city=';
let apiKey = '&key=988b1014462f47848dc4ed6173011dbe';

let input;

function setup() {
    createCanvas(400, 200);

    let button = select('#submit');
    button.mousePressed(weatherAsk);

    input = select('#city');
}

function weatherAsk() {
    let url = api + input.value() + apiKey;
    loadJSON(url, gotData);
}

function gotData(data) {
    weather = data;
}

function draw() {
    background(0);

    if (weather) {
        let temp = weather.data[0].temp;
        ellipse(50, 100, temp, temp);

    }
}
