// Functions 6

// Aim: Convert HKD to AUD

// Run code in p5.js web editor (https://editor.p5js.org/)

function setup() {
    var aud = hkdToAud(100);
    print("100 Hong Kong dollars is", aud, "Australian dollars.")
}

function hkdToAud(hkd) {
    var aud = hkd * 0.18
    return(aud);
}
