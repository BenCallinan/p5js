// 10.6: API Query with User Input

// https://www.youtube.com/watch?v=4UoUqnjUC2c&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=6

let weather;

let api = 'https://api.weatherbit.io/v2.0/current?city=';
let apiKey = '&key=988b1014462f47848dc4ed6173011dbe';

let input;

function setup() {
    createCanvas(200, 200);

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
    background(255);

    if (weather) {

        let r = 0;
        let g = 0;
        let b = 0;

        let temp = weather.data[0].temp * 6;

        if (temp >= 0 && temp <= 84) {
            r = 0;
            g = 0;
            b = temp;
        } else if (temp >= 85 && temp <= 169) {
            r = 0;
            g = temp;
            b = 0;
        } else if (temp >= 170 && temp <= 255) {
            r = temp;
            g = 0;
            b = 0;
        }

        noStroke();
        fill(r, g, b);
        ellipse(100, 100, 200, 200);

        fill(255);
        textSize(16);
        text(weather.data[0].city_name +": ", 50, 70);

        textSize(48);
        text(weather.data[0].temp + "°C", 30, 120);

    }
}
