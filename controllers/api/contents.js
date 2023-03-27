const fetch = require('node-fetch');
const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;


module.exports = {
    sources,
    huluTopTen
}


async function sources(req, res)  { 
    const response = await fetch(`${BASE_URL}/sources/?apiKey=${API_KEY}`)
    const watchmodeData = await response.json()
    res.json(watchmodeData)
    console.log(watchmodeData);
    };

async function huluTopTen(req, res) {
    const response = await fetch(`${BASE_URL}/list-titles/?apiKey=${API_KEY}&source_ids=157&sort_by=popularity_desc&limit=10`)
    const huluTopTenData = await response.json()
    res.json(huluTopTenData);
}




