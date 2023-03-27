import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import WatchList from '../../pages/WatchList/WatchList';
import NavBar from '../../components/NavBar/NavBar';
import Categories from '../Categories/Categories';
import HuluTopTen from '../HuluTopTen/HuluTopTen';
import Search from '../Search/Search';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/watchlist" element={<WatchList />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/hulutopten" element={<HuluTopTen />} />
              <Route path="/search" element={<Search />} />


            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
