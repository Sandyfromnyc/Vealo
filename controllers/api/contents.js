const fetch = require('node-fetch');
const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;


module.exports = {
    sources,
    huluTopTen,
    search
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
    res.json(huluTopTenData.titles);
}

async function search(req, res) {
    const searchItem = req.query.searchItem
    if (!search) return null
    const url = `${BASE_URL}/autocomplete-search/?apiKey=${API_KEY}&search_value=${searchItem}}&search_type=2`
    const response = await fetch(`${BASE_URL}/autocomplete-search/?apiKey=${API_KEY}&search_value=${searchItem}}&search_type=2`)
    console.log(response, 'this is the response')
    const searchData = await response.json()
    console.log(searchData.results)
    res.json(searchData.results);
}







