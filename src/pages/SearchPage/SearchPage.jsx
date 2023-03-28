import { useState } from 'react';
import * as contentsAPI from '../../utilities/contents-api';
import SearchForm from '../../components/SearchForm/SearchFrom';
import ContentSearchCard from '../../components/ContentSearchCard/ContentSearchCard';

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);

async function handleSearch(searchItem) {
    const results = await contentsAPI.getSearch(searchItem);
    setSearchResults(results);
  }

  const SearchResultsMap = searchResults.map((result, idx) => ( 
      <ContentSearchCard result={result} idx={idx}/>

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
