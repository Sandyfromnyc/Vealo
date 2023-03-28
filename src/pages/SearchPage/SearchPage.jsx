import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as contentsAPI from '../../utilities/contents-api';
import SearchForm from '../../components/SearchForm/SearchFrom';
import ContentSearchCard from '../../components/ContentSearchCard/ContentSearchCard';

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

async function handleSearch(searchItem) {
    const results = await contentsAPI.getSearch(searchItem);
    setSearchResults(results);
  }

async function handleDetail(id) {
  const contentDetail = await navigate(`/content/${id}`)
  return contentDetail
}

  const SearchResultsMap = searchResults.map((result, idx) => ( 
      <ContentSearchCard result={result} idx={idx} handleDetail={handleDetail}/>

  ))

  return ( 
    <>
    <div>
       <h1>Search Titles</h1>
       <SearchForm handleSearch={handleSearch}/>
    </div>
    <div>
      {SearchResultsMap}
    </div>
    </>
  );
}
