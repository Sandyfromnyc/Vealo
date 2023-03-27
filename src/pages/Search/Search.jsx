import { useState } from 'react';
import * as contentsAPI from '../../utilities/contents-api';


export default function searchBar() {
  const [search, setSearch] = useState('');

  return (
    <div>
        <form >
          
        </form>
        
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search for Movie or Show</b-button>
          </b-nav-form>
        </b-navbar-nav>
    </div>
  );
}
