// 10.5: Working with APIs in Javascript

// https://www.youtube.com/watch?v=ecT42O6I_WI&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=6

let weather;

function setup() {
    createCanvas(400, 200);

    loadJSON(
        'https://api.weatherbit.io/v2.0/current?city=london&key=988b1014462f47848dc4ed6173011dbe',
        gotData
    )
}

function gotData(data) {
    console.log(data);
    weather = data;
}

function draw() {
    background(0);

    if (weather) {
        ellipse(50, 100, weather.data[0].temp, weather.data[0].temp);

        console.log(weather.data[0].temp);
    }
}
