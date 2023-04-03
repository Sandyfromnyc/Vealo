const fetch = require('node-fetch');
const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;
const Content = require('../../models/content');

module.exports = {
    sources,
    huluTopTen,
    search,
    show,
    trending
}

async function sources(req, res)  { 
    const response = await fetch(`${BASE_URL}/sources/?apiKey=${API_KEY}`)
    const watchmodeData = await response.json()
    res.json(watchmodeData)
    };

async function huluTopTen(req, res) {
    const response = await fetch(`${BASE_URL}/list-titles/?apiKey=${API_KEY}&source_ids=157&sort_by=popularity_desc&limit=10`)
    const huluTopTenData = await response.json()
    res.json(huluTopTenData.titles);
}

async function trending(req, res) {
    const response = await fetch(`${BASE_URL}/list-titles/?apiKey=${API_KEY}&sort_by=popularity_desc&limit=15`)  
    const trendingData = await response.json()
    res.json(trendingData.titles);
}



async function search(req, res) {
    const searchItem = req.query.searchItem
    if (!search) return null
    const response = await fetch(`${BASE_URL}/autocomplete-search/?apiKey=${API_KEY}&search_value=${searchItem}&search_type=2`)
   
    const searchData = await response.json()
    res.json(searchData.results);
}

async function show(req, res) {
    let content = await Content.findOne({id: req.params.id}).populate('comments.user', 'name')
    if (!content) {
        content = await fetch(`${BASE_URL}/title/${req.params.id}/details/?apiKey=${API_KEY}`).then((response) => response.json())
    const newContent = {
        title: content.title,
        type: content.type,
        id: content.id,
        year: content.year,
        poster: content.poster,
        genre_names: content.genre_names,
        user_rating: content.user_rating,
        us_rating: content.us_rating,
        plot_overview: content.plot_overview,
        trailer: content.trailer,
    };
        content = await Content.create(newContent);
        
        await content.populate('comments.user', 'name')
    }
    res.json(content);
    
}







