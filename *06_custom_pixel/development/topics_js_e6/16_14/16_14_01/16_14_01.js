// 16.14: async/await Part 2

// https://www.youtube.com/watch?v=chavThlNz3s&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr&index=14

let wordnikAPI = "https://api.wordnik.com/v4/words.json/randomWord?&minLength=3&maxLength=5&api_key=7h2k0tlhvvthh4ys0inhgw32lc14uld68b50fstq70vxao2yr";
let giphyAPI = "https://api.giphy.com/v1/gifs/search?rating=PG&api_key=3Q17PY2B2je7TxVFmifXYCxO6g82vtJI&q=";

function setup() {
    noCanvas();
    wordGIF()
    .then(results => {
        createP(results.word);
        createImg(results.img, 'img');
    })
    .catch(err => console.error(err));
}

async function wordGIF() {

    let response1 = await fetch(wordnikAPI);
    let json1 = await response1.json();
    let response2 = await fetch(giphyAPI + json1.word);
    let json2 = await response2.json();
    let img_url = json2.data[0].images['fixed_height_small'].url;

    return {
        word: json1.word,
        img: img_url
    }
}
