import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>Header</div>
      <ul>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
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
