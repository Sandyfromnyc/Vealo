import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';





export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <Navbar bg="light">
          <Container>
            <Navbar.Brand>
              <img 
              src={require('./vealoLogo.png')}
              width="100"
              height="40"
              className="d-inline-block align-center"
              alt="" />
            </Navbar.Brand>
     
              <Link to="/categories" bg="light" >Streaming Sources</Link>
             
              <Link to="/trending">Trending</Link>
              
              <Link to="/search">Search Titles</Link>
              
              <Link to="/watchlist">Watchlist</Link>
              <Link to="/watchlist">My Comments</Link>
              
              <span>Vealo 👍  👎   {user.name}  </span>
            
              <Link to="" onClick={handleLogOut}>Log Out</Link>
          </Container >
      </Navbar>
    </>
  )
}