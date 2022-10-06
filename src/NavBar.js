import { NavLink } from "react-router-dom";

function NavBar() {
  return <div>{/*{code here}*/}</div>;
  return (
    <div className="navbar">{/*{code here}*/}
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/movies">Movies</NavLink></li>
          <li><NavLink to="/directors">Directors</NavLink></li>
          <li><NavLink to="/actors">Actors</NavLink></li>
        </ul>
      </nav>
    </div>);
}

export default NavBar;