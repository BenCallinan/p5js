// 10.5: Working with APIs in Javascript

// https://www.youtube.com/watch?v=ecT42O6I_WI&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=6

// NOT WORKING

let weather;

let sel;

let london;
let hongkong;

function setup() {
    createCanvas(400, 400);

    london = loadJSON(
        'https://api.weatherbit.io/v2.0/current?city=london&key=988b1014462f47848dc4ed6173011dbe',
        lonData
    );

    hongkong = loadJSON(
        'https://api.weatherbit.io/v2.0/current?city=hongkong&key=988b1014462f47848dc4ed6173011dbe',
        hkData
    );

    sel = createSelect();
    sel.option('London', london);
    sel.option('Hong Kong', hongkong);
    //sel.option('Melbourne');
    sel.changed(selectCity);
}

function selectCity() {
    let item = sel.value();
    //text(item, 200, 200);
}

function lonData(data) {
    console.log(data);
    weather = data;
}

function hkData(data) {
    console.log(data);
    weather = data;
}

function draw() {
    background(255);

    if (weather) {

        let r = 0;
        let g = 0;
        let b = 0;

        let temp = weather.data[0].temp * 6

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
        ellipse(200, 200, 400, 400);
    }
}

// blue 0 to 84
// green 85 to 169
// red 170 to 255
