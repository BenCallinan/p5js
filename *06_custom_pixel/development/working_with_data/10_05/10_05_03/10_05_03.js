// 10.5: Working with APIs in Javascript

// https://www.youtube.com/watch?v=ecT42O6I_WI&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=6

let lonWeather;
let hkWeather;
let melWeather;

function setup() {
    createCanvas(800, 400);

    loadJSON(
        'https://api.weatherbit.io/v2.0/current?city=london&key=988b1014462f47848dc4ed6173011dbe',
        lonData
    )

    loadJSON(
        'https://api.weatherbit.io/v2.0/current?city=hongkong&key=988b1014462f47848dc4ed6173011dbe',
        hkData
    )

    loadJSON(
        'https://api.weatherbit.io/v2.0/current?city=melbourne&key=988b1014462f47848dc4ed6173011dbe',
        melData
    )

}

function lonData(data) {
    lonWeather = data;
}

function hkData(data) {
    hkWeather = data;
}

function melData(data) {
    melWeather = data;
}

function draw() {
    background(255);

    if (lonWeather) {

        let r = 0;
        let g = 0;
        let b = 0;

        let temp = lonWeather.data[0].temp * 6

        console.log(temp);

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
        ellipse(150, 200, 200, 200);

        fill(255);
        text('London ' + lonWeather.data[0].temp, 100, 200);

        //noLoop();
    }

    if (hkWeather) {

        let r = 0;
        let g = 0;
        let b = 0;

        let temp = hkWeather.data[0].temp * 6

        console.log(temp);

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
        ellipse(400, 200, 200, 200);

        fill(255);
        text('Hong Kong ' + hkWeather.data[0].temp, 350, 200);

        //noLoop();
    }

    if (melWeather) {

        let r = 0;
        let g = 0;
        let b = 0;

        let temp = melWeather.data[0].temp * 6

        console.log(temp);

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
        ellipse(650, 200, 200, 200);

        fill(255);
        text('Melbourne ' + melWeather.data[0].temp, 600, 200);

        //noLoop();
    }
}
