import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>Header</div>
      <ul>
        {/* might need to move home out in the future. home is a logo not text */}
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
