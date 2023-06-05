// 16.16: try / catch with Promises

// https://www.youtube.com/watch?v=BztW_u6HDbs&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr&index=15

let wordnikAPI = "https://api.wordnik.com/v4/words.json/randomWord?&api_key=7h2k0tlhvvthh4ys0inhgw32lc14uld68b50fstq70vxao2yr";
let giphyAPI = "https://api.giphy.com/v1/gifs/search?rating=PG&api_key=3Q17PY2B2je7TxVFmifXYCxO6g82vtJI&q=";

function setup() {
    noCanvas();

    let promises = [];
    for (let i = 2; i < 10; i++) {
        promises.push(wordGIF(i));
    }
    Promise.all(promises)
    .then((results) => {
        for (let i = 0; i < results.length; i++) {
            createP(results[i].word);
            if (results[i].img !== null) {
                createImg(results[i].img, 'img');
            }
        }
    })
    .catch((err) => console.log(err));
}

async function wordGIF(num) {

    let response1 = await fetch(wordnikAPI + '&minLength=' + num + '&maxLength=' + num);
    let json1 = await response1.json();
    let response2 = await fetch(giphyAPI + json1.word);
    let json2 = await response2.json();
    let img_url = null;
    try {
        img_url = json2.data[0].images['fixed_height_small'].url;
    } catch (err) {
        console.log('no image found for ' + json1.word);
        console.error(err);
    }
    return {
        word: json1.word,
        img: img_url
    }
}
