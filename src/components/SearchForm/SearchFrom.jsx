import { useState } from "react";

export default function SearchForm({handleSearch}) {
  const [searchItem, setSearchItem] = useState('');
  
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(searchItem);
  }

  function handleChange(evt) {
    setSearchItem(evt.target.value)
  }

  return (
   <div>

    <form onSubmit={handleSubmit}> 
    <input type="text"
    placeholder="Hey, Search a Title"
    value={searchItem}
    onChange={handleChange}
    />
    <button type="submit">Search</button>
    </form>

   </div>
  )
}