import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <nav class="navbar bg-body-tertiary" type="dark" variant="info">
          <div class="container-fluid">
            <a class="navbar-brand">
              <img src="../public/vealoLogo" alt="Logo" class="d-inline-block align-text-top"/>
            </a>
          </div>
     
        <Link to="/categories">Streaming Sources</Link>
        &nbsp; | &nbsp;
        <Link to="/trending">Trending</Link>
        &nbsp; | &nbsp;
        <Link to="/search">Search Titles</Link>
        &nbsp; | &nbsp;
        <Link to="/watchlist">Watchlist</Link>
        <Nav.Link href="/watchlist">My Comments</Nav.Link>
        &nbsp;&nbsp;
        <span>Vealo 👍  👎   {user.name}  </span>
        &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
     </nav>
    </>
  )
}