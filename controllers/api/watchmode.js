const fetch = require('node-fetch');


// const sources = 'https://api.watchmode.com/v1/sources/?apiKey=x3q5qUMAWtxF1Bd819ykqWCm2HQAhaV1aM4goVu9';
// const networks = 'https://api.watchmode.com/v1/networks/?apiKey=x3q5qUMAWtxF1Bd819ykqWCm2HQAhaV1aM4goVu9';
// const search = 'https://api.watchmode.com/v1/search/?apiKey=x3q5qUMAWtxF1Bd819ykqWCm2HQAhaV1aM4goVu9&search_field=name&search_value=Ed%20Wood';
// const genres = 'https://api.watchmode.com/v1/genres/?apiKey=x3q5qUMAWtxF1Bd819ykqWCm2HQAhaV1aM4goVu9';

module.exports = {
    index,
    search
}


async function index(req, res)
    let watchmodeData = await fetch('https://api.watchmode.com/v1/sources/?apiKey=x3q5qUMAWtxF1Bd819ykqWCm2HQAhaV1aM4goVu9')
    .then((res) => res.json())
    .then((json) => {
        console.log(watchmodeData);
        res.json(watchmodeData);
    });

// fetch(networks, { method: 'Get' })
//     .then((res) => res.json())
//     .then((json) => {
//         console.log(json);
//     });

// fetch(search, { method: 'Get' })
//     .then((res) => res.json())
//     .then((json) => {
//         console.log(json);
//     });

// fetch(genres, { method: 'Get' })
//     .then((res) => res.json())
//     .then((json) => {
//         console.log(json);
//     });

