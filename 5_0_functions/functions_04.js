// 5.3: Functions and Return - p5.js Tutorial

// https://www.youtube.com/watch?v=qRnUBiTJ66Y&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=22

// Last worked on Friday 14 January 2022, 7:10am

// Run code in p5.js web editor (https://editor.p5js.org/)

function setup() {

    var km = milesToKm(26.3);
    print(km);
    var km2 = milesToKm(100);
    print(km2);
}

function milesToKm(miles) {
    var km = miles * 1.6;
    return km;
}
