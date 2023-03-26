import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/categories">Categories</Link>
      &nbsp; | &nbsp;
      <Link to="/watchlist">Add to Watchlist</Link>
      &nbsp;&nbsp;
      <span>Vealo 👍 {user.name} or 👎 No </span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}