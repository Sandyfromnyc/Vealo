


const fetch = require('node-fetch');

let url = 'https://api.watchmode.com/v1/sources/?apiKey=x3q5qUMAWtxF1Bd819ykqWCm2HQAhaV1aM4goVu9';

fetch(url, { method: 'Get' })
    .then((res) => res.json())
    .then((json) => {
        console.log(json);
    });

