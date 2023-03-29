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
    <h1>
      {trendingitem.title}
      {trendingitem.year}
      {trendingitem.type}
      <button onClick={() => handleDetail(trendingitem.id)}>Get Details </button>
    </h1>

  </div>
))

  return (
     <ul>
      <li>
        {trendingMap}
      </li>
     </ul>
  )
}