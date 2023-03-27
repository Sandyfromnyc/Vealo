import { useState, useEffect } from 'react';
import * as contentsAPI from '../../utilities/contents-api'


export default function HuluTopTen() {
  const [hulutopten, setHuluTopTen] = useState([]);

useEffect(function() {
  async function showHuluTopTen() {
    const topTen = await contentsAPI.getHuluTopTen()
    setHuluTopTen(topTen);
  }
  showHuluTopTen();
}, []); 

const hulutopmap = hulutopten.map(())

  return (

  )
}