import { useState, useEffect } from 'react';
import * as contentsAPI from '../../utilities/contents-api'



export default function Categories() {
  const [sources, setSources] = useState([]);

useEffect(function() {
  async function getAllSources() {
    const allSources = await contentsAPI.getSources();
    setSources(allSources);
  }
  getAllSources();
}, []);

  const AllSources = sources.map((source, idx) => (
    <div key={idx}>

    <h1 key={idx
    }> {source.name}</h1>
    <img src={source.logo_100px} alt="{source.name} Logo" />
    </div>
  )) 

  return (
   
   <>
   
    <h1>Categories</h1>

    <div className="movie">
        <ul>
          <li> Movies </li>
        </ul>
    </div>

    <div className="shows"> 
      <ul>
        <li>{AllSources}</li>
      </ul>
    </div>
   </>
  );
}