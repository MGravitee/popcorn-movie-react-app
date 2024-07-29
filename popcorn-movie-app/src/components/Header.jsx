import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <NavLink to="/">
        <img src="/popcorn-logo.svg" alt="Popcorn logo" />
      </NavLink>
      <NavLink to="/">
        <h3>POPCORN</h3>
      </NavLink>
      <ul className="nav-ul">
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/favourites">favourites</NavLink>
        </li>
      </ul>
    </header>
  );
}
export default Header;
