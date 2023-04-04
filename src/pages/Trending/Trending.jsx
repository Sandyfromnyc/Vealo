import { useState, useEffect } from 'react';
import * as contentsAPI from '../../utilities/contents-api'
import { useNavigate } from 'react-router-dom';

export default function Trending() {
  const [trending, setTrending] = useState([]);

  const navigate = useNavigate();

useEffect(function() {
  async function showTrending() {
    const topTrending = await contentsAPI.getTrending()
    setTrending(topTrending);
  }
  showTrending();
}, []); 

async function handleDetail(id) {
  const contentDetail = await navigate(`/content/${id}`)
  return contentDetail
}


const trendingMap = trending.map((trendingitem, idx) => (
  <div key={idx}>
  
    <div className='card m-3 p-3'>
          <img src={trendingitem.image_url} alt={trendingitem.name} poster/>  
      <div className='details'>
           <h2 className='title'> {trendingitem.title} </h2>
           <p className='description'>{trendingitem.year}</p> 
            <p className="description">{trendingitem.type} </p>
           
            <button onClick={() => handleDetail(trendingitem.id)}>Get Details </button>
      
      </div>
    </div>

  </div>
))

  return (
    <>

  <h1> See What's trending</h1>
  
        {trendingMap}
    
    </>
  )
}