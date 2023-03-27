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
    <nav>
      <Link to="/categories">Categories</Link>
      &nbsp; | &nbsp;
      <Link to="/hulutopten">Hulu Top Ten</Link>
      &nbsp; | &nbsp;
      <Link to="/watchlist">Add to Watchlist</Link>
      &nbsp;&nbsp;
      <span>Vealo 👍 {user.name} or 👎 No </span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}

// function BasicExample() {
  // return (
  //   <Navbar bg="dark" expand="lg" variant='dark'>
  //     <Container>
  //       <Navbar.Brand href="#home">Vealo 👍 👎 </Navbar.Brand>
  //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //       <Navbar.Collapse id="basic-navbar-nav">
  //         <Nav className="me-auto">
  //           <Nav.Link href="#home">Home</Nav.Link>
  //           <Nav.Link href="#link">Link</Nav.Link>
  //           <NavDropdown title="Categories" id="basic-nav-dropdown">
  //             <NavDropdown.Item href="#action/3.1">Movies</NavDropdown.Item>
  //             <NavDropdown.Item href="#action/3.2">
  //               Shows
  //             </NavDropdown.Item>
  //             <NavDropdown.Item href="#action/3.3">Networks</NavDropdown.Item>
  //             <NavDropdown.Divider />
  //             <NavDropdown.Item href="#action/3.4">
  //               See what others say.
  //             </NavDropdown.Item>
  //           </NavDropdown>
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Container>
  //   </Navbar>
  // );
// }

// export default BasicExample;